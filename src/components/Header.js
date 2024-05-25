import React from 'react';
import { Link } from 'react-router-dom';



const Header = () => {
    return (
        <header className=" p-4 dark:bg-gray-100 dark:text-gray-800 shadow-md">
            <div className="flex justify-between h-16 max-w-screen-xl mx-auto">
                <Link to="" className="flex items-center ">
                    logo
                </Link>
                <ul className="items-stretch hidden space-x-3 lg:flex">

                    <Link to="/courses" className="flex items-center mx-4 -mb-1 hover:border-b-2  text-violet-600 hover:border-violet-600 transition duration-300 ease-in-out">Courses</Link>

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
                <div className="items-center flex-shrink-0 hidden lg:flex">
                    <Link to='/login' className="self-center px-6 py-2 focus:font-semibold focus:bg-violet-600 text-violet-600 focus:text-white rounded">Sign in</Link>
                    <Link to='/register' className="self-center px-6 py-2 focus:font-semibold focus:bg-violet-600 text-violet-600 focus:text-white rounded">Sign up</Link>
                </div>
                {/* <>
                    <img src='' alt='' />
                    <p>Theme</p>
                    <p>Logout</p>
                </> */}
                <button className="p-4 hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-800">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </header>
    );
};

export default Header;