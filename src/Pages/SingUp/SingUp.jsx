import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../../contexts/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const SingUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser, googleLogIn } = useContext(AuthContext)
    const handleSignUp = (data) => {
        // setSignUPError('');
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('User Created Successfully.')
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.role, data.name, data.email);
                    })
                    .catch(err => console.log(err));
            })
            .catch(error => {
                // console.log(error)
                toast.error(error.message)
                // setSignUPError(error.message)
            });
    }
    const provider = new GoogleAuthProvider()
    const handleGoogle = () => {
        googleLogIn(provider)
            .then(result => {
                const user = result.user
                console.log(user.displayName);
                const role = {role:"Buyer",}
                toast.success('google login Successfully.')
                saveUser(role.role,user.displayName, user.email);
            })
            .catch(error => {
                toast.error(error.message)
            });
    }
    const saveUser = (role,name, email) => {
        const user = {role, name, email };
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
            })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sing Up Now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleSubmit(handleSignUp)}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Full Name</span>
                                    </label>
                                    <input type="text" {...register("name", {
                                        required: "Name is Required"
                                    })} placeholder="full name" className="input input-bordered" />
                                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" {...register("email", {
                                        required: true
                                    })} placeholder="email" className="input input-bordered" />
                                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                                </div>
                                <div className="form-control mt-4">
                                    <select {...register("role")} className="select select-bordered w-full max-w-xs">
                                        <option disabled selected>Select Your Role</option>
                                        <option>Buyer</option>
                                        <option>Seller</option>
                                    </select>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" {...register("password", {
                                        required: "Password is required",
                                        minLength: { value: 6, message: "Password must be 6 characters long" },
                                        pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                                    })} placeholder="password" className="input input-bordered" />
                                    {errors.password && <p className='text-red-500'>{errors.password.message}</p>}

                                    <label className="label">
                                        <Link className="label-text-alt link link-hover">Forgot password?</Link>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Sing Up</button>
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

export default SingUp;