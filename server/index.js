//Express server configuration
import path from 'path';
import express from 'express';
import handlebars from 'express-handlebars';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './generated/app';

const app = express();

// View Templates
app.engine('handlebars', handlebars({
  defaultLayout: 'main',
  layoutsDir: path.resolve(__dirname, 'views/layouts')
}));
app.set('view engine', 'handlebars');
app.set('views', path.resolve(__dirname, 'views'));

// Static assets
app.use(express.static(path.resolve(__dirname, '../dist')));

// Routes
app.get('/', (request, response) => {
  //Initial state w/ empty list of messages
  const initialState = {
    currentMessage: '',
    messages: []
  };
  //Create Redux store with intial state
  const store = createStore((state=initialState) => state);
  //Save string rendering of Provider with Store state and the main App component
  const appContent = ReactDOMServer.renderToString(
    //Provider component wraps App and provides access to the store so App component can connect to it
    <Provider store={store}>
      <App />
    </Provider>
  );
  //Send server response with rendered app
  response.render('app', {
    app: appContent,
    //JSON string representation of initialState is created and passed as a parameter to the app template so the state can be shared with the client
    initialState: JSON.stringify(initialState)
  });

});

export default app;
