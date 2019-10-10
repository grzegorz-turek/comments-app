import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
//import { createStore, applyMiddleware } from 'redux';//applyMiddleware konieczne do startu redux-loggera
import { reducer } from './reducer';
//import { createLogger } from 'redux-logger';//importujemy redux-loggera
import DevTools from './DevTools';
import { addComment } from './actions';

//const logger = createLogger();//tworzymy redux-loggera
//const store = createStore(reducer);
//const store = createStore(reducer, applyMiddleware(logger));//w storze uruchamiamy nie tylko reducera ale także middleware redux-loggera
const store = createStore(reducer, DevTools.instrument());//w storze uruchamiamy redux-devtools
const boundAddComment = (text) => store.dispatch(addComment(text));// --------------------------------- TEST ---------------------------------

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