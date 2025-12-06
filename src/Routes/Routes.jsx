import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayout from '../Layouts/MainLayout';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';
import ErrorPage from '../Pages/ErrorPage';
import Pets from '../Pages/Pets';


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
                path: '/pets-supplies', 
                Component: Pets,
            }, 
            {
                path: '*', 
                Component: ErrorPage,
            }, 
        ]
    }
])

export default router;