import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../firebase/AuthProvider';

const MyJob = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const email = user?.email;
    const [jobs, setJobs] = useState([]);
    const [filterJobs, setFilteredJobs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/job')
            .then((res) => res.json())
            .then((data) => {
                setJobs(data);
                filterJob(data, email);
            });
    }, [email]);
    const filterJob = (jobs, email) => {
        const filtered = jobs.filter((job) => {
            return job.userName === email ;
        });
        setFilteredJobs(filtered);
    };
    console.log(filterJobs)
    return (
        <div>
            <div className='overflow-x-auto justify-center items-center text-center px-5 md:px-10 lg:px-20'>
         
         <table className="table">
                     {/* Table header */}
                     <thead>
                         <tr>
                             <th></th>
                             <th className="text-red-400">Title</th>
                             <th className="text-red-400">Category</th>
                             <th className="text-red-400">Post Date</th>
                             <th className="text-red-400">Deadline</th>
                             <th className="text-red-400">Salary</th>
                             <th className="text-red-400">Action</th>
                             <th className="text-red-400">Action</th>
                         </tr>
                     </thead>
                     {/* Table body */}
                     <tbody>
                         {filterJobs.map((job, index) => (
                             <tr key={job._id}>
                                 <td>{index + 1}</td>
                                 <td className="text-xs">{job.name}</td>
                                
                                 <td>{job.category}</td>
                                 <td>{job.postDate}</td>
                                 <td>{job.deadline}</td>
                                 <td>{job.salary}</td>
                                 <td>
                                 <button className="btn">
                                         Update
                                     </button>
                                 </td>
                                 <td>
                                 <button className="btn">
                                         Delete
                                     </button>
                                 </td>
                             </tr>
                         ))}
                     </tbody>
                 </table>
     </div>
        </div>
    );
};

export default MyJob;