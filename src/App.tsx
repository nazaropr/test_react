import React, {useEffect, useState} from 'react';
import './App.css';
import {Outlet} from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import {postService, userService} from "./services/api.service";
import {useStore} from "./context/ContextProvider";


const App = () => {

    let {userStore: {loadUsers, favoriteUser}, postStore:{loadPosts}} = useStore();

    useEffect(() => {
        userService.getUsers().then(value => loadUsers(value.data));
        postService.getPosts().then(value => loadPosts(value.data));
    }, []);

    return (
      <div>
          <HeaderComponent/>
          <Outlet/>
          <hr/>
            {favoriteUser && <div>{favoriteUser.email}</div>}
          <hr/>
      </div>
  );
};

export default App;