import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { FaMoon, FaRegSun, FaBars } from "react-icons/fa6";
import logo_white from '../assets/logo_white.png'
import logo_dark from '../assets/logo_dark.png'
import { RxCross1, RxCross2 } from 'react-icons/rx';
const Header = () => {
    const { user, logOut, loading, darkMode, setDarkMode } = useContext(AuthContext)
    const [toggleMenu, setToggleMenu] = useState(true)

    const toggleDarkMode = () => setDarkMode(!darkMode)
    const handleLogOut = () => {
        logOut()
            .then(() => {
            })
            .catch(e => console.log(e))
    }


    // console.log(user)
    return (
        <header className=" md:p-4 dark:bg-gray-700 bg-gray-100  shadow-md z-40 transition duration-300">
            <div className="sm:relative md:static flex justify-between h-16 max-w-screen-xl mx-auto text-violet-600 dark:text-violet-300">
                <NavLink to='/' className="flex items-center ">
                    <img src={darkMode ? logo_dark : logo_white} className='w-14 h-14 md:w-28 md:h-28' alt="" />
                </NavLink>
                <div className={`absolute  py-3 md:py-0 w-full bg-gray-100 dark:bg-gray-700 md:bg-none ${toggleMenu ? 'top-[-500px]' : 'top-[50px]'}  duration-300 md:static md:inset-0 md:flex justify-center  items-center space-y-3 md:space-y-0 list-none shadow-lg md:shadow-none`}>
                    <li><NavLink to='/courses' style={({ isActive }) => { return { borderBottom: isActive ? "2px solid #7c3aed" : "" } }} className={` sm:mx-0 mx-4 -mb-1 sm:py-2 md:py-4`}>Courses</NavLink></li>
                    <li><NavLink to="/blog" style={({ isActive }) => { return { borderBottom: isActive ? "2px solid #7c3aed" : "" } }} className="sm:mx-0 md:mx-4 -mb-1 sm:py-2 py-4">Blog</NavLink></li>
                    <li><NavLink to="/contact" style={({ isActive }) => { return { borderBottom: isActive ? "2px solid #7c3aed" : "" } }} className="sm:mx-0  md:mx-4 -mb-1 sm:py-2 py-4">Contact</NavLink></li>
                    {user?.emailVerified ?
                        <></>
                        :

                        <>
                            <li><NavLink to='/login' style={({ isActive }) => { return { borderBottom: isActive ? "2px solid #7c3aed" : "" } }} className="sm:mx-0 md:mx-4  -mb-1 py-4">Sign in</NavLink></li>
                            <li><NavLink to='/register' style={({ isActive }) => { return { borderBottom: isActive ? "2px solid #7c3aed" : "" } }} className="sm:mx-0 md:mx-4  -mb-1 py-4">Sign up</NavLink></li>
                        </>
                    }
                </div>

                <div className='md:flex items-center justify-center p-4 md:p-0'>
                    {
                        user?.emailVerified &&
                        <div className='md:flex items-center flex-shrink-0  space-x-5'>
                            <NavLink to='/profile'>
                                <div className="relative flex-shrink-0">
                                    {/* <span className="absolute bottom-0 right-0 w-4 h-4 bg-green-400 border rounded-full dark:text-gray-800 border-gray-50"></span> */}
                                    <img src={user?.photoURL} alt="" className="w-10 h-10  rounded-full  ring-2 ring-offset-4 ring-violet-600" />
                                </div>
                            </NavLink>
                            <button onClick={handleLogOut} className='px-6 py-2 focus:font-semibold focus:bg-violet-600  focus:text-white rounded' >Logout</button>
                        </div>

                    }
                    <>
                        <button className='p-4'>
                            {
                                darkMode ?
                                    <FaRegSun onClick={toggleDarkMode} className='md:text-2xl ' />
                                    :
                                    <FaMoon onClick={toggleDarkMode} className='md:text-2xl ' />
                            }
                        </button>
                        <button onClick={() => setToggleMenu(!toggleMenu)} className="p-4 md:hidden">{toggleMenu ? <FaBars /> : <RxCross1 />}</button>
                    </>
                </div>

            </div>
        </header >
    );
};

export default Header;

