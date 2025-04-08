import React from 'react';
import {Outlet} from "react-router-dom";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";

const MainLayout = () => {
    return (
        <div>
            main layout
            <HeaderComponent/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;