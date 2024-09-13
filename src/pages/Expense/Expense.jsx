import React from 'react';
import { FaFastForward } from "react-icons/fa";
import { FaFastBackward } from "react-icons/fa";
const Expense = () => {
    return (
        <div className='flex flex-col gap-y-4 px-6 lg:mx-auto lg:w-1/2'>
                <div className='flex justify-between items-center'>
                    <h2 className='text-2xl font-semibold'>Date</h2>
                    <input type="date" name="" id=""  className='border border-blue-300 px-2 w-48 lg:w-72'/>
                </div>
                <div className='flex justify-between items-center'>
                    <h2 className='text-2xl font-semibold'>Amount</h2>
                    <input type="text" className='border border-blue-300 px-2 w-48 lg:w-72' placeholder='Tk....'/>
                </div>
                <div className='flex justify-between items-center'>
                    <h2 className='text-2xl font-semibold'>Purpose</h2>
                    <input type="text" className='border border-blue-300 px-2 w-48 lg:w-72' placeholder='.......'/>
                </div>
                <div>
                    <button className='btn btn-primary'>Add Expense</button>
                </div>

                <div>
                    <div className='text-center text-3xl font-semibold py-6'>All Data</div>
                    <table className='w-full mx-auto'>
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
                                <td><input type="text"  className='w-16 lg:w-36 border border-blue-200 outline-none py-1'/></td>
                                <td><input type="text"  className='w-16 lg:w-36 border border-blue-200 outline-none py-1'/></td>
                                <td><input type="text"  className='w-16 lg:w-36 border border-blue-200 outline-none py-1'/></td>
                                <td><input type="text"  className='w-16 lg:w-36 border border-blue-200 outline-none py-1'/></td>
                                <td><input type="text"  className='w-16 lg:w-36 border border-blue-200 outline-none py-1'/></td>
                            </tr>
                            <tr>
                                <td><input type="text"  className='w-16 lg:w-36 border border-blue-200 outline-none py-1'/></td>
                                <td><input type="text"  className='w-16 lg:w-36 border border-blue-200 outline-none py-1'/></td>
                                <td><input type="text"  className='w-16 lg:w-36 border border-blue-200 outline-none py-1'/></td>
                                <td><input type="text"  className='w-16 lg:w-36 border border-blue-200 outline-none py-1'/></td>
                                <td><input type="text"  className='w-16 lg:w-36 border border-blue-200 outline-none py-1'/></td>
                            </tr>
                            <tr>
                                <td><input type="text"  className='w-16 lg:w-36 border border-blue-200 outline-none py-1'/></td>
                                <td><input type="text"  className='w-16 lg:w-36 border border-blue-200 outline-none py-1'/></td>
                                <td><input type="text"  className='w-16 lg:w-36 border border-blue-200 outline-none py-1'/></td>
                                <td><input type="text"  className='w-16 lg:w-36 border border-blue-200 outline-none py-1'/></td>
                                <td><input type="text"  className='w-16 lg:w-36 border border-blue-200 outline-none py-1'/></td>
                            </tr>
                            <tr>
                                <td><input type="text"  className='w-16 lg:w-36 border border-blue-200 outline-none py-1'/></td>
                                <td><input type="text"  className='w-16 lg:w-36 border border-blue-200 outline-none py-1'/></td>
                                <td><input type="text"  className='w-16 lg:w-36 border border-blue-200 outline-none py-1'/></td>
                                <td><input type="text"  className='w-16 lg:w-36 border border-blue-200 outline-none py-1'/></td>
                                <td><input type="text"  className='w-16 lg:w-36 border border-blue-200 outline-none py-1'/></td>
                            </tr>
                            <tr>
                                <td><input type="text"  className='w-16 lg:w-36 border border-blue-200 outline-none py-1'/></td>
                                <td><input type="text"  className='w-16 lg:w-36 border border-blue-200 outline-none py-1'/></td>
                                <td><input type="text"  className='w-16 lg:w-36 border border-blue-200 outline-none py-1'/></td>
                                <td><input type="text"  className='w-16 lg:w-36 border border-blue-200 outline-none py-1'/></td>
                                <td><input type="text"  className='w-16 lg:w-36 border border-blue-200 outline-none py-1'/></td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='w-full mx-auto flex gap-4 justify-between items-center py-6'>
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
                            <button className='lg:ml-[510px] bg-green-500 px-4 py-1 rounded'>Download</button>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Expense;