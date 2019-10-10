import React from 'react';
import Comment from './CommentContainer';

class CommentsList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div>
            <h2>Browse comments</h2>
            <ul>{this.props.comments.map(comment => <Comment key={comment.id} {...comment}/>)}</ul>
            <h2>Add comments</h2>
            <form onSubmit={this.submitNewComment}>
                <input id='commentValue' type='text' name='commentInput' placeholder='Write comment here...' />
                <input type='submit' name='submitBtn' value='Send' />
            </form>
        </div>
        )
    }

    submitNewComment = (e) => {
        e.preventDefault();
        const commentInputValue = document.getElementById('commentValue').value; 
        this.props.addComment(commentInputValue);
    }
}

export default CommentsList;

/*
//działa addThumbUp, addThumbDown i removeComment
const CommentsList = ({comments}) => <ul>{comments.map(comment => <Comment key={comment.id} {...comment}/>)}</ul>;
*/

/*
//działa addThumbUp, addThumbDown, removeComment i addComment (ale z tekstem wpisanym na sztywno)
const CommentsList = ({comments, addComment}) => 
    <div>
        <h2>Browse comments</h2>
        <ul>{comments.map(comment => <Comment key={comment.id} {...comment}/>)}</ul>
        <h2>Add comments</h2>
        <form onSubmit={() => addComment('third comment')}>
            <input type='text' name='commentInput' placeholder='Write comment here...' />
            <input type='submit' name='submitBtn' value='send' />
        </form>
        <button onClick={() => addComment('third comment')}>Add comment</button>
    </div>
*/