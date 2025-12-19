import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayout from '../Layouts/MainLayout';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';
import ErrorPage from '../Pages/ErrorPage';
import Services from '../Pages/Services';
import Profile from '../Pages/Profile';
import PrivateRoute from './PrivateRoute';
import ServiceDetails from '../Pages/ServiceDetails';
import ForgetPass from '../Pages/ForgetPass';


const router = createBrowserRouter([
    {
        path: '/', 
        Component: MainLayout, 
        children: [
            {
                path: '/', 
                Component: Home,
            }, 
            {
                path: '/home', 
                Component: Home,
            }, 
            {
                path: '/login', 
                Component: Login,
            }, 
            {
                path: '/signup', 
                Component: Signup,
            }, 
            {
                path: '/profile', 
                element: <PrivateRoute><Profile></Profile></PrivateRoute>,
            }, 
            {
                path: '/pets-supplies', 
                Component: Services,
            }, 
            {
                path: '/details/:id', 
                element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
            }, 
            {
                path: '*', 
                Component: ErrorPage,
            }, 
            {
                path: '/forget/:email', 
                Component: ForgetPass,
            }
        ]
    }
])

export default router;