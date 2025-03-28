import React, {FC, useEffect, useState} from 'react';
import {IUserModel} from "../Models/IUserModel";
import {userService} from "../services/jph.api.service";
import UserComponent from "./UserComponent";

const UsersComponent:FC = () => {


   let [users, setUsers] = useState<IUserModel[]>([]);
    useEffect(() => {
        userService.getAllUsers().then(value => setUsers(value.data))
    }, []);

    return (
        <div>
            {users.map((user:IUserModel) => (<UserComponent key={user.id} user={user}/>))}
        </div>
    );
};

export default UsersComponent;