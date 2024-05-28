import React from 'react';
import { FaFacebook, FaInstagram, FaSquareXTwitter } from "react-icons/fa6";



const Footer = () => {
    return (
        <footer className="px-4 divide-y bg-gray-100 text-gray-800   bottom-0 w-full">
            <div className="max-w-screen-xl mx-auto  flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
                <div className="lg:w-1/3 flex justify-center items-center space-x-3 lg:justify-start">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-violet-600">
                    </div>
                    <span className="self-center text-2xl font-semibold">Tech Tutor</span>
                </div>
                <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
                    <div className="space-y-3">
                        <h3 className="text-xl uppercase text-gray-900">Product</h3>
                        <ul className="space-y-1">
                            <li>
                                <a rel="noopener noreferrer" href="#">Features</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Integrations</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Pricing</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">FAQ</a>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="text-xl uppercase text-gray-900">Company</h3>
                        <ul className="space-y-1">
                            <li>
                                <a rel="noopener noreferrer" href="#">Privacy</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Terms of Service</a>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="text-xl uppercase text-gray-900">Developers</h3>
                        <ul className="space-y-1">
                            <li>
                                <a rel="noopener noreferrer" href="#">Public API</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Documentation</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Guides</a>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <p className="text-xl uppercase text-gray-900">Social media</p>
                        <div className="flex justify-evenly  space-x-3">
                            <a rel="noopener noreferrer" href="#" title="Facebook" className="flex items-center p-1 ">
                                <FaFacebook className='w-6 h-6'></FaFacebook>
                            </a>
                            <a rel="noopener noreferrer" href="#" title="Twitter" className="flex items-center p-1">
                                <FaSquareXTwitter className='w-6 h-6' />
                            </a>
                            <a rel="noopener noreferrer" href="#" title="Instagram" className="flex items-center p-1">
                                <FaInstagram className='w-6 h-6' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-6 text-sm text-center text-gray-600">© All rights reserved by,, Tech Tutor</div>
        </footer >
    );
};

export default Footer;