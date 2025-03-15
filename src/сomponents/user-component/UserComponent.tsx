import React, {FC} from 'react';
import {IUserModel} from "../../models/basic-models/IUserModel";

interface IProps {
    user: IUserModel
    getToDo: (id: number) => void
}


const UserComponent:FC<IProps> = ({user, getToDo}) => {
    return (
        <div>
            <div>id: {user.id}</div>
            <div>{user.firstName}{user.lastName}</div>
            <div>{user.email}</div>
            <div>age: {user.age}</div>
            <button onClick={() =>{
                getToDo(user.id)
            }}>show todos</button>
            <hr/>
        </div>
    );
};




export default UserComponent;