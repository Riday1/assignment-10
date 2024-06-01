import React from 'react';

const Blog = () => {
    return (
        <section className='dark:bg-[#1F2937] transition duration-300 px-8 md:px-6 h-screen '>
            <div className="flex flex-col justify-center items-center  dark:text-gray-800 max-w-screen-xl md:pt-20 mx-auto ">
                <h1 className='text-4xl lg:text-7xl font-bold mb-10  text-gray-800 dark:text-violet-700'>Frequently Asked Question </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:10 w-full">
                    <div className='dark:bg-[#111827] bg-gray-100 dark:text-gray-300  py-4 px-6  shadow-md'>
                        <h1 className="text-lg sm:text-2xl font-bold my-5 ">What is Cors ? </h1>
                        <p>CORS is a mechanism used for integrating applications. CORS defines a way for client web applications tat are loaded in one domain to interact with resources in a different domain. This is useful because sometimes we use third-party api resources in client side code to make complex applications.</p>
                    </div>
                    <div className='dark:bg-[#111827] bg-gray-100 dark:text-gray-300  py-4 px-6 shadow-md'>
                        <h1 className="text-lg sm:text-2xl font-bold my-5 " >Why are you using firebase ? What other options do you have to implement authentication.</h1>
                        <p>i'm using firebase to authenticate and authorized user in our app. It is very fast and convenient. It provide us free hosting service to deploy our website without any cost. It also provide google analytics services. </p>
                    </div>
                    <div className='dark:bg-[#111827] bg-gray-100 dark:text-gray-300 py-4 px-6  shadow-md'>
                        <h1 className="text-lg sm:text-2xl font-bold my-5 " >How does the private route work?</h1>
                        <p>When we deal with user authentication and authorization we use private route. Private routes restrict access to some specific routes based on th user's authentication to ensuring that only authentication users can access that specific route. </p>
                    </div>
                    <div className='dark:bg-[#111827] bg-gray-100 dark:text-gray-300  py-4 px-6 shadow-md'>
                        <h1 className="text-lg sm:text-2xl font-bold my-5 " >What is Node ? How does Node work ? </h1>
                        <p>Node.JS is an open source and cross platform javascript runtime environment. It runs the V8 engine outside of the browser which allow nodejs to be very performant.</p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Blog;