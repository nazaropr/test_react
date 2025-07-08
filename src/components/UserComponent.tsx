import React from 'react';
import {IUser} from "../models/IUser";
import {useNavigate} from "react-router-dom";

interface IProps {
    user: IUser;
}

const UserComponent = ({user}:IProps) => {
    let navigate = useNavigate();
    return (
        <div>
            {user.id} : {user.name}
            <button onClick={()=>{
                navigate(user.id.toString());
            }}>click</button>
        </div>
    );
};

export default UserComponent;