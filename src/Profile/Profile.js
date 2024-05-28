import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Profile = () => {
    const { user } = useContext(AuthContext);
    const { displayName, uid, email, photoURL } = user;

    return (
        <div>

            <div className="flex flex-col sm:max-w-md md:max-w-3xl   p-6 rounded-xl sm:p-10 bg-gray-50 dark:text-gray-800 shadow-md mx-auto mt-20">
                {/* profile picture + name section */}
                <div className="mb-8 text-center">
                    <div className="flex flex-col justify-center  p-6  sm:px-12  text-gray-800 mx-auto">
                        <img src={photoURL} alt="" className="w-44 h-40 mx-auto rounded-full bg-gray-500 aspect-square" />
                        <div className="space-y-4 text-center divide-y divide-gray-300">
                            <div className="my-2 space-y-1">
                                <h2 className="text-xl font-semibold sm:text-2xl">{displayName}</h2>
                                <p className="px-5 font-semibold text-md sm:text-base text-gray-600">ID: {uid}</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* profile info update section */}
                <form className="space-y-12">
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="email" className="text-start block mb-2 text-sm">Email address</label>
                            <input defaultValue={email} readOnly type="email" name="email" id="email" placeholder="" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                        </div>
                        <div>
                            <label htmlFor="username" className="text-start block mb-2 text-sm">User Name</label>
                            <input defaultValue={displayName} type="text" name="userName" id="userName" placeholder="" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                        </div>
                        <div>
                            <label htmlFor="email" className="text-start block mb-2 text-sm">Photo Url</label>
                            <input defaultValue={photoURL} type="text" name="photoUrl" id="photoUrl" placeholder="" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                        </div>

                        <div>
                            <label htmlFor="password" className="text-start block mb-2 text-sm">Password</label>
                            <input type="password" name="password" id="password" placeholder="********************" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <button type="button" className="w-full px-8 py-3 font-semibold rounded-md bg-violet-600 text-gray-50">Update User</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Profile;