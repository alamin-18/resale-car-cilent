import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const LogIn = () => {
    const { logIn,googleLogIn } = useContext(AuthContext)
    const { register, handleSubmit, } = useForm();
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';
    console.log(from)

    const handleLogIn = data => {
        logIn(data.email, data.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                toast.success("Log In Successfully")
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch((error) => {
                // const errorCode = error.code;
                const errorMessage = error.message;
                toast.error(errorMessage)
                console.log(error)
            });
    }
    const provider = new GoogleAuthProvider()
    const handleGoogle = () => {
        googleLogIn(provider)
            .then(result => {
                const user = result.user
                console.log(user.displayName);
                toast.success('google login Successfully.')
            })
            .catch(error => {
                toast.error(error.message)
            });
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleSubmit(handleLogIn)}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input {...register("email")} type="email" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input {...register("password")} type="password" placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <Link className="label-text-alt link link-hover">Forgot password?</Link>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                            </form>
                            <div className="form-control mt-6">
                                <button onClick={handleGoogle} className="btn btn-primary flex gap-9"><FcGoogle className='text-2xl'></FcGoogle><span>Google Sing Up</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;