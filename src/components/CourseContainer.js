import React from 'react';
import CourseDetails from './CourseDetails';




const CourseContainer = ({ courses }) => {
    return (
        <div className='grid grid-cols-3 gap-10'>
            {
                courses.map(course => <CourseDetails key={course.id} course={course}></CourseDetails>)
            }
        </div>
    );
};

export default CourseContainer;