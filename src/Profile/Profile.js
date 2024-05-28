import React, { useContext, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';



const Profile = () => {
    const { user, updateUser, changePassword } = useContext(AuthContext);
    const { displayName, uid, email, photoURL } = user;

    const [name, setName] = useState(displayName);
    const [url, setUrl] = useState(photoURL);

    const handleNameChange = (e) => {
        setName(e.target.value)
    }
    const handleUrlChange = (e) => {
        setUrl(e.target.value)
    }

    const handleClick = (name, url) => {

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.userName.value
        const photoUrl = form.photoUrl.value;
        const password = form.password.value;
        updateUser(name, photoUrl)
            .then(() => {
                Swal.fire({
                    title: "Profile Updated",
                    text: "",
                    icon: "success"
                });
            })
        changePassword(password)
            .then(() => {

            })
            .catch(e => console.error(e))


    }

    return (

        <div className="flex flex-col sm:max-w-md md:max-w-3xl   p-6 rounded-xl sm:p-10 bg-gray-50 dark:text-gray-800 shadow-md mx-auto mt-20">
            {/* profile picture + name section */}
            <div className="mb-8 text-center">
                <div className="flex flex-col justify-center  p-6  sm:px-12  text-gray-800 mx-auto">
                    <img src={photoURL} alt="" className="w-44 h-40 mx-auto rounded-full bg-gray-500 aspect-square ring-2 ring-offset-4 ring-violet-600" />
                    <div className="space-y-4 text-center divide-y divide-gray-300">
                        <div className="my-2 space-y-1">
                            <h2 className="text-xl font-semibold sm:text-2xl">{displayName}</h2>
                            <p className="px-5 font-semibold text-md sm:text-base text-gray-600">ID: {uid}</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* profile info update section */}
            <form onSubmit={handleSubmit} noValidate="" action="" className="space-y-6">
                <div>
                    <label htmlFor="email" className="text-start block mb-2 text-sm">Email address</label>
                    <input defaultValue={email} readOnly type="email" name="email" id="email" placeholder="" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                </div>
                <div>
                    <label htmlFor="userName" className="text-start block mb-2 text-sm">User Name</label>
                    <input defaultValue={name} type="text" name="userName" id="userName" placeholder="" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                </div>
                <div>
                    <label htmlFor="photoUrl" className="text-start block mb-2 text-sm">Photo Url</label>
                    <input defaultValue={url} type="text" name="photoUrl" id="photoUrl" placeholder="" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                </div>
                <div>
                    <label htmlFor="password" className="text-start block mb-2 text-sm">Password</label>
                    <input type="password" name="password" id="password" placeholder="********************" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                </div>

                <input className='w-full px-8 py-3 font-semibold rounded-md bg-violet-600 text-gray-50 cursor-pointer' type="submit" value="Update User Info" />

            </form>
        </div>

    );
};

export default Profile;