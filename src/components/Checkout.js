import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const { title, id } = useLoaderData();
    return (
        <div>
            <p className='text-4xl font-bold mb-5'>checkout page </p>
            <p className='text-2xl font-semibold text-violet-600'>ID:{id}</p>
            <p className='text-2xl font-semibold text-violet-600'>Title: {title}</p>
        </div>
    );
};

export default Checkout;