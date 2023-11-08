import React from 'react';

const EmployeeSection = () => {
    return (
        <div className='grid '>
            <div className='my-10'>
            <h2 className='text-xl md:text-2xl lg:text-4xl text-center text-gray-600 font-bold'>discover 1000+ inclusive employers</h2>
            <div className="grid p-10 grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
        <div className="card w-64 md:w-72  lg:w-72 bg-amber-100 shadow-xl">
         <div className="card-body">
         <p>This website always surprize you with high profile job </p>
       <div className="card-actions justify-start">
       <div className="flex  items-center justify-center align-middle">
       <div className="avatar">
       <div className="w-12">
          <img className='rounded-full' src="https://i.ibb.co/T8kccCQ/badge.webp" />
          </div>
        </div>
        </div> 
       <div className="badge badge-outline">Jhon </div>
       </div>
       </div>
       </div>
        <div className="card w-64 md:w-72  lg:w-72 bg-red-100 shadow-xl">
         <div className="card-body">
         <p>Enjoy your life by getting job from here</p>
       <div className="card-actions justify-start">
       <div className="flex  items-center justify-center align-middle">
       <div className="avatar">
       <div className="w-12">
          <img className='rounded-full' src="https://i.ibb.co/rQfNKYb/2a.webp" />
          </div>
        </div>
        </div> 
       <div className="badge badge-outline">Roky</div>
       </div>
       </div>
       </div>
        <div className="card w-64 md:w-72  lg:w-72 bg-lime-100 shadow-xl">
         <div className="card-body">
         <p>I invite these website to Get Your Dream job</p>
       <div className="card-actions justify-start">
       <div className="flex  items-center justify-center align-middle">
       <div className="avatar">
       <div className="w-12">
          <img className='rounded-full' src="https://i.ibb.co/1XnW1gp/download-1.webp" />
          </div>
        </div>
        </div> 
       <div className="badge badge-outline">Jonson</div>
       </div>
       </div>
       </div>
       
        </div>
        </div>
        <div className='my-10'>
            <h2 className='text-xl md:text-2xl lg:text-4xl text-center text-gray-600 font-bold'>
           trusted by pioneering companies</h2>
           <div className="grid p-10 grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-6 justify-items-center">
            <img className='rounded-full w-40 h-40' src="https://i.ibb.co/R4XtBYw/denside-logo-design-d-letter-logo-concept-by-abdul-gaffar-dribbble.png" alt="" />
            <img className='rounded-full w-40 h-40' src="https://i.ibb.co/PTMVP3f/attachment-88710509.png" alt="" />
            <img className='rounded-full w-40 h-40' src="https://i.ibb.co/MG59bzH/download-1.png" alt="" />
            <img className='rounded-full w-40 h-40'  src="https://i.ibb.co/Y8ghfxD/n-Vidia-Company-Logo.jpg" alt="" />
            <img className='rounded-full w-40 h-40' src="https://i.ibb.co/gRnwY0q/download-4.jpg" alt="" />
            <img className='rounded-full w-40 h-40' src="https://i.ibb.co/QvN3xDT/company-software-logo-vector-30110662.jpg" alt="" />
           </div>

        </div>

        </div>
    );
};

export default EmployeeSection;
