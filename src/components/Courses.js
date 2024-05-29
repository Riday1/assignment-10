import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import Sidebar2 from './Sidebar2';
import { Outlet, useLoaderData } from 'react-router-dom';
import CourseContainer from './CourseContainer';




const Courses = () => {
    const courses = useLoaderData();

    return (
        <div className=' dark:bg-[#1F2937] transition duration-300'>
            <div className='grid grid-cols-12 max-w-screen-xl mx-auto'>
                <div className='col-span-3 '>
                    <Sidebar></Sidebar>
                </div>
                <div className='col-span-9 p-6 '>
                    <CourseContainer courses={courses}></CourseContainer>
                </div>
            </div>
        </div>
    );
};

export default Courses;



