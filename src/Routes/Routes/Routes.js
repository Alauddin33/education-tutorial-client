import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Login from "../../Login/Login";
import Home from "../../Pages/Home/Home/Home";
import Register from "../../Register/Register";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/register',
        element: <Register></Register>
    }
])