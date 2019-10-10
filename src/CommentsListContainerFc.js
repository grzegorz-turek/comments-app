import {connect} from 'react-redux';
import CommentsList from './CommentsList';
import {addComment} from './actions';

const mapDispatchToProps = dispatch => ({
    addComment: (text) => dispatch(addComment(text)),
});

export default connect(null, mapDispatchToProps)(CommentsList);