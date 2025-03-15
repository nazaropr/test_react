import {IUserModel} from "../basic-models/IUserModel";

export interface IUsersResponseModel {
    limit: number;
    skip: number;
    total: number;
    users: IUserModel[]
}