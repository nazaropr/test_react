import axios, {AxiosResponse} from "axios";
import {json} from "node:stream/consumers";
import {IPostModel} from "../Models/IPostModel";
import {ICommentModel} from "../Models/ICommentModel";

let axiosInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: {'content-type': 'application/json; charset=UTF-8'}
})

const getAllPosts = ():Promise<AxiosResponse<IPostModel[]>> => {
    return axiosInstance.get("/posts");
}

const getAllCommentsOfSinglePost = (id: number):Promise<AxiosResponse<ICommentModel[]>> => {
    return axiosInstance.get(`/comments?postId=${id}`);
}

export {
    getAllPosts,
    getAllCommentsOfSinglePost
};