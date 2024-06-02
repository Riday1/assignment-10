import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import { FaSquareCheck } from "react-icons/fa6";
import { useLoaderData, useNavigate } from 'react-router-dom';
import { FaStar } from "react-icons/fa6"
import { FaDollarSign } from "react-icons/fa6";
import { FaRegFilePdf } from "react-icons/fa6";
import { usePDF } from 'react-to-pdf'


const CourseDetails = () => {
    const courseDetails = useLoaderData();
    const navigate = useNavigate()
    const { id, category_id, category_name, details, image, price, ratings, review, title } = courseDetails// I WILL MODIFY IT 5 MINUTES LATER

    const { toPDF, targetRef } = usePDF({ filename: 'page.pdf' });
    return (

        <div className='h-screen flex justify-center items-center dark:bg-[#1F2937]'>
            <div ref={targetRef} className="flex flex-col max-w-xl p-6 space-y-6  rounded-lg shadow-md bg-gray-100 dark:bg-[#111827] text-gray-800 dark:text-gray-300">
                <div className="flex space-x-4 items-center">
                    <h1 className='text-xl font-bold flex-grow'>COURSE DETAILS </h1>
                    <button onClick={() => toPDF()} className='text-2xl bg-violet-700 text-white rounded py-1 px-2'><FaRegFilePdf /></button>

                </div>
                <div className='mt-3'>
                    <img src={image} alt="" className="rounded-md w-full h-62" />
                    <h2 className="mb-1 text-xl font-semibold">{title}</h2>
                    <p className="text-sm dark:text-gray-300">{details?.short_brief}</p>
                </div>
                <div>
                    {
                        details?.features?.map((feature) => <p className='flex items-center'>
                            <FaSquareCheck className='text-violet-600 text-xl' />
                            <span className='text-xl ml-4'>{feature}</span>
                        </p>)
                    }
                </div>
                <div className="flex flex-wrap justify-between">
                    <div className='flex items-center'>

                        <FaStar className='text-yellow-400 text-2xl' />
                        <span className='font-bold text-violet-600 text-xl ml-3 '>({ratings}.0)</span>
                    </div>
                    <div className='flex items-center'>
                        <FaDollarSign className='text-violet-500 text-2xl' />
                        <span className='font-bold text-violet-600 text-xl ml-1 '>{price}</span>
                    </div>

                </div>
                <button onClick={() => navigate(`/checkout/${id}`)} type="button" className="flex justify-center items-center w-full px-8 py-2 font-semibold rounded-md bg-violet-700 text-gray-100">
                    Get Premium Access
                </button>
            </div >
        </div>

    );
};

export default CourseDetails;



