import React from 'react';
import logo from './logo.svg';
import './App.css';
import A from "./components/A";


const App = () => {
  return (
      <div>
        <A foobar={'ololo'} />
      </div>
  );
};

export default App;