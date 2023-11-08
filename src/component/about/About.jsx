import React from 'react';
import { motion } from 'framer-motion';
const About = () => {
    return (
        <div  className='m-6'>
      <div className="text-center">
        <h1 className='text-lg font-bold  '>About Us</h1>
        
      </div>
    <motion.div
    // initial={{ opacity: 0 }} 
    // animate={{ opacity: 1 }} 
    // transition={{ duration: 5 }} 
    initial={{ scale: 0.5 }}
  animate={{ rotate: 360, scale: 1 }}
  transition={{
    type: "spring",
    stiffness: 260,
    duration : 3,
    damping: 20
  }}
  >
      <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure className=''><img src="https://i.ibb.co/RbLWymm/agents-who-find-jobs-for-job-seekers-and-companies-that-need-professional-workers-for-career-intervi.jpg" alt="Album"/></figure>
            <div className="card-body">
                <h2 className="card-title"> What sets us apart:</h2>
                <p>Welcome to our website! We are dedicated to providing you with high-quality services and an exceptional online experience. Our mission is to everyone get a job.</p>
                <p>We take great pride in Employment. Our team of experts is passionate about your Job, and we are committed to delivering the best service to our customers.</p>
                <ul >
                <li>easy to sign</li>
                <li>get great Job placement</li>
                
                </ul>
                <p>
                    We value your feedback and are always striving to improve our service. If you have any questions or suggestions, please feel free to anik@gmail.com.
                    </p>
                    <p>
                    Thank you for choosing us. We look forward to serving you and providing a top-notch experience.
                    </p>
            </div>
            </div>
            </motion.div>
    </div>
    );
};

export default About;