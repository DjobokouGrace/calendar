import React from 'react';
import {
    createBrowserRouter,
} from "react-router-dom";
import ErrorPage from './screens/errorpage';
import Register from './screens/register';
import Login from './screens/login';
import Home from './screens/home';
import Classrooms from './components/Classrooms';
import Calendar from './components/Calendar';
import Practicals from './components/Practicals';
import Exams from './components/Exams';
import Courses from './components/Courses';
import Timetable from './components/Timetable';

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
                        element: <Home/>,
                        children: [
                            {
                                path: "timetable", 
                                element: <Timetable />
                            },
                            {
                                path: "courses", 
                                element: <Courses />
                            },
                            {
                                path: "exams", 
                                element: <Exams />
                            },
                            {
                                path: "practicals", 
                                element: <Practicals />
                            },
                            {
                                path: "classrooms", 
                                element: <Classrooms />
                            },
                            {
                                path: "calendar",
                                element: <Calendar />
                            }
                        ]
                    },
                    
                ]
            },            
            
        ]
    },
  ]);

export {router}