import React from 'react';
import {
    createBrowserRouter,
} from "react-router-dom";
import ErrorPage from './screens/errorpage';
import Register from './screens/register';
import Login from './screens/login';
import MiniDrawer from './screens/home';

const router = createBrowserRouter([
    {
        path: "/",
        errorElement:<ErrorPage/>,
        children:[
            {
                path: "",
                children: [
                    {
                        path: "",
                        element: <Login />
                    },
                    {
                        path:"register",
                        element: <Register/>,
                    },
                    {
                        path: "home",
                        element: <MiniDrawer/>,
                    },
                ]
            },            
            
        ]
    },
  ]);

export {router}