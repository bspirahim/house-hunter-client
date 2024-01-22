import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='w-full bg-no-repeat h-auto'
            style={{ backgroundImage: 'url("../../../public/auth/house-banner.jpg")', backgroundSize: 'cover' }}
        >
            <div className="hero min-h-screen">
                <div className="hero-content flex-col">

                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-transparent border-2 border-[#15803d]">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl">Full Name</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl">Role</span>
                                </label>
                                <select className="select select-bordered w-full max-w-xs">  
                                    <option>House Woner</option>
                                    <option>House Renter</option>
                                </select>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl">Phone</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary bg-[#15803d]">Login</button>
                                <p className='text-center text-lg pt-4'>Already have an account? <Link to='/login' className='text-primary'>Login</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;