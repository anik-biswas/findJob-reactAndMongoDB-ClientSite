import React, { useContext, useRef, useState, useEffect } from 'react';
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../firebase/AuthProvider';

const JobDetails = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const email = user.email;

    const [job, setJob] = useState(useLoaderData());
    const { _id, name, salary, category, userName, deadline, postDate, jobBanner, appNumber, description, comName, comLogo } = job;

    const uName = email.split('@')[0];
    const [modelShow, setModelShow] = useState(false);

    const openModal = () => {
        setModelShow(true);
    };

    const closeModal = () => {
        setModelShow(false);
    };

    const handleApply = () => {
        const currentDate = new Date();
        if (currentDate > new Date(deadline)) {
            console.log("Deadline has passed. You can't apply.");
        } else if (email === userName) {
            console.log("User cannot apply to their own job.");
        } else {
            openModal();
        }
    };

    const updateAppNumber = () => {
        // Update appNumber in the state
        setJob((prevJob) => ({
            ...prevJob,
            appNumber: parseInt(prevJob.appNumber, 10) + 1,
        }));
    };

    const handleJobApply = (e) => {
        e.preventDefault();
        const form = e.target;
        const uName = form.uName.value;
        const userName = form.userName.value;
        const cvLink = form.cvLink.value;

        const newApply = { _id, name,salary, category,jobBanner, uName, userName, cvLink };

        console.log(newApply);
        fetch('http://localhost:5000/apply', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newApply),
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            if (data.success) {
                
                closeModal();
                updateAppNumber();
            }
        });
    };

    return (
        <div className='items-center mx-16 md:mx-24 lg:mx-32 my-8'>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure className='w-full lg:w-1/2'><img src={jobBanner} alt="Album" /></figure>
                <div className="card-body">
                    <div className='flex items-center justify-center space-x-5'>
                        <div className="avatar">
                            <div className="w-16 rounded-full">
                                <img src={comLogo} />
                            </div>
                        </div>
                        <p>{comName}</p>
                    </div>

                    <h2 className="card-title">{name}</h2>
                    <div className='grid grid-cols-2 text-base text-emerald-900'>
                        Salary Range: <p>{salary} $</p>
                        Applications: <p>{appNumber}</p>
                        Description : <p>{description}</p>
                    </div>

                    <div className="card-actions justify-end">
                        <button className="btn btn-primary" onClick={handleApply}>Apply</button>
                    </div>

                    {modelShow && (
                        <dialog className="modal" open>
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={closeModal}>✕</button>
                                </form>
                                <h3 className="font-bold text-lg">Apply Now</h3>
                                <div>
                                    <form onSubmit={handleJobApply} method="dialog">
                                    <div className="form-control md:w-full ">
                                            <label className="label">
                                                <span className="label-text text-lg">User Name</span>
                                            </label>
                                            <label className="input-group">
                                                <input
                                                    type="text"
                                                    name="uName"
                                                    placeholder=""
                                                    defaultValue={uName}
                                                    className="input input-bordered w-full"
                                                    required
                                                />
                                            </label>
                                        </div>
                                        <div className="form-control md:w-full ">
                                            <label className="label">
                                                <span className="label-text text-lg">User Email</span>
                                            </label>
                                            <label className="input-group">
                                                <input
                                                    type="text"
                                                    name="userName"
                                                    placeholder=""
                                                    defaultValue={email}
                                                    className="input input-bordered w-full"
                                                    required
                                                />
                                            </label>
                                        </div>
                                        <div className="form-control md:w-full ">
                                            <label className="label">
                                                <span className="label-text text-lg">Your Resume</span>
                                            </label>
                                            <label className="input-group">
                                                <input
                                                    type="text"
                                                    name="cvLink"
                                                    placeholder="Your Resume Link"
                                                    className="input input-bordered w-full"
                                                    required
                                                />
                                            </label>
                                        </div>
                                        <div className='mt-5 justify-center items-center'>
                                            <button className="btn">Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </dialog>
                    )}
                </div>
            </div>
        </div>
    );
};

export default JobDetails;
