import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './components/App';
import reducer from './reducer';
import startChat from './chat';

const initialState = window.INITIAL_STATE;
const store = createStore( reducer(initialState) );

startChat(store);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('app')
);
