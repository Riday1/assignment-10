import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('https://tech-tutor-server-red.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className="h-full flex flex-col justify-between p-6 space-y-2  dark:text-gray-800">
            <aside className="w-full  dark:text-gray-800">
                <nav className="space-y-4 text-start ">
                    <h2 className="text-md font-semibold tracking-widest uppercase dark:text-gray-200">Courses Categories</h2>
                    <div className="flex flex-col space-y-5 ">
                        {
                            categories.map(category => <Link key={category.id} className='text-sm underline text-violet-700 dark:text-violet-300
                              transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300' to={`/categories/${category.id}`}>{category.category_name}</Link>)
                        }
                    </div>
                </nav>
            </aside>
        </div>
    )
};

export default Sidebar;