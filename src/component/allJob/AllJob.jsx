import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const AllJob = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [jobs,setJobs]= useState([])
    useEffect ( () => {
        fetch('http://localhost:5000/job')
        .then (res => res.json())
        .then(data =>setJobs(data))
        
    },[])
    console.log(jobs)
    return (
        <div className='overflow-x-auto justify-center items-center text-center px-5 md:px-10 lg:px-20'>
            <table className="table">
                        {/* Table header */}
                        <thead>
                            <tr>
                                <th></th>
                                <th className="text-red-400">Title</th>
                                <th className="text-red-400">Added By</th>
                                <th className="text-red-400">Category</th>
                                <th className="text-red-400">Post Date</th>
                                <th className="text-red-400">Deadline</th>
                                <th className="text-red-400">Salary</th>
                                <th className="text-red-400">Action</th>
                            </tr>
                        </thead>
                        {/* Table body */}
                        <tbody>
                            {jobs.map((job, index) => (
                                <tr key={job._id}>
                                    <td>{index + 1}</td>
                                    <td className="text-xs">{job.name}</td>
                                    <td>{job.userName} </td>
                                    <td>{job.category}</td>
                                    <td>{job.postDate}</td>
                                    <td>{job.deadline}</td>
                                    <td>{job.salary}</td>
                                    <td>
                                    <Link to={`/jobDetails/${job._id}`}><button className="btn">
                                            Details
                                        </button></Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
        </div>
    );
};

export default AllJob;