import React, {FC} from 'react';
import {ICommentModel} from "../../Models/ICommentModel";

interface ICommentsProps {
    comments: ICommentModel[];
}

const CommentsComponent:FC<ICommentsProps> = ({comments}) => {
    return (
        <div>
            {comments.map((comment: ICommentModel) => (<li key={comment.id}>{comment.body}</li>))}
        </div>
    );
};

export default CommentsComponent;