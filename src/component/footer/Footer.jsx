import React from 'react';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-[#2a2a2a] text-white">
  <aside>
    <img src="https://i.ibb.co/M6dq2J8/joblogo-removebg-preview.png" className='w-32 h-24' alt="" />
    <p>Find Job Industries Ltd.<br/>Providing reliable tech since 2023</p>
  </aside> 
  <nav>
    <header className="footer-title">Services</header> 
    <a className="link link-hover">Branding</a> 
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Marketing</a> 

  </nav> 
  <nav>
    <header className="footer-title">Company</header> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    
  </nav> 
  <nav>
    <header className="footer-title">Legal</header> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
    );
};

export default Footer;