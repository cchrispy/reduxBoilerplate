import React, { Component } from 'react';
import { createStore } from 'redux';
import { render } from 'react-dom';
import mainReducer from './reducers/mainReducer';

import App from './components/App.jsx';

let store = createStore(mainReducer);
console.log(store.getState());

const refresh = () => {
  render(
    <App />,
    document.getElementById('app')
  )
}

refresh();