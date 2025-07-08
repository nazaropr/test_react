import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Outlet} from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";


const App = () => {


    return (
      <div>
        <HeaderComponent/>
          <Outlet/>
      </div>
  );
};

export default App;