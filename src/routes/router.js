import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ErrorPage from "../components/ErrorPage";
import Login from "../components/Login";
import Courses from "../components/Courses";
import Profile from "../Profile/Profile";
import Register from "../components/Register";



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
                path: '/courses',
                element: <Courses></Courses>
            },
            {
                path: '/profile',
                element: <Profile></Profile>
            },
            {
                path: '/courses',
                element: <Courses></Courses>
            }
        ]
    }
])