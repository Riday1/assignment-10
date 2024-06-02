import React from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'react-lottie';
import developer1 from '../assets/developer1.json'
const Home = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: developer1,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <section className='dark:bg-[#1F2937]  dark:text-gray-300 transition duration-300'>
            <div className=' grid grid-cols-1 md:grid-cols-2 max-w-screen-xl mx-auto h-screen'>
                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h1 className="text-5xl md:text-7xl font-bold leading-none sm:text-6xl">Welcome to
                        <span className="text-violet-600">TechTutor</span>home page
                    </h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12">Dictum aliquam porta in condimentum ac integer
                        <br className="hidden md:inline lg:hidden" />turpis pulvinar, est scelerisque ligula sem
                    </p>
                    <div className="flex flex-col sm:flex-row  space-y-4 sm:items-center sm:justify-center sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <Link to='/courses' className="px-8 py-3 text-lg font-semibold rounded bg-violet-600 text-gray-50 active:bg-violet-500">Courses</Link>
                        <Link to='/register' className="px-8 py-3 text-lg font-semibold border rounded dark:bg-gray-300 dark:text-gray-800 border-gray-800 active:bg-gray-300">Sign up</Link>
                    </div>
                </div>
                <div className="flex flex-col justify-center   ">
                    <Lottie className='' height={500} width={400} options={defaultOptions}></Lottie>
                </div>


            </div>
        </section>
    );
};

export default Home;