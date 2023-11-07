import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../firebase/AuthProvider';
import DatePicker from 'react-datepicker'; // Add this import
import 'react-datepicker/dist/react-datepicker.css'; 

const AddJob = () => {
  
   // console.log(user)
  const location= useLocation();
  const navigate= useNavigate();
  const [categories,setCategories] = useState([]);
  const{user}= useContext(AuthContext);

  const email =user.email;
  const [postDate, setPostDate] = useState(null);
  const [deadline, setDeadline] = useState(null);
  useEffect ( () => {
      fetch('http://localhost:5000/category')
      .then (res => res.json())
      .then(data =>setCategories(data))
      
  },[])
  const getCurrentDate = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const day = currentDate.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  };
 
    return (
      <div>
      <div className="bg-[#CBE4E9] p-4 lg:p-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <h2 className="text-2xl md:text-3xl lg:text-3xl font-extrabold">
            Add Product
          </h2>
          <p className="text-right">
            
            <Link
              to="/addCategory"
              className="label-text-alt link link-hover text-sm md:text-lg text-orange-600"
            >
              Add New Category
            </Link>
          </p>
        </div>
        <form >
          <div className="md:flex mb-4 lg:mb-8">
            <div className="form-control md:w-full lg:w-1/2">
              <label className="label">
                <span className="label-text">Job Title</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="name"
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
                  defaultValue={email}
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
                  name="AppNumber"
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
                <span className="label-text">Post Date</span>
              </label>
              <label className="input-group">
              <input
                type="text"
                name="postDate"
                value={getCurrentDate()}
                className="input input-bordered w-full"
                readOnly // Prevent user input
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
                selected={deadline} // Provide a date value (e.g., from state)
                onChange={(date) => setDeadline(date)} // Handle date changes
                placeholderText="Select a date"
                name="deadline"
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
                  placeholder="Job Banner"
                  className="input input-bordered w-full"
                  required
                />
              </label>
            </div>
          </div>
          <input type="submit" value="Add Job" className="btn btn-block" />
        </form>
      </div>
    </div>
    );
};

export default AddJob;