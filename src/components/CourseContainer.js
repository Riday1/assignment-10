import React from 'react';
import SingleCourse from './SingleCourse';




const CourseContainer = ({ courses }) => {
    return (
        <div className='grid gird-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
            {
                courses.map(course => <SingleCourse key={course.id} course={course}></SingleCourse>)
            }
        </div>
    );
};

export default CourseContainer;