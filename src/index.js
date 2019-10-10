import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducer } from './reducer';
import { addComment } from './actions';

const boundAddComment = (text) => store.dispatch(addComment(text));// --------------------------------- TEST ---------------------------------
const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

store.dispatch(addComment('First comment'));
store.dispatch(addComment('Second comment'));
boundAddComment('Second and a half comment');// --------------------------------- TEST ---------------------------------
store.subscribe(() => console.log('state change detected: ', store.getState()));// --------------------------------- TEST ---------------------------------
//store.subscribe(() => console.log('state change detected'));// --------------------------------- TEST ---------------------------------

serviceWorker.unregister();