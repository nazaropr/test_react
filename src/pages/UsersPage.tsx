import React, {useEffect} from 'react';
import UsersComponent from "../components/UsersComponent";
import {useAppDispatch} from "../redux/store";
import {userActions} from "../redux/slice/userSlice";

const UsersPage = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(userActions.loadUsers());
    }, []);
    return (
        <div>
            <UsersComponent/>
        </div>
    );
};

export default UsersPage;