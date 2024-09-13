import React from 'react';
import { IoHome } from "react-icons/io5";
import { IoMdAddCircleOutline } from "react-icons/io";
import { MdNotificationsActive } from "react-icons/md";
import { Link } from 'react-router-dom';

const FooterNav = () => {
    return (
        
        <div className='flex justify-between items-center p-3 bg-base-200 fixed z-30 bottom-0 right-0 left-0'>
            <Link to={"/"} className='flex flex-col justify-center items-center'>
                <IoHome className='w-6 h-6'/>
                <h1 className='text-lg font-medium'>Home</h1>
            </Link>
            <Link to={"/balance"} className='flex flex-col justify-center items-center'>
                <IoMdAddCircleOutline className='w-6 h-6'/>
                <h1 className='text-lg font-medium'>Add Balance</h1>
            </Link>
            <Link to={"/expense"} className='flex flex-col justify-center items-center'>
                <img src="https://i.ibb.co.com/7psR2NC/126190.png" alt="" className='w-6 h-6'/>
                <h1 className='text-lg font-medium'>Add Expense</h1>
            </Link>
            <Link to={"/reminder"} className='flex flex-col justify-center items-center'>
                <MdNotificationsActive className='w-6 h-6'/>
                <h1 className='text-lg font-medium'>Reminder</h1>
            </Link>
        </div>
    );
};

export default FooterNav;