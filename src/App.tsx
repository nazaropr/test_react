import React from 'react';
import logo from './logo.svg';
import './App.css';
import { decrement, increment, useAppDispatch, useAppSelector} from "./redux/store";


const App = () => {

    const {value} = useAppSelector(store => store.slice1);
    
    const dispatch = useAppDispatch();
    return (
      <div>
          <h1>{value}</h1>
          <button onClick={()=> {
            dispatch(increment(100));
          }}>increment</button>
          <button onClick={()=> {
            dispatch(decrement())
          }}
          >decrement</button>
      </div>
  );
};

export default App;