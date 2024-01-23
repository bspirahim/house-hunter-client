import axios from 'axios';
import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Provider/AuthProvider';

const Register = () => {
    const { setUser } = useContext(AuthContext);

    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/'

    const handleSignup = async (event) => {
        event.preventDefault();
        const form = event.target;

        const password = form.password.value;
        const phone = form.phone.value;
        const role = form.role.value;
        const name = form.name.value;
        const email = form.email.value;

        const data = { password, phone, role, name, email, task: 'signup' }
        try {
            const loginOrRegisterResponse = await axios.post("http://localhost:5000/auth", data);
            if (loginOrRegisterResponse.status === 200 || loginOrRegisterResponse.status === 201) {//login success
                const user = loginOrRegisterResponse.data.user;
                setUser(user);
                localStorage.setItem("token", loginOrRegisterResponse.data.token);
                Swal.fire(loginOrRegisterResponse.data.error);
                form.reset()
                navigate(from, { replace: true })
            } else {
                Swal.fire(loginOrRegisterResponse.data.error);
            }
        } catch (error) {
            console.error("Registration error:", error);
            Swal.fire(error.response.data.error);
            return false;
        }
    }

    return (
        <div className='w-full bg-no-repeat h-auto'
            style={{ backgroundImage: 'url("/auth/house-banner.jpg")', backgroundSize: 'cover' }}
        >
            <div className="hero min-h-screen">
                <div className="hero-content flex-col">

                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-transparent border-2 border-[#15803d]">
                        <form className="card-body" onSubmit={handleSignup}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl">Full Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl">Role</span>
                                </label>
                                <select name='role' className="select select-bordered w-full max-w-xs">
                                    <option value="owner">House Owner</option>
                                    <option value="renter">House Renter</option>
                                </select>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl">Phone</span>
                                </label>
                                <input name='phone' type="number" placeholder="Phone" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary bg-[#15803d]">Signup</button>
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