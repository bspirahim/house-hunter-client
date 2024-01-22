
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='w-full bg-no-repeat h-[100vh]'
            style={{ backgroundImage: 'url("../../../public/auth/house-banner.jpg")', backgroundSize: 'cover' }}
        >
            <div className="hero min-h-screen">
                <div className="hero-content flex-col">
                  
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-transparent border-2 border-[#15803d]">
                        <form className="card-body">
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
                                <p className='text-center text-lg pt-4'>Don't have an account? <Link to='/register' className='text-primary'>Register</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;