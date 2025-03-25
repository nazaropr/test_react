import React, {FC, useState} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {postValidator} from "../validators/post.validator";
import {postService} from "../services/jsp.api.service";
import {IPostModel} from "../models/postResponse";

export interface IProps {
    title: string;
    body: string;
    userId: string;
}

const FormComponent:FC = () => {

    const {register, handleSubmit, formState:{errors}} = useForm<IProps>({mode:'all', resolver:joiResolver(postValidator)})

    const [newPost, setNewPost] = useState<IPostModel | null>(null);

    const save = (formData:IProps) => {
        postService.savePost(formData).then(res => setNewPost(res.data))

    };
    return (
        <div>
            <form onSubmit={handleSubmit(save)}>
                <label> userId:
                    <input type="number"{...register('userId')}/>
                </label>
                {
                    errors.userId && <div>{errors.userId.message}</div>
                }
                <br/>
                <label>
                    title:
                    <input type="text"{...register('title')}/>
                    {
                        errors.title && <div>{errors.title.message}</div>
                    }
                </label>
                <br/>
                <label>
                    body:
                    <input type="text"{...register('body')}/>
                    {
                        errors.body && <div>{errors.body.message}</div>
                    }
                </label>
                <br/>
                <button>submit</button>
            </form>
            {
                newPost && <div>{newPost.title} {newPost.body}</div>
            }
        </div>
    );
};

export default FormComponent;