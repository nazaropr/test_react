import axios, {AxiosResponse} from "axios";
import {IUserModel} from "../Models/IUserModel";
import {IPostModel} from "../Models/IPostModel";

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {'Content-Type': 'application/json;  charset=UTF-8'},
})

const userService = {
    getAllUsers: ():Promise<AxiosResponse<IUserModel[]>> => {
        return axiosInstance.get(`/users`)
    },
    getUserPosts: (userId:string): Promise<AxiosResponse<IPostModel[]>> => {
        return axiosInstance.get(`/users/${userId}/posts`)
    }
}

export {
    userService
}