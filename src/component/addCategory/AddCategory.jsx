import React from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

const AddCategory = () => {
    const location= useLocation();
    const navigate= useNavigate();
 const handleAddCategory = e =>{
    e.preventDefault();
    const form = e.target;

        const name = form.name.value;
       
        const newCategory = { name}

        console.log(newCategory);
        fetch('http://localhost:5000/category',{
            method: 'POST',
            headers : {
                'content-type':'application/json'
            },
            body:JSON.stringify(newCategory)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                // Swal.fire({
                //     title: 'Success!',
                //     text: 'Brand Added Successfully',
                //     icon: 'success',
                //     confirmButtonText: 'Ok'
                //   })
            }
            navigate(location?.state ? location.state : '/');
        })

 }
    return (
        <div>
            <div className="hero min-h-screen bg-[#CBE4E9] ">
                <div className="hero-content flex-col ">
                    <div className="text-center ">
                        <h1 className="text-xl md:text-2xl lg:text-5xl font-bold">New Category</h1>
                    </div>
                    <div className="card flex-shrink-0  w-60 md:w-80 lg:w-96  shadow-2xl bg-[#50e6da]">
                        <form  onSubmit={handleAddCategory} className="card-body ">
                             <div className="form-control">
                            
                                <label className="label">
                                    <span className="label-text font-bold text-slate-600  text-base md:text-xl"> Job Category</span>
                                </label>
                                <input  type="text"  placeholder="Full name" className="input input-bordered" name='name' required/>
                            </div> 
                            
                            <div className="form-control mt-6 p-0">
                                <button  className="btn btn-neutral" >Add Category</button>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AddCategory;