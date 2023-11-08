import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../firebase/AuthProvider';

const AppliedJob = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const email = user?.email;
    const [categories,setCategories] = useState([]);
    const [applies, setApplies] = useState([]);
    const [filterApplies, setFilteredApplies] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All'); // Initialize with 'All' as the default category
    useEffect ( () => {
        fetch('http://localhost:5000/category')
        .then (res => res.json())
        .then(data =>setCategories(data))
        
    },[])
    useEffect(() => {
        fetch('http://localhost:5000/apply')
            .then((res) => res.json())
            .then((data) => {
                setApplies(data);
                filterApplied(data, email, selectedCategory);
            });
    }, [email, selectedCategory]); // Include selectedCategory as a dependency

    const filterApplied = (applies, email, category) => {
        const filtered = applies.filter((apply) => {
            return apply.userName === email && (category === 'All' || apply.category === category);
        });
        setFilteredApplies(filtered);
    };

    const handleCategoryChange = (e) => {
        const category = e.target.value;
        setSelectedCategory(category);
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
                            {/* Add options for all available categories */}
                            {/* <option value="Category1">Category 1</option>
                            <option value="Category2">Category 2</option> */}
                            {/* Add more options for each category */}
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
                            {filterApplies.map((apply, index) => (
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
                                        <button
                                            className="btn"
                                            // Implement the action to remove the applied job here
                                            // You can use apply._id to identify and remove the job
                                        >
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