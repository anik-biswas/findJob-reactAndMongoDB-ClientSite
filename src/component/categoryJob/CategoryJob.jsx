import React from 'react';

const CategoryJob = ({job}) => {
    const { name, salary,category,userName,deadline,postDate,jobBanner,appNumber,description ,comName,comLogo} = job;
    const uName= userName.split('@')[0];
    console.log(job)
    return (
        <div className="card w-64 bg-green-200 shadow-xl">
            <div className="card-body">
                <h2 className="card-title text-zinc-950 ">{name}</h2>
                <p className='text-lg font-semibold  '>Added By :{uName}</p>
                <div className='grid grid-cols-2 text-base text-emerald-900'>
                Post Date :<p>{postDate}</p>
                Deadline : <p>{deadline}</p>
                Salary Range: <p>{salary}</p>
                </div>
                
                <div className='grid grid-cols-2 space-x-5'>
                <div className="card-actions justify-start">
                <p>Apply: {appNumber}</p>
                </div>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Details</button>
                </div>
                </div>
            </div>
            </div>
    );
};

export default CategoryJob;