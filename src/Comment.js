import React from 'react';
import './Comment.css';

const Comment = ({text, thumbUpFlag, thumbDownFlag, id, removeComment, addThumbUp, addThumbDown}) =>
  <li className={'Comment'}>
    <b>{text}</b> <button onClick={()=> removeComment(id)}>Remove comment</button>
    <div>
        <span>thumbs up: {thumbUpFlag}</span> <button onClick={() => addThumbUp(id)}>Thumb UP</button>
        <span> | thumbs down: {thumbDownFlag}</span> <button onClick={() => addThumbDown(id)}>Thumb DOWN</button>
    </div>
  </li>;

export default Comment;