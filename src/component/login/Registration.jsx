import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../firebase/AuthProvider";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

const Registration = () => {
    const {signUp} = useContext(AuthContext);
    const location= useLocation();
    const navigate= useNavigate();
  
    const [error,setError] = useState("");
   // console.log(email);
   const handleRegister =async(e)=>{
    e.preventDefault();
    console.log(e.currentTarget);
    const form= new FormData(e.currentTarget);
    const name =form.get('name');
    const email =form.get('email');
    const image =form.get('image');
    const password =form.get('password');
      if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(password)) {
         setError("Minimum 6 characters, at least one uppercase letter, one lowercase letter, one number and one special character");
        
     }
     else{
        setError("");
         if(email,name,image)
         {
            
            signUp(email,password)
            .then(result=>{
                console.log(result.user);
                
                const createdAt = result.user?.metadata?.creationTime;
                const user = { email,name,image, createdAt: createdAt };
               
                fetch('https://job-server-topaz.vercel.app/user', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        if(data.insertedId){
                          //  toast.success('Register & Database saved successful!'); 
                        }
                        console.log(data)
                    })

                navigate(location?.state ? location.state : '/',{state: {name}});
                // navigate('/', { state: { name } });
                toast.success('Register successful!'); 
                //console.log(name,email,image,password);
            })
            .catch(error=>{
                console.error(error);
                toast.error('Registration failed. Please check your credentials.');
            })
        }
       
     }
   }
    return (
        <div>
            <div className="hero min-h-screen bg-[#e3f9f6]">
                <div className="hero-content flex-col ">
                    <div className="text-center ">
                        <h1 className="text-xl md:text-2xl lg:text-5xl font-bold">Register now!</h1>
                    </div>
                    <div className="card flex-shrink-0  w-60 md:w-full max-w-sm shadow-2xl bg-[#50e6da]">
                        <form onSubmit={handleRegister} className="card-body">
                             <div className="form-control">
                            <div>
                                <p>{error}</p>
                            </div>

                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input  type="text"  placeholder="Full name" className="input input-bordered" name='name' required/>
                            </div> 
                            <div className="form-control">
                            
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input  type="text" placeholder="email" className="input input-bordered" name='email'required />
                            </div>
                             <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image Url</span>
                                </label>
                                <input type="text"  placeholder="image url" className="input input-bordered" name='image'  required />
                            </div> 
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password"  placeholder="password" className="input input-bordered" name='password' required/>
                            </div>
                            <div className="form-control mt-6 p-0">
                                <button  className="btn btn-neutral" >Register</button>
                            </div>
                            <label className="label">
                                Have an account? <Link to="/login" className="label-text-alt link link-hover">Please Login</Link>
                            </label>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;