import {connect} from 'react-redux';
import Comment from './Comment';
import {removeComment, addThumbUp, addThumbDown} from './actions'

const mapDispatchToProps = dispatch => ({
  addThumbUp: (id) => dispatch(addThumbUp(id)),
  addThumbDown: (id) => dispatch(addThumbDown(id)),
  removeComment: (id) => dispatch(removeComment(id)),
});

export default connect(null, mapDispatchToProps)(Comment);
