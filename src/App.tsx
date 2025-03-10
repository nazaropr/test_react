import React, {useEffect} from 'react';
import './App.css';


const App = () => {
    let [counter, setCounter] = React.useState<number>(0);
    let [x, setX] = React.useState<number>(0);

    useEffect(() => {
        setTimeout(()=>{
            setCounter(counter + 1);
        },2000)
        return () => {console.log('.........useEffect callback')}
    }, [x]);
console.log('.');

    return (
      <div>

          <h2>{counter}</h2>
          <button onClick={()=>{
              setX(x=> x+1);
          }}>click</button>
      </div>
  );
};

export default App;