import React from 'react';
import Navbar from './navbar/Navbar';
//import Footer from './footer/Footer';
import { Outlet } from 'react-router-dom';
import Footer from './footer/Footer';

const Root = () => {
    return (
        <div className='p-2 md:p-4 lg:p-6 bg-[#e7f8f6] '>
           <Navbar></Navbar>
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default Root;