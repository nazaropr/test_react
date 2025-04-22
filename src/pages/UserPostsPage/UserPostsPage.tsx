import React, {useEffect, useMemo, useState} from 'react';
import { useContextProvider} from "../../context/ContextProvider";
import {UsersWithPostsModel} from "../../models/UsersWithPostsModel";

const UserPostsPage = () => {

    const {postStore: {allPosts}, userStore: {allUsers}} = useContextProvider();

    let [userWithPostsArrayState, setUserWithPostsArrayState] = useState<UsersWithPostsModel[]>([]);

    const userWithPostsArray = useMemo(() => {
         return () =>{
            return allUsers.map(user=> {
                return {...user, posts: allPosts.filter(post => post.userId === user.id)};
            })
        }
    }, [allUsers, allPosts])

    useEffect(() => {
        setUserWithPostsArrayState(userWithPostsArray);
    }, [userWithPostsArray])


    return (
        <div>
            {
                userWithPostsArrayState.map(user=> (
                    <div>
                        <div key={user.id}>{user.username}
                            <ul>{
                                user.posts.map(post=>(
                                    <li key={post.id}>{post.title}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                ))
            }
        </div>
    );
};

export default UserPostsPage;