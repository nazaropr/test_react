import React, {FC} from 'react';
import {IUserModel} from "../../models/IUserModel";
import {useContextProvider} from "../../context/ContextProvider";

interface IProps {
    user:IUserModel
}

const UserComponent:FC<IProps> = ({user}) => {
    const {userStore: {setFavorite}} = useContextProvider();
    return (
        <div>
            {
                user.id
            }{user.username}<button onClick={()=>{
                setFavorite(user)
        }}>set as favorite</button>
        </div>
    );
};

export default UserComponent;