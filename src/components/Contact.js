import React from 'react';
import { FaLocationDot, FaPhone, FaRegMessage } from "react-icons/fa6";
const Contact = () => {
    return (
        <section className="py-6  dark:bg-[#1F2937] dark:text-gray-300 h-screen transition duration-300">
            <div className="text-start grid mx-auto  max-w-screen-xl grid-cols-1   md:grid-cols-2 md:divide-x">
                <div className="space-y-5 py-6 md:py-0 md:px-6">
                    <h1 className="text-6xl font-bold text-gray-800  dark:text-violet-600">Get in touch</h1>
                    <p className="text-xl pt-2 pb-4">Fill in the form to start a conversation</p>
                    <div className="space-y-4">
                        <p className="flex items-center">
                            <FaLocationDot className='mr-3 text-xl' />
                            <span>Fake address, 9999 City</span>
                        </p>
                        <p className="flex items-center">
                            <FaPhone className='mr-3 text-xl' />
                            <span>123456789</span>
                        </p>
                        <p className="flex items-center">
                            <FaRegMessage className='mr-3 text-xl' />
                            <span>contact@business.com</span>
                        </p>
                    </div>
                </div>
                <form noValidate="" className="flex flex-col py-6 space-y-10 md:py-0 md:px-6 ">
                    <label className="block space-y-5">
                        <span className="mb-1">Full name</span>
                        <input type="text" placeholder="Leroy Jenkins" className="w-full px-4 py-3 rounded-md outline-none border  border-2 border-gray-300 bg-gray-50 dark:bg-[#1F2937] text-gray-800  dark:text-gray-300 focus:border-violet-600" />
                    </label>
                    <label className="block space-y-5">
                        <span className="mb-1">Email address</span>
                        <input type="email" placeholder="leroy@jenkins.com" className="w-full px-4 py-3 rounded-md outline-none border  border-2 border-gray-300 bg-gray-50 dark:bg-[#1F2937] text-gray-800 dark:text-gray-300 focus:border-violet-600" />
                    </label>
                    <label className="block space-y-5">
                        <span className="mb-1">Message</span>
                        <textarea rows="3" className="w-full px-4 py-3 rounded-md outline-none border  border-2 border-gray-300 bg-gray-50 dark:bg-[#1F2937] text-gray-800 dark:text-gray-300 focus:border-violet-600"></textarea>
                    </label>
                    <button type="button" className="self-center px-8 py-3 text-lg rounded   bg-violet-600 text-gray-50  active:bg-violet-500 shadow-md">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;