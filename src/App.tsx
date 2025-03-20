import React, {memo, useState} from 'react';
import logo from './logo.svg';
import './App.css';


// memo() зупиняє ре-рендеринг компоненти, яку обгорнуто в нього
const A = memo(() => {
    console.log('Hello from A component');
    return (
        <div>hello from A component</div>
    )
})


const App = () => {
  console.log('Hello from App component');
  let [count, setCount] = useState(0);
    return (
      <div>
        <A></A>
          <button onClick={()=>{
              setCount(count + 1);
          }}>render</button>
      </div>
  );
};

export default App;