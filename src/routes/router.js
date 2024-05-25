import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ErrorPage from "../components/ErrorPage";
import Login from "../components/Login";
import Courses from "../components/Courses";
import Profile from "../Profile/Profile";
import Register from "../components/Register";
import Blog from "../components/Blog";
import Contact from "../components/Contact";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },

            {
                path: '/profile',
                element: <Profile></Profile>
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
            }
            ,

            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            }

        ]
    }
])