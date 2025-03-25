import axios, {AxiosResponse} from "axios";
import {IProps} from "../components/FormComponent";
import {IPostModel} from "../models/postResponse";

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: { 'Content-Type': 'application/json;  charset=UTF-8' },
})

// перш ніж дані дійдуть на api ми можемо їх перехопити і модифікувати
axiosInstance.interceptors.request.use(request => {
    console.log('interceptor: ', request);
    request.headers.set({xxx: 'foobar'});
    return request;
})

const postService = {
    getAll: () => {
      return axios.get('/posts')
    },
    savePost: (post:IProps): Promise<AxiosResponse<IPostModel>> => {
        return axiosInstance.post('/posts', post)
    }
}

export{
    postService
}