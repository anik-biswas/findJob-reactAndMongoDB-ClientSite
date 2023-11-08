import React, { useEffect, useState } from 'react';
import { Navigate, useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import DatePicker from 'react-datepicker';

const UpdateJob = () => {
    const location= useLocation();
  const navigate= useNavigate();
    const job = useLoaderData();
    const  { _id,name, salary,category,userName,deadline,postDate,jobBanner,appNumber,description,comName,comLogo } = job ;
    const [categories,setCategories] = useState([]);
    useEffect ( () => {
        fetch('https://job-server-topaz.vercel.app/category')
        .then (res => res.json())
        .then(data =>setCategories(data))
        
    },[])
   const [deadlines, setDeadline] = useState(null);

    const handleUpdateJob = event => {
        event.preventDefault();
    
        const form = event.target;
        const selectElement = document.getElementById("categorySelect");
        
        const name = form.name.value;
        const category = selectElement.value;
        const salary = form.salary.value;
        const userName = form.userName.value;
        const deadline = form.deadline.value;
        const description = form.description.value;
        const postDate = form.postDate.value;
        const jobBanner = form.jobBanner.value;
        const appNumber = form.appNumber.value;
        const comName = form.comName.value;
        const comLogo = form.comLogo.value;
    
        const updateJob = { name, salary,category,userName,deadline,postDate,jobBanner,appNumber,description,comName,comLogo }
    
        console.log(updateJob);
    
        fetch(`https://job-server-topaz.vercel.app/job/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateJob)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Job Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                      })
                }
                navigate(location?.state ? location.state : '/');
          })
    }
    return (
        <div>
      <div className="bg-[#CBE4E9] p-4 lg:p-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <h2 className="text-2xl md:text-3xl lg:text-3xl font-extrabold">
            Update Job
          </h2>
          
        </div>
        <form onSubmit={handleUpdateJob}>
          <div className="md:flex mb-4 lg:mb-8">
            <div className="form-control md:w-full lg:w-1/2">
              <label className="label">
                <span className="label-text">Job Title</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="name"
                  defaultValue={name} 
                  placeholder="Job Title"
                  className="input input-bordered w-full"
                  required
                />
              </label>
            </div>
            <div className="form-control md:w-full lg:w-1/2 ml-0 lg:ml-4 mt-4 lg:mt-0">
              <label className="label">
                <span className="label-text">Category Name</span>
              </label>
              <label className="input-group">
                <select
                  className="select input input-bordered w-full"
                  id="categorySelect"
                  value={category}
                  required
                >
                  {categories.map((category, index) => (
                    <option key={index} value={category.name}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </div>
          <div className="md:flex mb-4 lg:mb-8">
            <div className="form-control md:w-full lg:w-1/2">
              <label className="label">
                <span className="label-text">Salary Range</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="salary"
                  defaultValue={salary} 
                  placeholder="Salary Range"
                  className="input input-bordered w-full"
                  required
                />
              </label>
            </div>
            <div className="form-control md:w-full lg:w-1/2 ml-0 lg:ml-4 mt-4 lg:mt-0">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="description"
                  defaultValue={description} 
                  placeholder="Description"
                  className="input input-bordered w-full"
                  required
                />
              </label>
            </div>
          </div>
          <div className="md:flex mb-4 lg:mb-8">
            <div className="form-control md:w-full lg:w-1/2">
              <label className="label">
                <span className="label-text">User Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="userName"
                  placeholder=""
                  defaultValue={userName}
                  className="input input-bordered w-full"
                  required
                />
              </label>
            </div>
            <div className="form-control md:w-full lg:w-1/2 ml-0 lg:ml-4 mt-4 lg:mt-0">
              <label className="label">
                <span className="label-text">Applicant Number</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="appNumber"
                  defaultValue={appNumber}
                  placeholder=""
                  className="input input-bordered w-full"
                  required
                />
              </label>
            </div>
          </div>
          <div className="md:flex mb-4 lg:mb-8">
            <div className="form-control md:w-full lg:w-1/2">
              <label className="label">
                <span className="label-text">Company Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="comName"
                  placeholder="Company Name"
                  defaultValue={comName} 
                  className="input input-bordered w-full"
                  required
                />
              </label>
            </div>
            <div className="form-control md:w-full lg:w-1/2 ml-0 lg:ml-4 mt-4 lg:mt-0">
              <label className="label">
                <span className="label-text">Company Logo</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="comLogo"
                  defaultValue={comLogo} 
                  placeholder="Company Logo"
                  className="input input-bordered w-full"
                  required
                />
              </label>
            </div>
          </div>
          <div className="md:flex mb-4 lg:mb-8">
            <div className="form-control md:w-full lg:w-1/2">
              <label className="label">
                <span className="label-text">Post Date</span>
              </label>
              <label className="input-group">
              <input
                type="text"
                name="postDate"
                value={postDate}
                className="input input-bordered w-full"
                readOnly 
                required
                />
              </label>
            </div>
            <div className="form-control md:w-full lg:w-1/2 ml-0 lg:ml-4 mt-4 lg:mt-0">
              <label className="label">
                <span className="label-text">Deadline</span>
              </label>
              <label className="input-group">
              <DatePicker
                selected={deadlines} 
                onChange={(date) => setDeadline(date)} 
                placeholderText="Select a date"
                name="deadline"
                value={deadline}
                className="input input-bordered w-full"
                required
                />
              </label>
            </div>
          </div>
          <div className="mb-4 lg:mb-8">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Job Banner</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="jobBanner"
                  defaultValue={jobBanner} 
                  placeholder="Job Banner"
                  className="input input-bordered w-full"
                  required
                />
              </label>
            </div>
          </div>
          <input type="submit" value="Update Job" className="btn btn-block" />
        </form>
      </div>
    </div>
    );
};

export default UpdateJob;