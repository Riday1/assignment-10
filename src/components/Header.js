import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { FaMoon, FaRegSun } from "react-icons/fa6";
import { settings } from 'firebase/analytics';
import logo_white from '../assets/logo_white.png'

const Header = () => {
    const { user, logOut, loading } = useContext(AuthContext)


    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log('logout')
            })
            .catch(e => console.log(e))
    }


    console.log(user)
    return (
        <header className=" p-4 bg-gray-100 text-gray-800 shadow-md z-40">
            <div className="flex justify-between h-16 max-w-screen-xl mx-auto">
                <Link to={`/profile`} className="flex items-center ">
                    <img src={logo_white} className=' w-28 h-28' alt="" />
                </Link>
                <ul className="items-stretch hidden space-x-3 lg:flex">

                    <Link to='/courses' className="flex items-center mx-4 -mb-1 hover:border-b-2  text-violet-600 hover:border-violet-600 transition duration-300 ease-in-out">Courses</Link>

                    <li className="flex">
                        <Link to="/faq" className="flex items-center mx-4 -mb-1 hover:border-b-2  text-violet-600 hover:border-violet-600 transition duration-300 ease-in-out">FAQ</Link>
                    </li>
                    <li className="flex">
                        <Link to="/blog" className="flex items-center mx-4 -mb-1 hover:border-b-2  text-violet-600 hover:border-violet-600 transition duration-300 ease-in-out">Blog</Link>
                    </li>
                    <li className="flex">
                        <Link to="/contact" className="flex items-center mx-4 -mb-1 hover:border-b-2  text-violet-600 hover:border-violet-600 transition duration-300 ease-in-out">contact</Link>
                    </li>
                    <li className="flex">
                        <Link to="/team" className="flex items-center mx-4 -mb-1 hover:border-b-2  text-violet-600 hover:border-violet-600 transition duration-300 ease-in-out">Team</Link>
                    </li>
                </ul>

                {
                    user?.emailVerified ?


                        <div className='lg:flex items-center flex-shrink-0 hidden space-x-5'>
                            <Link to='/profile'>
                                <img src={user?.photoURL} alt='' className="w-10 h-10 rounded-full" />
                            </Link>
                            <button onClick={handleLogOut} className='px-6 py-2 focus:font-semibold focus:bg-violet-600 text-violet-600 focus:text-white rounded' >Logout</button>
                            <FaMoon className='text-2xl' />
                            <FaRegSun className='text-2xl' />
                        </div>
                        :
                        <div className="items-center flex-shrink-0 hidden lg:flex">
                            <Link to='/login' className="self-center px-6 py-2 focus:font-semibold focus:bg-violet-600 text-violet-600 focus:text-white rounded">Sign in</Link>
                            <Link to='/register' className="self-center px-6 py-2 focus:font-semibold focus:bg-violet-600 text-violet-600 focus:text-white rounded">Sign up</Link>
                        </div>
                }
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