import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import React from "react";
import HomePage from "../pages/HomePage";
import UsersComponent from "../components/UsersComponent";

export const routerConfig = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement: <h2>wtf are you doing maaaan????</h2>,
        children: [/*child is outlet in layout*/
            {index: true, element: <HomePage/>},/* index: true для відображення початкової сторінки*/
            {path:'users', element: <UsersComponent/>}
        ]
    },
    // { path: '/okten', element: <h3>okten sucks</h3> },
]);
