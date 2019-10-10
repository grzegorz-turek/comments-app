import React from 'react';
import Comment from "./CommentContainer";

//const CommentsList = ({comments}) => <ul>{comments.map(comment => <Comment key={comment.id} {...comment}/>)}</ul>;
const CommentsList = ({comments, addComment}) => 
    <div>
        <h2>Browse comments</h2>
        <ul>{comments.map(comment => <Comment key={comment.id} {...comment}/>)}</ul>
        <h2>Add comments</h2>
        <button onClick={() => addComment('third comment')}>Add comment</button>
    </div>

export default CommentsList;