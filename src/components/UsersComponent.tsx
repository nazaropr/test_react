import React, {FC, useEffect, useState} from 'react';
import {IUserModel} from "../Models/IUserModel";
import {userService} from "../services/jph.api.service";

const UsersComponent:FC = () => {


   let [users, setUsers] = useState<IUserModel[]>([]);
    useEffect(() => {
        userService.getAllUsers().then(value => setUsers(value.data))
    }, []);

    return (
        <div>
            {users.map((user:IUserModel) => (<div key={user.id}>
                <h1>Name: {user.name}</h1>
                <br/>
                <h2>Username: {user.username}</h2>
                <br/>
                <h3>ID: {user.id}</h3>
                <hr/>
            </div>))}
        </div>
    );
};

export default UsersComponent;