import React from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
const Home = () => {
    return (
        <div>
            <div className='flex justify-evenly lg:justify-center lg:gap-12 items-center'>
                <div>
                    <IoIosArrowBack/>
                </div>
                <div>
                    <input type="date" name="" id="" />
                </div>
                <div>
                    <IoIosArrowForward/>
                </div>
            </div>
            <div className='lg:w-2/3 lg:mx-auto flex gap-1 justify-between items-center py-10 px-3 lg:px-0'>
                <div className='border border-blue-300 rounded-lg px-1 lg:px-3 py-1'>
                    <p className='text-lg font-normal'>Total Income</p>
                    <p className='text-lg font-normal'>12000</p>
                </div>
                <div className='border border-blue-300 rounded-lg px-1 lg:px-3 py-1'>
                    <p className='text-lg font-normal'>Total Expense</p>
                    <p className='text-lg font-normal'>1200</p>
                </div>
                <div className='border border-blue-300 rounded-lg px-1 lg:px-3 py-1'>
                    <p className='text-lg font-normal'>Net Balance</p>
                    <p className='text-lg font-normal'>1600</p>
                </div>
            </div>
            <div className='flex gap-y-4 flex-col justify-evenly items-center px-3 lg:mx-56'>
                <div className='w-full flex justify-between items-center text-5xl font-bold border border-blue-300 py-2 rounded-lg'>
                    <p className='pl-4 lg:px-8'>01</p>
                    <h1 className='border border-blue-400 pl-3 pr-10 py-2 bg-green-500 lg:w-2/3'>Catagory</h1>
                </div>
                <div className='w-full flex justify-between items-center text-5xl font-bold border border-blue-300 py-2 rounded-lg'>
                    <p className='pl-4 lg:px-8'>02</p>
                    <h1 className='border border-blue-400 pl-3 pr-10 py-2 bg-green-500 lg:w-2/3'>Catagory</h1>
                </div>
                <div className='w-full flex justify-between items-center text-5xl font-bold border border-blue-300 py-2 rounded-lg'>
                    <p className='pl-4 lg:px-8'>03</p>
                    <h1 className='border border-blue-400 pl-3 pr-10 py-2 bg-green-500 lg:w-2/3'>Catagory</h1>
                </div>
                <div className='w-full flex justify-between items-center text-5xl font-bold border border-blue-300 py-2 rounded-lg'>
                    <p className='pl-4 lg:px-8'>04</p>
                    <h1 className='border border-blue-400 pl-3 pr-10 py-2 bg-green-500 lg:w-2/3'>Catagory</h1>
                </div>
            </div>
        </div>
    );
};

export default Home;