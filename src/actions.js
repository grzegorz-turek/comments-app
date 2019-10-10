import uuid from 'uuid';

export const ADD_COMMENT = 'ADD_COMMENT';
export const ADD_THUMB_UP = 'ADD_THUMB_UP';
export const ADD_THUMB_DOWN = 'ADD_THUMB_DOWN';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

export function addComment(text) {
  return {
    type: ADD_COMMENT,
    text,
    id: uuid.v4()
  }
}

export function addThumbUp(id) {
  return {
    type: ADD_THUMB_UP,
    id
  }
}

export function addThumbDown(id) {
  return {
      type: ADD_THUMB_DOWN,
      id
  }
}

export function removeComment(id) {
  return {
      type: REMOVE_COMMENT,
      id
  }
}
