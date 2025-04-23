import React from 'react';
import UserComponent from "../UserComponent/UserComponent";
import {useStore} from "../../context/ContextProvider";

const UsersComponent = () => {
    const {userStore:{allUsers}} = useStore();
    return (
        <div>
            {
                allUsers.map((user) => (<UserComponent key={user.id} user={user}/>))
            }
        </div>
    );
};

export default UsersComponent;