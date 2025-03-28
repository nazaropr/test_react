import React, {FC} from 'react';
import {IUserModel} from "../Models/IUserModel";
import {Link, useNavigate} from "react-router-dom";

interface IProps {
    user: IUserModel;
}

const UserComponent:FC<IProps> = ({user}) => {
    const navigate = useNavigate();
    return (
        <div>
            <Link to={user.id.toString()} >Name: {user.name}</Link>
            {/*другий варіант передавати через state статичні дані з використанням хука useLocation*/}
            <Link to={user.id.toString()} state={{foo:'bar'}}>Name: {user.name}</Link>

        {/*  або таке саме через button що дає більше гнучкості використання хука useNavigate і перехоплюєм через useLocation */}

            <button onClick={()=>{
                navigate(user.id.toString(), {state: {foobar: 'fooo'}});
            }}>show posts</button>
        </div>

    );
};

export default UserComponent