import {connect} from 'react-redux';
import CommentsList from './CommentsList';
import {addComment} from './actions';// ---------------------------- TEST ----------------------------

const mapStateToProps = state => ({comments: state.comments});

const mapDispatchToProps = dispatch => ({// ---------------------------- TEST ----------------------------
    addComment: (text) => dispatch(addComment(text))// ---------------------------- TEST ----------------------------
});// ---------------------------- TEST ----------------------------

export default connect(mapStateToProps, (null, mapDispatchToProps))(CommentsList);// ---------------------------- TEST ----------------------------
//export default connect(mapStateToProps)(CommentsList);
