import React, {useEffect, useState} from 'react';
import './App.css';
import {Outlet} from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import {Context, defaultValue} from "./context/ContextProvider";
import {postService, userService} from "./services/api.service";
import {IUserModel} from "./models/IUserModel";
import {IPostModel} from "./models/IPostModel";


const App = () => {

    let [users, setUsers] = useState<IUserModel[]>([]);
    let [posts, setPosts] = useState<IPostModel[]>([]);

    useEffect(() => {
        userService.getUsers().then(value => setUsers(value.data))
        postService.getPosts().then(value => setPosts(value.data))
    }, []);


    return (
      <div>
        <HeaderComponent/>
          <Context.Provider value={{
              userStore:{
                  allUsers: users
              },
              postStore:{
                allPosts: posts
              }
          }}>
              <Outlet/>
          </Context.Provider>
      </div>
  );
};

export default App;