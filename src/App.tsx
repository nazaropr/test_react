import React from 'react';
import './App.css';
import PostsComponent from "./Components/posts/PostsComponent";
import CommentsComponent from "./Components/comments/CommentsComponent";
import {getAllCommentsOfSinglePost} from "./Services/jps.api.service";
import {ICommentModel} from "./Models/ICommentModel";


const App = () => {

    let [comments, setComments] = React.useState<ICommentModel[]>([]);

    const lift = (postId: number)=>{
      getAllCommentsOfSinglePost(postId).then(({data})=> {
         setComments(data);
      })
    }

    return (
      <div className="App">
          <div className='posts'><PostsComponent lift={lift}/></div>
          <div className='comments'><CommentsComponent comments={comments} /></div>
      </div>
    );
};

export default App;