import React from 'react';

const Spinner = () => {
    return (
        <div className=' flex items-center justify-center mt-32'>
            <div className="w-24 h-24 border-4 border-dashed rounded-full animate-spin border-violet-600"></div>
        </div>
    );
};

export default Spinner;