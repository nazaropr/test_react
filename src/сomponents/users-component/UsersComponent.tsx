import React, {useState, useEffect, FC} from 'react';
import {getAllUsers} from "../../services/users.api.service";
import {IUserModel} from "../../models/basic-models/IUserModel";
import {IUsersResponseModel} from "../../models/response-models/IUsersResponseModel";
import UserComponent from "../user-component/UserComponent";

interface IProps {
    getToDo: (id:number)=>void
}

const UsersComponent:FC<IProps> = ({getToDo}) => {

    let [users, setUsers] = useState<IUserModel[]>([]);

    useEffect(() => {
        getAllUsers().then((data: IUsersResponseModel) => {
            setUsers([...data.users])
        });
    }, []);

    return (
        <div>
            {users.map((user) => (
                <UserComponent key={user.id}
                               user={user}
                               getToDo={getToDo}
                />
            ))}
        </div>
    );
};

export default UsersComponent;