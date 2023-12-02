import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayOut from "../layout/MainLayOut";
import Home from "../pages/Home/Home";
import Login from "../authentication/Login";
import SingUp from './../authentication/SingUp';
import Services from "../pages/Home/Home/Services";
import Contact from "../pages/Home/Home/Contact";
import AboutUs from "../pages/Home/Home/AboutUs";
import ErrorPage from "../pages/ErrorPage";
import Dashboard from "../layout/Dashboard";
import PrivateRoute from "./PrivatRoute";
import AllUsers from "../pages/Dashboard/Pages/AllUsers";
import AllEmployee from "../pages/Dashboard/Pages/AllEmployee";
import Details from "../pages/Dashboard/Pages/Details";

  const router = createBrowserRouter([
    {
      path: "/",
      element:<MainLayOut></MainLayOut>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path:'singup',
          element:<SingUp></SingUp>
        },
        {
          path:'about',
          element:<AboutUs></AboutUs>
        },
        {
          path:'services',
          element:<Services></Services>
        },
        {
          path:'contact',
          element:<Contact></Contact>
        },
      ]
    },
    {
      path: 'dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        {
          path: 'users',
          element:<AllUsers></AllUsers>
        },
        {
          path: 'employee',
          element: <AllEmployee></AllEmployee>,
          children: [
            {
              path: 'details',  
              element: <Details></Details>
            }
          ]
        },
      ]
    },
  ]);

  export default router;