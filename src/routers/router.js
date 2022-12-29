import { createBrowserRouter } from "react-router-dom";
import AddTask from "../Pages/AddTask/AddTask";
import CompletedTask from "../Pages/CompletedTask/CompletedTask";
import Login from "../Pages/Login/Login";
import Main from "../Pages/Main/Main";
import MyTask from "../Pages/MyTask/MyTask";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([{
    path:'/',
    element:<PrivateRoute><Main></Main></PrivateRoute>,
    children: [
        {
            path:'/',
            element:<PrivateRoute><AddTask></AddTask></PrivateRoute>
        },
        {
            path:'/mytask',
            element:<PrivateRoute><MyTask></MyTask></PrivateRoute>
        },
        {
            path:'/completeTask',
            element:<PrivateRoute><CompletedTask></CompletedTask></PrivateRoute>
        },

    ]
},

{
    path:'/login',
    element:<Login></Login>
},
{
    path:'/signup',
    element:<SignUp></SignUp>
}

])