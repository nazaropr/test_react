import React, {FC, memo, useCallback, useState} from 'react';
import logo from './logo.svg';
import './App.css';


// в компоненту передається функція, при кліку на кнопку не буде спрацьовувати мемо бо кожен раз передається новий об'єкт
const A:FC<any> = memo(({foobar}) => {
    console.log('Hello from A component');
    foobar();
    return (
        <div>hello from A component</div>
    )
})


const App = () => {
  console.log('Hello from App component');
  let [count, setCount] = useState(0);

  // при кліку на кнопку в нас встановлюється нове значення в count відповідно компонента перередерюється і так само перестворюється констента функції foobar тобто
  //   абсолютно новий об'єкт з новою коміркою в пам'яті компонента A бачить що в пропсу заходить новий об'єкт і відповідно робить рендеринг по новій

    // const foobar = () =>{
  //
  // }
  const foobar = useCallback(()=>{

  }, []);
    return (
      <div>
        <A foobar={foobar}></A>
          <button onClick={()=>{
              setCount(count + 1);
          }}>render</button>
      </div>
  );
};

export default App;