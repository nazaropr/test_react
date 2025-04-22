import {IUserModel} from "./IUserModel";
import {IPostModel} from "./IPostModel";

export type UsersWithPostsModel = IUserModel & { posts: IPostModel[] };