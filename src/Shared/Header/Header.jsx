import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {


    const navOption = <>

      <Link to='/'><li><a>Home</a></li></Link>
      
    </>

    return (
        <div className=''>
            <div className="fixed z-10 opacity-50 navbar bg-[#E7F6ED]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52">
                           {navOption}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                       {navOption}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to='/login'><a className="btn">Login</a></Link>
                </div>
            </div>
        </div>
    );
};

export default Header;