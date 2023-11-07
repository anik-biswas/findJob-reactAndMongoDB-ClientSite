import React, { useEffect, useState } from 'react';
import Card from './Card';

const Category = () => {
    const [categories,setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [jobs,setJobs]= useState([])
    useEffect ( () => {
        fetch('http://localhost:5000/job')
        .then (res => res.json())
        .then(data =>setJobs(data))
        
    },[])
    console.log(jobs)
    useEffect ( () => {
        fetch('http://localhost:5000/category')
        .then (res => res.json())
        .then(data =>setCategories(data))
        
    },[])

    const filteredJobs = selectedCategory? jobs.filter((job) => job.category ===selectedCategory) : jobs;
    const handleCategoryClick = (name) => {
        setSelectedCategory(name);
      };
    return (
        <div>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-y-5 gap-x-2 justify-items-center  my-10">
            
        {
            
            categories.map(category => <Card category={category} key={category._id} onCategoryClick={handleCategoryClick}></Card>)
        }
         <h2 className="btn btn-success">All Jobs</h2>
            {filteredJobs.map((job) => (
                <div key={job._id}>{job.name}</div>
                //console.log(job)
            ))}
    </div>
        </div>
    );
};

export default Category;