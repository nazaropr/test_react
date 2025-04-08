import axios, {AxiosError} from "axios";
import {AuthModel} from "../models/AuthModel";
import {ITokenObtainPair} from "../models/ITokenObtainPair";
import {retriveLocalStorageData} from "./helpers/helpers";
import {ICarPaginatedModel} from "../models/ICarPaginatedModel";

const axiosInstance = axios.create({
   baseURL: 'http://owu.linkpc.net/carsAPI/v2',
    headers:{}
});

axiosInstance.interceptors.request.use((request)=>{
            if(localStorage.getItem('tokenPair') && (request.url !== '/auth' && request.url !== '/auth/refresh')){
        const ITokenObtainPair = retriveLocalStorageData<ITokenObtainPair>('tokenPair');
        request.headers.set('Authorization', 'Bearer ' + ITokenObtainPair.access);
    }


    return request;
})

const authService = {
    authenticate: async (authData: AuthModel): Promise<boolean> => {
        console.log(authData);
        let response;
        try {
            response = await axiosInstance.post<ITokenObtainPair>('/auth', authData);
            localStorage.setItem('tokenPair', JSON.stringify(response.data));
        }catch (e) {
            console.error(e);
        }
        return !!(response?.data?.access && response?.data?.refresh);
    },
    refresh: async (refreshToken: string) => {
        const response = axiosInstance.post<ITokenObtainPair>('/auth/refresh', {refresh: refreshToken});
        localStorage.setItem('tokenPair', JSON.stringify(response));
    }
}

const carService = {
    getAllCars: async (page: string) => {
        try {
            const response = await axiosInstance.get<ICarPaginatedModel>('/cars', {params: {page: page}});
            return response.data;
        }catch (e) {
            const axiosError = e as AxiosError;
            if (axiosError?.response?.status === 401){
                const refreshToken = retriveLocalStorageData<ITokenObtainPair>('tokenPair').refresh;
                if (!refreshToken){
                    console.log('refresh doesnt exist, please auth');
                    return
                }
                await authService.refresh(refreshToken);
                await carService.getAllCars(page);
            }
        }


    }
}

export {
    authService,
    carService
}