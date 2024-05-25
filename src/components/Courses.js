import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import Sidebar2 from './Sidebar2';
import { useLoaderData } from 'react-router-dom';
import CourseContainer from './CourseContainer';




const Courses = () => {
    // const [courses, setCourses] = useState([]);
    // useEffect(() => {
    //     fetch('https://tech-tutor-server-red.vercel.app/courses')
    //         .then(res => res.json())
    //         .then(data => setCourses(data))
    // }, []);


    const courses = useLoaderData();
    console.log(courses)

    return (
        <div className='h-screen max-w-screen-xl mx-auto z-0'>
            <div className='h-screen grid grid-cols-12'>
                <div className='col-span-3 bg-gray-50'>
                    <Sidebar></Sidebar>
                </div>
                <div className='col-span-9 p-6 bg-violet-50'>
                    <CourseContainer courses={courses}></CourseContainer>
                </div>
            </div>
        </div>
    );
};

export default Courses;