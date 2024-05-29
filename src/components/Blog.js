import React from 'react';

const Blog = () => {
    return (
        <section className='dark:bg-[#1F2937] transition duration-300'>
            <div className="flex flex-col justify-center items-center  dark:text-gray-800 max-w-screen-xl h-screen mx-auto ">
                <h1 className='text-7xl font-bold mb-10  text-gray-800 dark:text-violet-700'>Frequently Asked Question </h1>
                <div className="grid grid-cols-2 gap-10 w-full">
                    <div className='dark:bg-[#111827] bg-gray-100 dark:text-gray-300  py-4 px-6'>
                        <h1 className="text-2xl font-bold my-5 ">What is Cors ? </h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing  py-4 px-6elit. Quam animi debitis necessitatibus sit incidunt dignissimos quas deserunt dolores placeat veniam.</p>
                    </div>
                    <div className='dark:bg-[#111827] bg-gray-100 dark:text-gray-300  py-4 px-6'>
                        <h1 className="text-2xl font-bold my-5 " >Why are you using firebase ? What other options do you have to implement authentication.</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quam perferendis nostrum voluptates consequuntur in repellendus vero voluptatibus omnis ex!</p>
                    </div>
                    <div className='dark:bg-[#111827] bg-gray-100 dark:text-gray-300 py-4 px-6 '>
                        <h1 className="text-2xl font-bold my-5 " >How does the private route work?</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo commodi ratione animi expedita in soluta architecto enim voluptatum neque ipsa?</p>
                    </div>
                    <div className='dark:bg-[#111827] bg-gray-100 dark:text-gray-300  py-4 px-6'>
                        <h1 className="text-2xl font-bold my-5 " >What is Node ? How does Node work ? </h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam perferendis veritatis quaerat accusantium asperiores quo libero fugit delectus repellat dolore.</p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Blog;