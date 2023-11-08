import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../firebase/AuthProvider';
import Swal from 'sweetalert2';

const AppliedJob = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const email = user?.email;
    const [categories, setCategories] = useState([]);
    const [applies, setApplies] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All'); // Initialize with 'All' as the default category

    useEffect(() => {
        fetch('http://localhost:5000/category')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, []);

    const filterApplied = (applies, email, category) => {
        return applies.filter((apply) => {
            return apply.userName === email && (category === 'All' || apply.category === category);
        });
    };

    const [filterDelete, setFilterAfterDelete] = useState([]);

    const fetchAppliedJobs = () => {
        fetch('http://localhost:5000/apply')
            .then((res) => res.json())
            .then((data) => {
                setApplies(data);
                const filteredApplies = filterApplied(data, email, selectedCategory);
                setFilterAfterDelete(filteredApplies);
            });
    };

    useEffect(() => {
        fetchAppliedJobs();
    }, [email, selectedCategory]);

    const handleCategoryChange = (e) => {
        const category = e.target.value;
        setSelectedCategory(category);
    };

    const handleDelete = (_id) => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "Delete Job won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/apply/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Job has been deleted.',
                                'success'
                            );

                            // After successful deletion, fetch the updated data
                            fetchAppliedJobs();
                        }
                    });
            }
        });
    };

    return (
        <div>
            <div>
                <h2 className="font-bold text-xl text-center">Applied Jobs</h2>
                <div className="overflow-x-auto justify-center items-center text-center px-5 md:px-10 lg:px-20">
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2">Filter by Category:</label>
                        <select
                            className="block appearance-none w-full bg-white border border-gray-300 rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                            value={selectedCategory}
                            onChange={handleCategoryChange}
                        >
                            <option value="All">All</option>

                            {categories.map((category, index) => (
                                <option key={index} value={category.name}>
                                    {category.name}
                                </option>
                            ))}

                        </select>
                    </div>
                    <div className='overflow-x-auto justify-center items-center text-center px-5 md:px-10 lg:px-20'>
                        <table className="table">
                            {/* Table header */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th className="text-red-400">Title</th>
                                    <th className="text-red-400">Image</th>
                                    <th className="text-red-400">Category</th>
                                    <th className="text-red-400">Salary</th>
                                    <th className="text-red-400">Resume</th>
                                    <th className="text-red-400">Action</th>
                                </tr>
                            </thead>
                            {/* Table body */}
                            <tbody>
                                {filterDelete.map((apply, index) => (
                                    <tr key={apply._id}>
                                        <td>{index + 1}</td>
                                        <td className="text-xs">{apply.name}</td>
                                        <td>
                                            <img src={apply.jobBanner} className="w-10 md:w-16 h-10 md:h-16" alt="" />
                                        </td>
                                        <td>{apply.category}</td>
                                        <td>{apply.salary}</td>
                                        <td>{apply.cvLink}</td>
                                        <td>
                                            <button onClick={() => handleDelete(apply._id)} className="btn">
                                                X
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AppliedJob;
