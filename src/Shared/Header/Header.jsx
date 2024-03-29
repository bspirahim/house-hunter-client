import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../Provider/AuthProvider';
const Header = () => {

    const { user, handleLogout } = useContext(AuthContext);

    const navOption = <>

        <Link to='/'><li><a>Home</a></li></Link>
        <Link to='/owner-dashboard'><li><a>Dashboard</a></li></Link>

    </>

    return (
        <div className='bg-[#E7F6ED] border-2' >
            <div className="navbar  max-w-screen-lg mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52">
                            {navOption}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">House-Hunter</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOption}
                    </ul>
                </div>
                <div className="navbar-end">
                    {!user ? <><Link to='/login'><span className="btn">Login</span></Link>
                        <Link to='/register'><span className="btn">Register</span></Link></> : <Link onClick={handleLogout}><span className="btn btn-danger">Logout</span></Link>}
                </div>
            </div>
        </div>
    );
};

export default Header;