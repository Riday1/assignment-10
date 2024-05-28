import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

const SingleCourse = ({ course }) => {
    const { id, category_id, category_name, dtails, image, price, ratings, review, title } = course// I WILL MODIFY IT 5 MINUTES LATER

    const navigate = useNavigate();

    return (
        <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-lg dark:bg-gray-50 dark:text-gray-800 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 hover:shadow-xl hover:bg-violet-50">
            <div>
                <img src={image} alt="" className="object-cover w-full mb-4 h-32 rounded-md  dark:bg-gray-500" />
                <h2 className="mb-1 text-xl font-semibold">{title}</h2>
                <p className="text-sm dark:text-gray-600">
                    { }
                </p>
            </div>

            <button onClick={() => navigate(`/course-details/${id}`)} type="button" className="flex justify-center items-center w-full px-8 py-2 font-semibold rounded-md bg-violet-700 text-gray-100">
                <span>Course Details</span>
                <FaArrowRightLong className='ml-2'></FaArrowRightLong>
            </button>
        </div>
    );
};

export default SingleCourse;



