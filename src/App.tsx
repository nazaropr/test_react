import React, {useState} from 'react';
import './App.css';
import UsersComponent from "./сomponents/users-component/UsersComponent";
import ToDosComponent from "./сomponents/todos-component/ToDosComponent";


const App = () => {

    let [userId, setUserId] = useState<number>(0);

    const getToDo = (id:number):void => {
        setUserId(id)
    }

    return (
      <div>
        <UsersComponent getToDo={getToDo}></UsersComponent>
          {
              !!userId && <ToDosComponent userId={userId}/>
          }
      </div>
  );
};

export default App;