import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './components/App';
import reducer from './reducer';
//Get store's initial state from global window variable
const initialState = window.INITIAL_STATE;
//Create Redux Store on client using intialState passed from server response
const store = createStore( reducer(initialState) );
//Wraps root component with a Provider component and makes store instance available
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('app')
);
