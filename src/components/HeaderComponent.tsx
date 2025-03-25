import React from 'react';
import {Link, NavLink} from "react-router-dom";

const HeaderComponent = () => {
    return (
        <div>
            {/*при кліку додається class = active який можна стилізувати*/}
            <NavLink to={'/'}>home</NavLink>
            <br/>
            <Link to={'/users'}>users</Link>
            <hr/>
        </div>
    );
};

export default HeaderComponent;