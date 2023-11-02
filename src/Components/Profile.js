import React from 'react'
import { Link, useNavigate } from "react-router-dom";

const Profile = () => {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const LogOut = () => {
        localStorage.clear();
        navigate("/login")
    }
    return (
        <div className='text-center'>
            <div className="mx-auto grid grid-cols-12 gap-4 bg-zinc-50 p-1">
                <div className="col-span-12 rounded-lg border border-gray-400 bg-gray-200 p-16 sm:col-span-4">
                    {/* Sidebar */}
                    My Account
                    <div className="w-80 text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                        <button
                            type="button"
                            className="relative inline-flex items-center w-full px-4 py-4 text-sm font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
                        >
                            <svg
                                className="w-3 h-3 mr-2.5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                            </svg>
                            Profile
                        </button>
                        <button
                            type="button"
                            className="relative inline-flex items-center w-full px-4 py-4 text-sm font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
                        >
                            <svg
                                className="w-3 h-3 mr-2.5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                            </svg>
                            Manage address
                        </button>
                        <button
                            type="button"
                            className="relative inline-flex items-center w-full px-4 py-4 text-sm font-medium border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
                        >
                            <svg
                                className="w-3 h-3 mr-2.5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M7.75 4H19M7.75 4a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 4h2.25m13.5 6H19m-2.25 0a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 10h11.25m-4.5 6H19M7.75 16a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 16h2.25"
                                />
                            </svg>
                            Orders
                        </button>
                        <button
                            type="button"
                            className="relative inline-flex items-center w-full px-4 py-4 text-sm font-medium border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
                        >
                            <svg
                                className="w-3 h-3 mr-2.5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 18"
                                fill="currentColor"
                            >
                                <path
                                    d="M18 4H16V9C16 10.0609 15.5786 11.0783 14.8284 11.8284C14.0783 12.5786 13.0609 13 12 13H9L6.846 14.615C7.17993 14.8628 7.58418 14.9977 8 15H11.667L15.4 17.8C15.5731 17.9298 15.7836 18 16 18C16.2652 18 16.5196 17.8946 16.7071 17.7071C16.8946 17.5196 17 17.2652 17 17V15H18C18.5304 15 19.0391 14.7893 19.4142 14.4142C19.7893 14.0391 20 13.5304 20 13V6C20 5.46957 19.7893 4.96086 19.4142 4.58579C19.0391 4.21071 18.5304 4 18 4Z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M12 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V9C0 9.53043 0.210714 10.0391 0.585786 10.4142C0.960859 10.7893 1.46957 11 2 11H3V13C3 13.1857 3.05171 13.3678 3.14935 13.5257C3.24698 13.6837 3.38668 13.8114 3.55279 13.8944C3.71889 13.9775 3.90484 14.0126 4.08981 13.996C4.27477 13.9793 4.45143 13.9114 4.6 13.8L8.333 11H12C12.5304 11 13.0391 10.7893 13.4142 10.4142C13.7893 10.0391 14 9.53043 14 9V2C14 1.46957 13.7893 0.960859 13.4142 0.585786C13.0391 0.210714 12.5304 0 12 0Z"
                                    fill="currentColor"
                                />
                            </svg>
                            My Wishlist
                        </button>
                        <button
                            type="button"
                            className="relative inline-flex items-center w-full px-4 py-4 text-sm font-medium border-b border-gray-200 rounded-b-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
                        >
                            <svg
                                className="w-3 h-3 mr-2.5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                                <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                            </svg>
                            Payment Method
                        </button>
                        <Link
                            className="relative inline-flex items-center w-full px-4 py-4 text-sm font-medium rounded-b-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
                            to="/login"
                            onClick={LogOut}
                        >
                            <svg
                                className="w-3 h-3 mr-2.5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                                <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                            </svg>
                            LogOut ( {auth && JSON.parse(auth).name} )
                        </Link>
                    </div>
                </div>
                <div className="col-span-12 rounded-lg border border-gray-500 bg-gray-200 p-1 sm:col-span-8">
                    {/* Main Content */}
                    {/* component */}
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
                    <>
                        {/* component */}
                        <div className="flex items-center h-screen w-full justify-center">
                            <div className="max-w-xs">
                                <div className="bg-white shadow-xl rounded-lg py-3">
                                    <div className="photo-wrapper p-2">
                                        <img
                                            className="w-32 h-32 rounded-full mx-auto"
                                            src="https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp"
                                            alt="John Doe"
                                        />
                                    </div>
                                    <div className="p-2">
                                        <h3 className="text-center text-xl text-gray-900 font-medium leading-8">
                                            Joh Doe
                                        </h3>
                                        <div className="text-center text-gray-400 text-xs font-semibold">
                                            <p>Web Developer</p>
                                        </div>
                                        <table className="text-xs my-3">
                                            <tbody>
                                                <tr>
                                                    <td className="px-2 py-2 text-gray-500 font-semibold">
                                                        Address
                                                    </td>
                                                    <td className="px-2 py-2">Chatakpur-3, Dhangadhi Kailali</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-2 py-2 text-gray-500 font-semibold">Phone</td>
                                                    <td className="px-2 py-2">+977 9955221114</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-2 py-2 text-gray-500 font-semibold">Email</td>
                                                    <td className="px-2 py-2">john@exmaple.com</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <div className="text-center my-3">
                                            <a
                                                className="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium"
                                                href="#"
                                            >
                                                View Profile
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>

                </div>
            </div>
        </div>
    )
}

export default Profile
