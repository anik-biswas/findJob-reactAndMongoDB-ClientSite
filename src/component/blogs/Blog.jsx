import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className="collapse bg-base-200 my-10 px-10">
            <input type="checkbox" className="peer" /> 
            <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                Question 1: What is an access token and refresh token? How do they work and where should we store them on the client-side?
            </div>
            
            <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"> 
                <p>Access tokens and refresh tokens are commonly used in the context of authentication and authorization in web and mobile applications.</p>
                <h1 className='text-base  text-black'>Access Token:</h1>
                <p>An access token is a short-lived token that is issued by an authorization server  after a user successfully authenticates</p>
                <p>Access tokens are used to make authenticated requests to protected resources</p>
                <h1 className='text-base  text-black'>Refresh Token:</h1>
                <p>A refresh token is a longer-lived token that is also issued by the authorization server alongside the access token.</p>
                <p>Refresh tokens are used to obtain a new access token once the original access token expires.</p>
                <h1 className='text-base  text-black'>Where to store them on the client-side:</h1>
                <p> The access token is typically stored in a secure manner on the client-side. Common storage</p>
                <p>Refresh tokens are more sensitive and should be stored securely</p>
            </div>
            
            </div>
            <div className="collapse bg-base-200 my-10 px-10">
            <input type="checkbox" className="peer" /> 
            <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                Question 2:  What is express js? What is Nest JS ?

            </div>
            <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"> 
            <h1 className='text-base  text-black'>Express JS</h1>
            <p>Express.js, often referred to as Express, is a popular and widely used web application framework for Node.js. It simplifies the development of web applications and APIs by providing a set of features and tools for building robust and scalable server-side applications.</p>
            <h1 className='text-base  text-black'>Nest JS</h1>
            <p>Nest.js is a progressive, Node.js-based web application framework that is designed to be efficient, scalable, and developer-friendly. It is built on top of Express.js and provides an additional layer of abstraction and features to simplify the development of server-side applications, particularly for building APIs and microservices.</p>
            </div>
            </div>
            <div className="collapse bg-base-200 my-10 px-10">
            <input type="checkbox" className="peer" /> 
            <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                Question 3: Explanation of My Code
            </div>
            <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"> 
                <p>IN Home page you can view Category and category based jobs</p>
                <p>To access private routes you need to login first , you can also login by Google </p>
                <p>After login You can add new jobs, apply in others job, handle(update,delete) your added jobs</p>
            </div>
            </div>
        </div>
    );
};

export default Blog;