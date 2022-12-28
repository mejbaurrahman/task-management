import { createBrowserRouter } from "react-router-dom";
import AddTask from "../Pages/AddTask/AddTask";
import CompletedTask from "../Pages/CompletedTask/CompletedTask";
import Main from "../Pages/Main/Main";
import MyTask from "../Pages/MyTask/MyTask";

const router = createBrowserRouter([{
    path:'/',
    element:<Main></Main>,
    children: [
        {
            path:'/',
            element:<AddTask></AddTask>
        },
        {
            path:'/mytask',
            element:<MyTask></MyTask>
        },
        {
            path:'/completedTask',
            element:<CompletedTask></CompletedTask>
        },

    ]
}])