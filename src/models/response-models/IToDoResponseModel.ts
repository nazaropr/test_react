import {IToDoModel} from "../basic-models/IToDoModel";

export interface IToDoResponseModel{

    todos: IToDoModel[]
    total: number,
    skip: number,
    limit: number

}