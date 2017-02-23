import React, { Component } from 'react';
import { createStore } from 'redux';
import { render } from 'react-dom';
import mainReducer from './reducers/mainReducer';

import App from './components/App.jsx';


const refresh = () => {
  render(
    <App />,
    document.getElementById('app')
  )
}

refresh();