import React from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { FaFastForward } from "react-icons/fa";
import { FaFastBackward } from "react-icons/fa";

const DateCarousel = () => {
    return (
        <div>
            <div className='text-center text-2xl font-bold py-10'>page-2</div>
            <div className='flex justify-evenly items-center'>
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
            <div className='flex gap-1 justify-between items-center py-10'>
                <div className='border border-blue-300 rounded-lg px-2 py-1'>
                    <p className='text-lg font-normal'>Total Income</p>
                    <p className='text-lg font-normal'>12000</p>
                </div>
                <div className='border border-blue-300 rounded-lg px-2 py-1'>
                    <p className='text-lg font-normal'>Total Expense</p>
                    <p className='text-lg font-normal'>1200</p>
                </div>
                <div className='border border-blue-300 rounded-lg px-2 py-1'>
                    <p className='text-lg font-normal'>Net Balance</p>
                    <p className='text-lg font-normal'>1600</p>
                </div>
            </div>
            <div className='flex gap-y-4 flex-col justify-evenly items-center px-3'>
                <div className='w-full flex justify-between items-center text-5xl font-bold border border-blue-300 py-2 rounded-lg'>
                    <p className='pl-4'>01</p>
                    <h1 className='border border-blue-400 pl-3 pr-10 py-2 bg-green-500'>Catagory</h1>
                </div>
                <div className='w-full flex justify-between items-center text-5xl font-bold border border-blue-300 py-2 rounded-lg'>
                    <p className='pl-4'>02</p>
                    <h1 className='border border-blue-400 pl-3 pr-10 py-2 bg-green-500'>Catagory</h1>
                </div>
                <div className='w-full flex justify-between items-center text-5xl font-bold border border-blue-300 py-2 rounded-lg'>
                    <p className='pl-4'>03</p>
                    <h1 className='border border-blue-400 pl-3 pr-10 py-2 bg-green-500'>Catagory</h1>
                </div>
                <div className='w-full flex justify-between items-center text-5xl font-bold border border-blue-300 py-2 rounded-lg'>
                    <p className='pl-4'>04</p>
                    <h1 className='border border-blue-400 pl-3 pr-10 py-2 bg-green-500'>Catagory</h1>
                </div>
            </div>
            <div className='text-center text-2xl font-bold py-10'>page-3</div>
            <div className='flex flex-col gap-y-4 px-6'>
                <div className='flex justify-between items-center'>
                    <h2 className='text-2xl font-semibold'>Date</h2>
                    <input type="date" name="" id=""  className='border border-blue-300 px-2 w-48'/>
                </div>
                <div className='flex justify-between items-center'>
                    <h2 className='text-2xl font-semibold'>Amount</h2>
                    <input type="text" className='border border-blue-300 px-2 w-48' placeholder='Tk....'/>
                </div>
                <div className='flex justify-between items-center'>
                    <h2 className='text-2xl font-semibold'>Purpose</h2>
                    <input type="text" className='border border-blue-300 px-2 w-48' placeholder='.......'/>
                </div>
                <div>
                    <button className='btn btn-primary'>Add Balance</button>
                </div>

                <div>
                <div className='text-center text-3xl font-semibold py-6'>All Data</div>
                    <table>
                        <thead></thead>
                        <tbody>
                            <tr>
                                <th className='border border-blue-200 outline-none py-1 bg-green-500'>Name</th>
                                <th className='border border-blue-200 outline-none py-1 bg-green-500'>Type</th>
                                <th className='border border-blue-200 outline-none py-1 bg-green-500'>Data</th>
                                <th className='border border-blue-200 outline-none py-1 bg-green-500'>Reason</th>
                                <th className='border border-blue-200 outline-none py-1 bg-green-500'>Amount</th>
                            </tr>
                            <tr>
                                <td><input type="text"  className='w-20 border border-blue-200 outline-none py-1'/></td>
                                <td><input type="text"  className='w-16 border border-blue-200 outline-none py-1'/></td>
                                <td><input type="text"  className='w-16 border border-blue-200 outline-none py-1'/></td>
                                <td><input type="text"  className='w-16 border border-blue-200 outline-none py-1'/></td>
                                <td><input type="text"  className='w-16 border border-blue-200 outline-none py-1'/></td>
                            </tr>
                            <tr>
                                <td><input type="text"  className='w-20 border border-blue-200 outline-none py-1'/></td>
                                <td><input type="text"  className='w-16 border border-blue-200 outline-none py-1'/></td>
                                <td><input type="text"  className='w-16 border border-blue-200 outline-none py-1'/></td>
                                <td><input type="text"  className='w-16 border border-blue-200 outline-none py-1'/></td>
                                <td><input type="text"  className='w-16 border border-blue-200 outline-none py-1'/></td>
                            </tr>
                            <tr>
                                <td><input type="text"  className='w-20 border border-blue-200 outline-none py-1'/></td>
                                <td><input type="text"  className='w-16 border border-blue-200 outline-none py-1'/></td>
                                <td><input type="text"  className='w-16 border border-blue-200 outline-none py-1'/></td>
                                <td><input type="text"  className='w-16 border border-blue-200 outline-none py-1'/></td>
                                <td><input type="text"  className='w-16 border border-blue-200 outline-none py-1'/></td>
                            </tr>
                            <tr>
                                <td><input type="text"  className='w-20 border border-blue-200 outline-none py-1'/></td>
                                <td><input type="text"  className='w-16 border border-blue-200 outline-none py-1'/></td>
                                <td><input type="text"  className='w-16 border border-blue-200 outline-none py-1'/></td>
                                <td><input type="text"  className='w-16 border border-blue-200 outline-none py-1'/></td>
                                <td><input type="text"  className='w-16 border border-blue-200 outline-none py-1'/></td>
                            </tr>
                            <tr>
                                <td><input type="text"  className='w-20 border border-blue-200 outline-none py-1'/></td>
                                <td><input type="text"  className='w-16 border border-blue-200 outline-none py-1'/></td>
                                <td><input type="text"  className='w-16 border border-blue-200 outline-none py-1'/></td>
                                <td><input type="text"  className='w-16 border border-blue-200 outline-none py-1'/></td>
                                <td><input type="text"  className='w-16 border border-blue-200 outline-none py-1'/></td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='flex gap-4 justify-between items-center py-6'>
                        <div className='flex justify-evenly items-center'>
                            <div>
                                <FaFastBackward/>
                            </div>
                            <div>
                                <h1 className='px-4'>Page</h1>
                            </div>
                            <div>
                                <FaFastForward/>
                            </div>
                        </div>
                        <div>
                            <button className='ml-32 bg-green-500 px-4 py-1 rounded'>Download</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center text-2xl font-bold py-10'>page-4</div>
            <div className='flex flex-col gap-y-4 px-6'>
                <div className='flex justify-between items-center'>
                    <h2 className='text-2xl font-semibold'>Date</h2>
                    <input type="date" name="" id=""  className='border border-blue-300 px-2 w-48'/>
                </div>
                <div className='flex justify-between items-center'>
                    <h2 className='text-2xl font-semibold'>Amount</h2>
                    <input type="text" className='border border-blue-300 px-2 w-48' placeholder='Tk....'/>
                </div>
                <div className='flex justify-between items-center'>
                    <h2 className='text-2xl font-semibold'>Purpose</h2>
                    <input type="text" className='border border-blue-300 px-2 w-48' placeholder='.......'/>
                </div>
                <div>
                    <button className='btn btn-primary'>Add Expense</button>
                </div>

                <div>
                <div className='text-center text-3xl font-semibold py-6'>All Data</div>
                    <table>
                        <thead></thead>
                        <tbody>
                            <tr>
                                <th className='border border-blue-200 outline-none py-1 bg-green-500'>Name</th>
                                <th className='border border-blue-200 outline-none py-1 bg-green-500'>Type</th>
                                <th className='border border-blue-200 outline-none py-1 bg-green-500'>Data</th>
                                <th className='border border-blue-200 outline-none py-1 bg-green-500'>Reason</th>
                                <th className='border border-blue-200 outline-none py-1 bg-green-500'>Amount</th>
                            </tr>
                            <tr>
                                <td><input type="text"  className='w-20 border border-blue-200 outline-none py-1'/></td>
                                <td><input type="text"  className='w-16 border border-blue-200 outline-none py-1'/></td>
                                <td><input type="text"  className='w-16 border border-blue-200 outline-none py-1'/></td>
                                <td><input type="text"  className='w-16 border border-blue-200 outline-none py-1'/></td>
                                <td><input type="text"  className='w-16 border border-blue-200 outline-none py-1'/></td>
                            </tr>
                            <tr>
                                <td><input type="text"  className='w-20 border border-blue-200 outline-none py-1'/></td>
                                <td><input type="text"  className='w-16 border border-blue-200 outline-none py-1'/></td>
                                <td><input type="text"  className='w-16 border border-blue-200 outline-none py-1'/></td>
                                <td><input type="text"  className='w-16 border border-blue-200 outline-none py-1'/></td>
                                <td><input type="text"  className='w-16 border border-blue-200 outline-none py-1'/></td>
                            </tr>
                            <tr>
                                <td><input type="text"  className='w-20 border border-blue-200 outline-none py-1'/></td>
                                <td><input type="text"  className='w-16 border border-blue-200 outline-none py-1'/></td>
                                <td><input type="text"  className='w-16 border border-blue-200 outline-none py-1'/></td>
                                <td><input type="text"  className='w-16 border border-blue-200 outline-none py-1'/></td>
                                <td><input type="text"  className='w-16 border border-blue-200 outline-none py-1'/></td>
                            </tr>
                            <tr>
                                <td><input type="text"  className='w-20 border border-blue-200 outline-none py-1'/></td>
                                <td><input type="text"  className='w-16 border border-blue-200 outline-none py-1'/></td>
                                <td><input type="text"  className='w-16 border border-blue-200 outline-none py-1'/></td>
                                <td><input type="text"  className='w-16 border border-blue-200 outline-none py-1'/></td>
                                <td><input type="text"  className='w-16 border border-blue-200 outline-none py-1'/></td>
                            </tr>
                            <tr>
                                <td><input type="text"  className='w-20 border border-blue-200 outline-none py-1'/></td>
                                <td><input type="text"  className='w-16 border border-blue-200 outline-none py-1'/></td>
                                <td><input type="text"  className='w-16 border border-blue-200 outline-none py-1'/></td>
                                <td><input type="text"  className='w-16 border border-blue-200 outline-none py-1'/></td>
                                <td><input type="text"  className='w-16 border border-blue-200 outline-none py-1'/></td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='flex gap-4 justify-between items-center py-6'>
                        <div className='flex justify-evenly items-center'>
                            <div>
                                <FaFastBackward/>
                            </div>
                            <div>
                                <h1 className='px-4'>Page</h1>
                            </div>
                            <div>
                                <FaFastForward/>
                            </div>
                        </div>
                        <div>
                            <button className='ml-32 bg-green-500 px-4 py-1 rounded'>Download</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DateCarousel;