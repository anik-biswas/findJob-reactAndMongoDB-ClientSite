import React, { useEffect, useState } from 'react';
import Card from './Card';
import CategoryJob from '../categoryJob/CategoryJob';
import { motion } from 'framer-motion';
const Category = () => {
    const [categories,setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [jobs,setJobs]= useState([])
    useEffect ( () => {
        fetch('https://job-server-topaz.vercel.app/job')
        .then (res => res.json())
        .then(data =>setJobs(data))
        
    },[])
    console.log(jobs)
    useEffect ( () => {
        fetch('https://job-server-topaz.vercel.app/category')
        .then (res => res.json())
        .then(data =>setCategories(data))
        
    },[])

    const filteredJobs = selectedCategory? jobs.filter((job) => job.category ===selectedCategory) : jobs;
    const handleCategoryClick = (name) => {
        setSelectedCategory(name);
      };
      const handleAllJobsClick = () => {
        setSelectedCategory(null);
      };
    return (
        <div>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-y-5 gap-x-2 justify-items-center  my-10">
            
        {
            
            categories.map(category => <Card category={category} key={category._id} onCategoryClick={handleCategoryClick}></Card>)
        }
        <motion.div
        whileHover={{ scale: 1.2, rotate: 90 }}
        whileTap={{
            scale: 0.8,
            rotate: -60,
            borderRadius: "100%"
        }}
        >
         <h2 className="btn btn-success" onClick={handleAllJobsClick}>All Jobs</h2>
         </motion.div>
         </div>
         <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 gap-y-5 gap-x-2 justify-items-center  my-10">
            {filteredJobs.map((job) => (
                <CategoryJob job={job} key={job._id} ></CategoryJob>
                //console.log(job)
            ))}
            </div>
    </div>
        
    );
};

export default Category;