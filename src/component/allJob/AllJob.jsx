import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const AllJob = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [jobs,setJobs]= useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    useEffect ( () => {
        fetch('https://job-server-mu.vercel.app/job')
        .then (res => res.json())
        .then(data =>setJobs(data))
        
    },[])
    const filteredJobs = jobs.filter(job =>
        job.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    console.log(jobs)
    return (
        <div>
        <div className=" my-4 mx-10 md:mx-20 lg:mx-24">
        <input
            type="text"
            placeholder="Search by Job Title"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="input input-bordered"
        />
    </div>
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
                            {filteredJobs.map((job, index) => (
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
        </div>
    );
};

export default AllJob;