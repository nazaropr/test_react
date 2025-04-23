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
    let [favoriteUserState, setFavoriteUserState] = useState<IUserModel | null>(null);

    useEffect(() => {
        userService.getUsers().then(value => setUsers(value.data))
        postService.getPosts().then(value => setPosts(value.data))
    }, []);

    const lift = (obj:IUserModel) => {
        setFavoriteUserState(obj);
    }



    return (
      <div>
          <Context.Provider value={{
              userStore:{
                allUsers: users,
                  setFavorite: (obj:IUserModel)=> lift(obj)
              },
              postStore:{
                allPosts: posts
              }
          }}>
              <HeaderComponent/>
              <Outlet/>
          </Context.Provider>
          <hr/>
            {favoriteUserState && <div>{favoriteUserState.email}</div>}
          <hr/>
      </div>
  );
};

export default App;