import React from 'react';
import { IoNotifications } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className='navbar flex bg-base-200 p-3 rounded-lg fixed z-30'>
            <div className='flex navbar-start gap-6 justify-start items-center'>
            <img src="https://i.ibb.co.com/g3K0LCj/MyImage.jpg" alt="" className='w-12 rounded-full'/>
            <div>
                <h1 className='text-2xl font-semibold'>Welcome</h1>
                <h3 className='text-xl font-medium'>PPBS</h3>
            </div>
            </div>
            <Link to={"/reminder"} className='navbar-end'>
                <IoNotifications className='w-8 h-8'/>
            </Link>

        </div>
    );
};

export default Nav;