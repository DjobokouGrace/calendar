const router = createBrowserRouter([
    {
        path: "/",
        //element: <Root/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path: "",
                element: <React.Suspense fallback="loading"><Root/></React.Suspense>,
                children: [
                    {
                        path: "",
                        element: <Login />
                    },
                    {
                        path:"register",
                        element: <Groupe/>,
                    },
                    {
                        path: "home",
                        element: <Services/>,
                    },
                   
                ]
            },  
        ]
    },
  ]);

export {router}