import React from 'react';
import Sidebar from './Sidebar';
import Sidebar2 from './Sidebar2';

const Courses = () => {
    return (
        <div className='h-screen max-w-screen-xl mx-auto'>
            <div className='h-screen grid grid-cols-12 gap-10'>
                <div className='col-span-3 bg-gray-50'>
                    <Sidebar></Sidebar>
                </div>
                <div className='col-span-9 p-6'>

                </div>
            </div>
        </div>
    );
};

export default Courses;