import React from 'react';
import {
    createBrowserRouter,
} from "react-router-dom";
import ErrorPage from './screens/errorpage';
import Login from './screens/login';
import Home from './screens/home';
import Classrooms from './components/Classrooms';
import Calendar from './components/Calendar';
import Practicals from './components/Practicals';
import Exams from './components/Exams';
import Courses from './components/Courses';
import Timetable from './components/Timetable';
import RegisterProfessor from './screens/register_prof';
import RegisterStudent from './screens/register_student';


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