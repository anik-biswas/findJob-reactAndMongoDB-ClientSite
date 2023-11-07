import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../firebase/AuthProvider';

const AppliedJob = () => {
    const location = useLocation();
    const navigate = useNavigate();
   // const carts = useLoaderData() ;
    const{user}= useContext(AuthContext);
    const email = user.email;
    const [applies, setApplies] = useState([]);
    const [filterApplies, setFilteredApplies] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/apply')
            .then((res) => res.json())
            .then((data) => {
                setApplies(data);
                filteredApplied(data, email);
            });
    }, [email]);
    const filteredApplied= (applies, email) => {
        const filtered = applies.filter((apply) => apply.userName === email);
        setFilteredApplies(filtered);
    };
    console.log(filterApplies);
    return (
        <div>
        <div>
        <h2 className="font-bold text-xl text-center">Cart List</h2>
        <div className="overflow-x-auto justify-center items-center text-center px-5 md:px-10 lg:px-20">
            <table className="table ">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th className="text-red-400">Title</th>
                        <th className="text-red-400">image</th>
                        <th className="text-red-400">Category</th>
                        <th className="text-red-400">Salary</th>
                        <th className="text-red-400">Resume</th>
                        <th className="text-red-400">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        filterApplies.map((apply, index) => <tr key={user._id}>
                            <th>{index+1}</th>
                            <th className="text-xs">{apply.name}</th>
                            <th><img src={apply.jobBanner}  className="w-10 md:w-16  h-10 md:h-16" alt="" /></th>
                            <td>{apply.category}</td>
                            <td>{apply.salary}</td>
                            <td>{apply.cvLink}</td>
                            <td>
                                <button 
                                     className="btn">X</button>
                            </td>
                        </tr>)
                       
                    }

                </tbody>
            </table>
        </div>
    </div>
    </div>
    );
};

export default AppliedJob;