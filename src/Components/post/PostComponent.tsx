import React, {FC} from 'react';
import {IPostModel} from "../../Models/IPostModel";

interface IProps {
    post: IPostModel;
}

type IPropsType = IProps & {children?: React.ReactNode} & {lift?: (postId: number) => void};

const PostComponent:FC<IPropsType> = ({post, lift}) => {
    const onClickHandler = () => {
        if (lift){
            lift(post.id);
        }
    }

    return (
        <div>
            {post.id} {post.title}
            {/*<p>{post.body}</p>*/}
            <button onClick={onClickHandler}>show comments to post</button>

            <hr/>
        </div>
    );
};

export default PostComponent;