import React from 'react';
import './App.css';

// useRef зберігає значення змінної але не виконує перерендеринг сторінки при зміні значення змінної
// (в порівнянні з useState)
//
const App = () => {

  const [x, setX] = React.useState(0);
  const y = React.useRef(0)

    return (
        <>

            <button onClick={() => {
                setX((x) => x + 1)
            }}>change x {x}</button>

            <button onClick={() => {
                y.current++
            }}>change y {y.current}</button>

        </>
    );
};

export default App;