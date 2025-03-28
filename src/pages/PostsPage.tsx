import React, {useEffect, useState} from 'react';
import {Outlet, useLocation, useParams} from "react-router-dom";
import PostsComponent from "../components/PostsComponent";
import {IPostModel} from "../Models/IPostModel";
import {userService} from "../services/jph.api.service";

const PostsPage = () => {

    let {id} = useParams();
    console.log(id);

    // використовуєтся в парі з state тобто через state передаються статичні дані і ми відловлюємо їх за допомогою useLocation
    let us = useLocation();
    console.log(us);

    let [posts, setPosts] = useState<IPostModel[]>([]);

    useEffect(() => {
        if (id){
            userService.getUserPosts(id).then(value => setPosts(value.data));
        }
    }, [id])

    return (
        <div>
            <PostsComponent posts={posts}/>
        </div>
    );
};

export default PostsPage;