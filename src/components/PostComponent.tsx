import React, {FC} from 'react';
import {IPostModel} from "../Models/IPostModel";

interface IProps {
    post: IPostModel
}

const PostComponent:FC<IProps> = ({post}) => {
    return (
        <div>
            <p>userId: {post.userId}</p>
            <h3>Id: {post.id}</h3>
            <h1>title: {post.title}</h1>
            <h2>body: {post.body}</h2>
            <hr/>
        </div>
    );
};

export default PostComponent;