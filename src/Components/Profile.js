import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Link, useNavigate } from "react-router-dom";
import Wishlist from '../pages/Wishlist';
import { BsReverseLayoutTextSidebarReverse, BsChatHeartFill } from "react-icons/bs";
import { FaReplyAll, FaBuffer, FaCircleUser } from "react-icons/fa6";
import { HiPhoneArrowDownLeft } from "react-icons/hi2";

const Profile = () => {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const LogOut = () => {
        localStorage.clear();
        navigate("/login")
    }
    return (
        <Tabs>
            <div>
                <div className="mx-auto grid grid-cols-12 gap-4 bg-zinc-50 p-1">
                    <div className="col-span-12 rounded-lg border border-gray-400 bg-gray-200 p-10 sm:col-span-3">
                        {/* Sidebar */}
                        <div className="w-80 text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                            <TabList>
                                <Tab
                                    className="relative inline-flex items-center w-full px-4 py-4 text-sm font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
                                >
                                    <FaCircleUser
                                        className="w-3 h-3 mr-2.5"
                                    />
                                    Profile
                                </Tab>
                                <Tab
                                    className="relative inline-flex items-center w-full px-4 py-4 text-sm font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
                                >
                                    <FaBuffer
                                        className="w-3 h-3 mr-2.5"
                                    />
                                    Change Password
                                </Tab>
                                <Tab
                                    className="relative inline-flex items-center w-full px-4 py-4 text-sm font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
                                >
                                    <BsReverseLayoutTextSidebarReverse
                                        className="w-3 h-3 mr-2.5"
                                    />
                                    My Orders
                                </Tab>
                                <Tab
                                    className="relative inline-flex items-center w-full px-4 py-4 text-sm font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
                                >
                                    <BsChatHeartFill
                                        className="w-3 h-3 mr-2.5"
                                    />
                                    My Wishlist
                                </Tab>
                            </TabList>
                            <Link
                                className="relative inline-flex items-center w-full px-4 py-4 text-sm font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
                                to="/faq"
                            >
                                <HiPhoneArrowDownLeft
                                    className="w-3 h-3 mr-2.5"
                                />
                                Need Help
                            </Link>
                            <Link
                                className="relative inline-flex items-center w-full px-4 py-4 text-sm font-medium rounded-b-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
                                to="/login"
                                onClick={LogOut}
                            >
                                <FaReplyAll
                                    className="w-3 h-3 mr-2.5"
                                />
                                LogOut ( {auth && JSON.parse(auth).name} )
                            </Link>
                        </div>
                    </div>
                    <div className="col-span-12 rounded-lg border border-gray-500 bg-gray-200 p-1 sm:col-span-9">
                        {/* Main Content */}
                        <TabPanel>
                            <div className="w-6/12 m-10 m-auto bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                                <form className="space-y-6" action="#">
                                    <h5 className="text-xl font-medium text-gray-900 dark:text-white">
                                        Account Details
                                    </h5>
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                            required=""
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="bio"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Bio
                                        </label>
                                        <textarea
                                            type="text"
                                            name="bio"
                                            id="bio"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                            required=""
                                        >
                                        </textarea>
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Email
                                        </label>
                                        <input
                                            type="text"
                                            name="email"
                                            id="email"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                            required=""
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="phone"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Contact Number
                                        </label>
                                        <input
                                            type="number"
                                            name="phone"
                                            id="phone"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                            required=""
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="w-6/12 m-10 m-auto bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                                <form className="space-y-6" action="#">
                                    <h5 className="text-xl font-medium text-gray-900 dark:text-white">
                                        Change Password
                                    </h5>
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Old Password
                                        </label>
                                        <input
                                            type="text"
                                            name="email"
                                            id="email"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                            placeholder="Old Password"
                                            required=""
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="password"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            New Password
                                        </label>
                                        <input
                                            type="text"
                                            name="password"
                                            id="password"
                                            placeholder="New Password"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                            required=""
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="password"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Confirm Password
                                        </label>
                                        <input
                                            type="text"
                                            name="password"
                                            id="password"
                                            placeholder="Confirm Password"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                            required=""
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                        Change password
                                    </button>
                                </form>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="container mx-auto px-4 sm:px-8">
                                <div className="py-8">
                                    <div>
                                        <h2 className="text-2xl font-semibold leading-tight">Your Orders List</h2>
                                    </div>
                                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                                        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                                            <table className="min-w-full leading-normal">
                                                <thead>
                                                    <tr>
                                                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                            ID
                                                        </th>
                                                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                            Image
                                                        </th>
                                                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                            Name
                                                        </th>
                                                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                            Date
                                                        </th>
                                                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                            Total
                                                        </th>
                                                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                            Status
                                                        </th>
                                                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                            Action
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody className='text-start'>
                                                    <tr>
                                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                            <div className="flex items-center">
                                                                <div className="ml-3">
                                                                    <p className="text-gray-900 whitespace-no-wrap">
                                                                        1
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                            <div className="flex-shrink-0 w-10 h-10">
                                                                <img
                                                                    className="w-full h-full rounded-full"
                                                                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                                                    alt=""
                                                                />
                                                            </div>
                                                        </td>
                                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-start">
                                                            <p className="text-gray-900 whitespace-no-wrap">Admin</p>
                                                        </td>
                                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                            <p className="text-gray-900 whitespace-no-wrap">
                                                                Jan 21, 2020
                                                            </p>
                                                        </td>
                                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                            <div className="flex items-center">
                                                                <div className="ml-3">
                                                                    <p className="text-gray-900 whitespace-no-wrap">
                                                                        10$
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                            <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                                                <span
                                                                    aria-hidden=""
                                                                    className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                                                                />
                                                                <span className="relative">Order Place</span>
                                                            </span>
                                                        </td>
                                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                            <span className="relative inline-block px-3 py-1 font-semibold leading-tight">
                                                                <span
                                                                    aria-hidden=""
                                                                    className="absolute inset-0 opacity-50 rounded-full"
                                                                />
                                                                <Link to="/order/1" className='bg-black px-6 py-2 text-white rounded-lg'>
                                                                    <span className="relative">View</span>
                                                                </Link>
                                                            </span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                            <div className="flex items-center">
                                                                <div className="ml-3">
                                                                    <p className="text-gray-900 whitespace-no-wrap">
                                                                        1
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                            <div className="flex-shrink-0 w-10 h-10">
                                                                <img
                                                                    className="w-full h-full rounded-full"
                                                                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                                                    alt=""
                                                                />
                                                            </div>
                                                        </td>
                                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-start">
                                                            <p className="text-gray-900 whitespace-no-wrap">Admin</p>
                                                        </td>
                                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                            <p className="text-gray-900 whitespace-no-wrap">
                                                                Jan 21, 2020
                                                            </p>
                                                        </td>
                                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                            <div className="flex items-center">
                                                                <div className="ml-3">
                                                                    <p className="text-gray-900 whitespace-no-wrap">
                                                                        10$
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                            <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                                                <span
                                                                    aria-hidden=""
                                                                    className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                                                                />
                                                                <span className="relative">Order Place</span>
                                                            </span>
                                                        </td>
                                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                            <span className="relative inline-block px-3 py-1 font-semibold leading-tight">
                                                                <span
                                                                    aria-hidden=""
                                                                    className="absolute inset-0 opacity-50 rounded-full"
                                                                />
                                                                <Link to="/order/1" className='bg-black px-6 py-2 text-white rounded-lg'>
                                                                    <span className="relative">View</span>
                                                                </Link>
                                                            </span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                            <div className="flex items-center">
                                                                <div className="ml-3">
                                                                    <p className="text-gray-900 whitespace-no-wrap">
                                                                        1
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                            <div className="flex-shrink-0 w-10 h-10">
                                                                <img
                                                                    className="w-full h-full rounded-full"
                                                                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                                                    alt=""
                                                                />
                                                            </div>
                                                        </td>
                                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-start">
                                                            <p className="text-gray-900 whitespace-no-wrap">Admin</p>
                                                        </td>
                                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                            <p className="text-gray-900 whitespace-no-wrap">
                                                                Jan 21, 2020
                                                            </p>
                                                        </td>
                                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                            <div className="flex items-center">
                                                                <div className="ml-3">
                                                                    <p className="text-gray-900 whitespace-no-wrap">
                                                                        10$
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                            <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                                                <span
                                                                    aria-hidden=""
                                                                    className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                                                                />
                                                                <span className="relative">Order Place</span>
                                                            </span>
                                                        </td>
                                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                            <span className="relative inline-block px-3 py-1 font-semibold leading-tight">
                                                                <span
                                                                    aria-hidden=""
                                                                    className="absolute inset-0 opacity-50 rounded-full"
                                                                />
                                                                <Link to="/order/1" className='bg-black px-6 py-2 text-white rounded-lg'>
                                                                    <span className="relative">View</span>
                                                                </Link>
                                                            </span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                            <div className="flex items-center">
                                                                <div className="ml-3">
                                                                    <p className="text-gray-900 whitespace-no-wrap">
                                                                        1
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                            <div className="flex-shrink-0 w-10 h-10">
                                                                <img
                                                                    className="w-full h-full rounded-full"
                                                                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                                                    alt=""
                                                                />
                                                            </div>
                                                        </td>
                                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-start">
                                                            <p className="text-gray-900 whitespace-no-wrap">Admin</p>
                                                        </td>
                                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                            <p className="text-gray-900 whitespace-no-wrap">
                                                                Jan 21, 2020
                                                            </p>
                                                        </td>
                                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                            <div className="flex items-center">
                                                                <div className="ml-3">
                                                                    <p className="text-gray-900 whitespace-no-wrap">
                                                                        10$
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                            <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                                                <span
                                                                    aria-hidden=""
                                                                    className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                                                                />
                                                                <span className="relative">Order Place</span>
                                                            </span>
                                                        </td>
                                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                            <span className="relative inline-block px-3 py-1 font-semibold leading-tight">
                                                                <span
                                                                    aria-hidden=""
                                                                    className="absolute inset-0 opacity-50 rounded-full"
                                                                />
                                                                <Link to="/order/1" className='bg-black px-6 py-2 text-white rounded-lg'>
                                                                    <span className="relative">View</span>
                                                                </Link>
                                                            </span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                            <div className="flex items-center">
                                                                <div className="ml-3">
                                                                    <p className="text-gray-900 whitespace-no-wrap">
                                                                        1
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                            <div className="flex-shrink-0 w-10 h-10">
                                                                <img
                                                                    className="w-full h-full rounded-full"
                                                                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                                                    alt=""
                                                                />
                                                            </div>
                                                        </td>
                                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-start">
                                                            <p className="text-gray-900 whitespace-no-wrap">Admin</p>
                                                        </td>
                                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                            <p className="text-gray-900 whitespace-no-wrap">
                                                                Jan 21, 2020
                                                            </p>
                                                        </td>
                                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                            <div className="flex items-center">
                                                                <div className="ml-3">
                                                                    <p className="text-gray-900 whitespace-no-wrap">
                                                                        10$
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                            <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                                                <span
                                                                    aria-hidden=""
                                                                    className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                                                                />
                                                                <span className="relative">Order Place</span>
                                                            </span>
                                                        </td>
                                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                            <span className="relative inline-block px-3 py-1 font-semibold leading-tight">
                                                                <span
                                                                    aria-hidden=""
                                                                    className="absolute inset-0 opacity-50 rounded-full"
                                                                />
                                                                <Link to="/order/1" className='bg-black px-6 py-2 text-white rounded-lg'>
                                                                    <span className="relative">View</span>
                                                                </Link>
                                                            </span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                            <div className="flex items-center">
                                                                <div className="ml-3">
                                                                    <p className="text-gray-900 whitespace-no-wrap">
                                                                        1
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                            <div className="flex-shrink-0 w-10 h-10">
                                                                <img
                                                                    className="w-full h-full rounded-full"
                                                                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                                                    alt=""
                                                                />
                                                            </div>
                                                        </td>
                                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-start">
                                                            <p className="text-gray-900 whitespace-no-wrap">Admin</p>
                                                        </td>
                                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                            <p className="text-gray-900 whitespace-no-wrap">
                                                                Jan 21, 2020
                                                            </p>
                                                        </td>
                                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                            <div className="flex items-center">
                                                                <div className="ml-3">
                                                                    <p className="text-gray-900 whitespace-no-wrap">
                                                                        10$
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                            <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                                                <span
                                                                    aria-hidden=""
                                                                    className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                                                                />
                                                                <span className="relative">Order Place</span>
                                                            </span>
                                                        </td>
                                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                            <span className="relative inline-block px-3 py-1 font-semibold leading-tight">
                                                                <span
                                                                    aria-hidden=""
                                                                    className="absolute inset-0 opacity-50 rounded-full"
                                                                />
                                                                <Link to="/order/1" className='bg-black px-6 py-2 text-white rounded-lg'>
                                                                    <span className="relative">View</span>
                                                                </Link>
                                                            </span>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                                                <span className="text-xs xs:text-sm text-gray-900">
                                                    Showing 1 to 4 of 50 Entries
                                                </span>
                                                <div className="inline-flex mt-2 xs:mt-0">
                                                    <button className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l">
                                                        Prev
                                                    </button>
                                                    <button className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r">
                                                        Next
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <Wishlist />
                        </TabPanel>
                    </div>
                </div>
            </div>
        </Tabs>
    )
}

export default Profile
