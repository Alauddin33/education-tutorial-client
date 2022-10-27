import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Login from "../../Login/Login";
import Blog from "../../Pages/Blog/Blog/Blog";
import Courses from "../../Pages/Courses/Courses/Courses";
import Home from "../../Pages/Home/Home/Home";
import Register from "../../Register/Register";
import Details from "../../Pages/Details/Details/Details";

import PrivateRoute from "./PrivateRoute";
import Cards from "../../Pages/Cards/Cards/Cards";
import Errorpage from "../../Pages/Errorpage/Errorpage";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch('https://education-tutorial-server.vercel.app/courses')
            },
            {
                path: '/details/:id',
                element: <PrivateRoute><Details></Details></PrivateRoute>,
                loader: ({ params }) => fetch(`https://education-tutorial-server.vercel.app/details/${params.id}`)

            },
            {
                path: '/details/:id/cards/:id',
                element: <PrivateRoute><Cards></Cards></PrivateRoute>,
                loader: ({ params }) => fetch(
                    `https://education-tutorial-server.vercel.app/details/${params.id}/cards/${params.id}`
                )
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: '/error',
        element: <Errorpage></Errorpage>
    }
])