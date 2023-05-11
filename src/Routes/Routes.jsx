import {
    createBrowserRouter,
   
  } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import LogInLayout from "../layout/LogInLayout";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/sign-up/SignUp";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
    //   errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
    {
      path: "/login",
      element:<LogInLayout></LogInLayout>,
    //   errorElement: <ErrorPage />,
      children: [
        {
          path: "/login",
          element: <Login></Login>,
        },
       
      ],
    },
    {
      path: "/signup",
      element:<LogInLayout></LogInLayout>,
    //   errorElement: <ErrorPage />,
      children: [
        {
          path: "/signup",
          element: <SignUp></SignUp>,
        },
       
      ],
    },
  ]);

  export default router;