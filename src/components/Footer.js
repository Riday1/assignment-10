import React from 'react';
import { FaFacebook, FaInstagram, FaSquareXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';



const Footer = () => {
    return (
        <footer className="px-4 divide-y dark:bg-[#374151] bg-gray-100 text-gray-800 dark:text-gray-300 w-full transition duration-300">
            <div className="max-w-screen-xl px-0 md:px-6 flex flex-col justify-between py-4 mx-auto space-y-8 lg:flex-row lg:space-y-0">
                <div className=" lg:w-1/4 hidden lg:flex justify-center items-center space-x-3 lg:justify-start">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-violet-600">
                    </div>
                    <span className="self-center text-2xl font-semibold">Tech Tutor</span>
                </div>
                <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
                    <div className="space-y-3">
                        <h3 className="text-xl uppercase ">Product</h3>
                        <ul className="space-y-1">
                            <li>
                                <Link to='#'>Features</Link>
                            </li>
                            <li>
                                <Link to='#'>Integrations</Link>
                            </li>
                            <li>
                                <Link to='#'>Pricing</Link>
                            </li>
                            <li>
                                <Link to='#'>FAQ</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="text-xl uppercase ">Company</h3>
                        <ul className="space-y-1">
                            <li>
                                <Link to='#'>Privacy</Link>
                            </li>
                            <li>
                                <Link to='#'>Terms of Service</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="text-xl uppercase ">Developers</h3>
                        <ul className="space-y-1">
                            <li>
                                <Link to='#'>Public API</Link>
                            </li>
                            <li>
                                <Link to='#'>Documentation</Link>
                            </li>
                            <li>
                                <Link to='#'>Guides</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <p className="text-xl uppercase">Social media</p>
                        <div className="flex justify-evenly  space-x-3">
                            <Link to='#' title="Facebook" className="flex items-center p-1 ">
                                <FaFacebook className='w-6 h-6'></FaFacebook>
                            </Link>
                            <Link to='#' title="Twitter" className="flex items-center p-1">
                                <FaSquareXTwitter className='w-6 h-6' />
                            </Link>
                            <Link to='#' title="Instagram" className="flex items-center p-1">
                                <FaInstagram className='w-6 h-6' />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-6 text-sm text-center max-w-screen-xl mx-auto ">© All rights reserved by-Ridoy Hossain</div>
        </footer >
    );
};

export default Footer;