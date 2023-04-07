import React from 'react';
import {
    createBrowserRouter,
} from "react-router-dom";
import ErrorPage from './screens/errorpage';
import Login from './screens/login';
import MiniDrawer from './screens/home';
import RegisterStudent from './screens/register_student';
import RegisterProfessor from './screens/register_prof';

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
                        path:"register/",
                        element: <RegisterStudent/>,
                    },
                    {
                        path:"register/professor",
                        element: <RegisterProfessor/>,
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