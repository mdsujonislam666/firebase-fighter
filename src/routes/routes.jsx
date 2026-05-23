import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/mainLayout";
import HomePage from "../page/HomePage";
import AboutUs from "../page/AboutUs";
import Profile from "../page/Profile";
import Signup from "../page/Signup";
import Signin from "../page/Signin";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children:[
            {
                index: true,
                element: <HomePage></HomePage>
            },
            {
                path: "/aboutUs",
                element: <AboutUs/>
            },
            {
                path: "/profile",
                element: <Profile></Profile>
            },
            {
                path: "/signup",
                element: <Signup/>
            },
            {
                path: "/signin",
                element: <Signin/>
            }
        ]
    }
])