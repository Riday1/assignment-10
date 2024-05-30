import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

const SingleCourse = ({ course }) => {
    const { id, category_id, category_name, dtails, image, price, ratings, review, title } = course// I WILL MODIFY IT 5 MINUTES LATER

    const navigate = useNavigate();

    return (
        <div className=" max-w-lg  space-y-6 overflow-hidden rounded-lg shadow-lg dark:bg-[#111827] dark:text-gray-300 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:shadow-xl bg-gray-100 hover:bg-violet-50">
            <img src={image} alt="" className="object-cover w-full mb-4 h-44 rounded-top-lg  dark:bg-gray-500" />
            <div className='p-6 mt-0'>

                <h2 className="mb-1 text-xl font-semibold">{title}</h2>
                <p className="text-sm dark:text-gray-600">
                    { }
                </p>
                <button onClick={() => navigate(`/course-details/${id}`)} type="button" className="flex justify-center items-center w-full px-8 py-2 font-semibold rounded-md bg-violet-700 text-gray-100">
                    <span>Details</span>
                    <FaArrowRightLong className='ml-2'></FaArrowRightLong>
                </button>
            </div>


        </div>
    );
};

export default SingleCourse;



