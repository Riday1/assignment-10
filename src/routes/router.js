import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ErrorPage from "../Pages/ErrorPage";
import Login from "../components/Login";
import Courses from "../components/Courses";
import Profile from "../Profile/Profile";
import Register from "../components/Register";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import CourseDetails from '../components/CourseDetails'
import Checkout from "../components/Checkout";
import Home from "../Pages/Home";
import PrivateRoute from "./PrivateRoute";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,

            },
            {
                path: '/courses',
                loader: () => fetch(`https://tech-tutor-server-red.vercel.app/courses`),
                element: <Courses></Courses>
            },
            {
                path: '/categories/:id',
                loader: ({ params }) => fetch(`https://tech-tutor-server-red.vercel.app/categories/${params.id}`),
                element: <Courses></Courses>
            },
            {
                path: '/course-details/:id',
                loader: ({ params }) => fetch(`https://tech-tutor-server-red.vercel.app/course-details/${params.id}`),
                element: <CourseDetails></CourseDetails>
            },

            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/profile',

                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            },
            {
                path: '/checkout/:id',
                loader: ({ params }) => fetch(`https://tech-tutor-server-red.vercel.app/course-details/${params.id}`),
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },

        ]
    }
])