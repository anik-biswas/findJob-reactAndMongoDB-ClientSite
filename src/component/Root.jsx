import React from 'react';
import Navbar from './navbar/Navbar';
//import Footer from './footer/Footer';
import { Outlet } from 'react-router-dom';
import Footer from './footer/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Root = () => {
    return (
        <div className='p-2 md:p-4 lg:p-6 bg-gradient-to-b from-[#e5efed] to-[#9db1b0]  '>
           <Navbar></Navbar>
           <ToastContainer />
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default Root;