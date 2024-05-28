import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { FaMoon, FaRegSun } from "react-icons/fa6";
import { settings } from 'firebase/analytics';
import logo_white from '../assets/logo_white.png'
import logo_dark from '../assets/logo_dark.png'
const Header = () => {
    const { user, logOut, loading, darkMode, setDarkMode } = useContext(AuthContext)


    const toggleDarkMode = () => setDarkMode(!darkMode)
    const handleLogOut = () => {
        logOut()
            .then(() => {
            })
            .catch(e => console.log(e))
    }


    // console.log(user)
    return (
        <header className=" p-4 dark:bg-gray-700 bg-gray-100  shadow-md z-40">
            <div className="flex justify-between h-16 max-w-screen-xl mx-auto text-violet-600 dark:text-violet-300">
                <Link to='/' className="flex items-center ">
                    <img src={darkMode ? logo_dark : logo_white} className=' w-28 h-28' alt="" />
                </Link>
                <ul className="items-stretch hidden space-x-3 lg:flex  ">

                    <Link to='/courses' className="flex items-center mx-4 -mb-1 hover:border-b-2 hover:border-violet-600 transition duration-300 ease-in-out">Courses</Link>

                    <li className="flex">
                        <Link to="/faq" className="flex items-center mx-4 -mb-1 hover:border-b-2 hover:border-violet-600 transition duration-300 ease-in-out">FAQ</Link>
                    </li>
                    <li className="flex">
                        <Link to="/blog" className="flex items-center mx-4 -mb-1 hover:border-b-2 hover:border-violet-600 transition duration-300 ease-in-out">Blog</Link>
                    </li>
                    <li className="flex">
                        <Link to="/contact" className="flex items-center mx-4 -mb-1 hover:border-b-2 hover:border-violet-600 transition duration-300 ease-in-out">contact</Link>
                    </li>
                    <li className="flex">
                        <Link to="/team" className="flex items-center mx-4 -mb-1 hover:border-b-2 hover:border-violet-600 transition duration-300 ease-in-out">Team</Link>
                    </li>
                </ul>

                {
                    user?.emailVerified ?


                        <div className='lg:flex items-center flex-shrink-0 hidden space-x-5'>
                            <Link to='/profile'>
                                <div className="relative flex-shrink-0">
                                    <span className="absolute bottom-0 right-0 w-4 h-4 bg-green-400 border rounded-full dark:text-gray-800 border-gray-50"></span>
                                    <img src={user?.photoURL} alt="" className="w-10 h-10  rounded-full  ring-2 ring-offset-4 ring-violet-600" />
                                </div>
                            </Link>
                            <button onClick={handleLogOut} className='px-6 py-2 focus:font-semibold focus:bg-violet-600  focus:text-white rounded' >Logout</button>

                        </div>
                        :
                        <div className="items-center flex-shrink-0 hidden lg:flex">
                            <Link to='/login' className="self-center px-6 py-2 focus:font-semibold focus:bg-violet-600  focus:text-white rounded">Sign in</Link>
                            <Link to='/register' className="self-center px-6 py-2 focus:font-semibold focus:bg-violet-600  focus:text-white rounded">Sign up</Link>
                        </div>
                }
                <div className='flex items-center'>
                    {
                        darkMode ?
                            <FaRegSun onClick={toggleDarkMode} className='text-2xl ' />
                            :
                            <FaMoon onClick={toggleDarkMode} className='text-2xl' />

                    }
                </div>
                <button className="p-4 md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-800">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </header>
    );
};

export default Header;