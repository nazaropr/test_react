import React from 'react';
import {Link} from "react-router-dom";

const HeaderComponent = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to={'/'}>home</Link>
                </li>
                <li>
                    <Link to={'users'}>users</Link>
                </li>
                <li>
                    <Link to={'posts'}>posts</Link>
                </li>
                <li>
                    <Link to={'/userPosts'}>usersPost</Link>
                </li>
            </ul>

        </div>
    );
};

export default HeaderComponent;