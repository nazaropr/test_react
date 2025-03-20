import React, {FC, memo, useCallback, useMemo, useState} from 'react';
import logo from './logo.svg';
import './App.css';

//ситуація як з useCallback тільки тут ми передаємо об'єкт
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

  const foobar = useCallback(()=>{

  }, []);

  //створює стале посилання для об'єкта щоб не перемальовувалась компонента A, в deps ([]) можна передати змінну за якою
  //   буде слідкувати useMemo і при зміні, робити рендеринг по новій
  const arr = useMemo(() => {
      return [];
  },[])

    return (
      <div>
        <A foobar={foobar} arr={arr}></A>
          <button onClick={()=>{
              setCount(count + 1);
          }}>render</button>
      </div>
  );
};

export default App;