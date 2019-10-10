import {ADD_COMMENT, REMOVE_COMMENT, ADD_THUMB_UP, ADD_THUMB_DOWN} from './actions.js';

function comments(state = [], action) {
    switch(action.type) {
        case ADD_COMMENT:
            return [{
                id: action.id,
                text: action.text,
                thumbUpFlag: 0,
                thumbDownFlag: 0
                }
            , ...state];
        case REMOVE_COMMENT:
                return state.filter(comment => comment.id !== action.id);
        case ADD_THUMB_UP:
            return state.map(comment => {
                if(comment.id === action.id) {
                    return {...comment, thumbUpFlag: comment.thumbUpFlag + 1}// tak
                }
            return comment;
            });
        case ADD_THUMB_DOWN:
            return state.map(comment => {
                if (comment.id === action.id) {
                    comment.thumbDownFlag = comment.thumbDownFlag + 1// lub tak
                }
            return comment;
            });
            
        default:
            return state;
    }
}

export default comments;