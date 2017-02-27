import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import mainReducer from './reducers/mainReducer';

import App from './components/App.jsx';

let store = createStore(
  mainReducer,
  applyMiddleware(thunk)
);

const refresh = () => {
  render(
    <Provider store={ store }>
      <App />
    </Provider>,
    document.getElementById('app')
  )
}

refresh();
store.subscribe(refresh);