import About from '@/components/about/About';
import { Layout } from '@/Layout';
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './home/Home';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/", 
                element: <Home/>
            },
            {
                path: "/about",
                element: <About/>
            }
        ],
    },
]);