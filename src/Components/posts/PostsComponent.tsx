import React, {FC, useEffect} from 'react';
import PostComponent from "../post/PostComponent";
import {IPostModel} from "../../Models/IPostModel";
import {getAllPosts} from "../../Services/jps.api.service";

type IPropsPosts = {lift?: (postId:number) => void}

const PostsComponent:FC<IPropsPosts> = ({lift}) => {
    const [posts, setPosts] = React.useState<IPostModel[]>([]);

    useEffect(() => {
        getAllPosts().then(({data}) => setPosts(data));
    }, [])

    return (
        <div>
            {posts.map((post) => (
                <PostComponent key={post.id} post={post} lift={lift} />
            ))}
        </div>
    );
};

export default PostsComponent;