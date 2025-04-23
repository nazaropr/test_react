import React from 'react';
import PostComponent from "../PostComponent/PostComponent";
import {useStore} from "../../context/ContextProvider";

const PostsComponent = () => {
    const {postStore:{allPosts}} = useStore();
    return (
        <div>
            {allPosts.map((post) => (<PostComponent post={post} key={post.id}/>))}
        </div>
    );
};

export default PostsComponent;