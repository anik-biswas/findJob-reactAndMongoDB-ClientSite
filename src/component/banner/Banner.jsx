import React from 'react';

const Banner = () => {
    return (
        <div>
           <div className="hero h-3/4 " style={{backgroundImage: 'url(https://i.ibb.co/SKwWc03/images-2.jpg)'}}>
            <div className="hero-overlay bg-opacity-70"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Find Jobs</h1>
                <p className="mb-5">We serve as the modern equivalent of classified ads by compiling and listing available telecommute, remote, and local openings.</p>
                <input type="text" placeholder="Type here" className="input input-bordered w-60 mr-4" />
                <button className="btn btn-primary">Search</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Banner;