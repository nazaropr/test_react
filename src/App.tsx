import React from 'react';
import './App.css';
import {useFetch} from "./customHooks/useFetch";
import {IUserModel} from "./models/IUserModel";

const App = () => {


    //показово, можна хук використовувати для різних моделей !!!!!
    let data1 = useFetch<IUserModel[]>('/users' ,[]);
    let data = useFetch<IUserModel[]>('/posts' ,[]);

    return (
        <div>
            {
                data.map((item: any, index: number) => (
                        <div key={item.id}>
                            <div >{item.id} {item.title}</div>
                        </div>
                    )
                )
            }
            {
                data1.map((item: any, index: number) => (
                        <div key={item.id}>
                            <div >{item.id} {item.username}</div>
                        </div>
                    )
                )
            }
        </div>
    );
};

export default App;