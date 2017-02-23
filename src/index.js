import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import mainReducer from './reducers/mainReducer';

import App from './components/App.jsx';

let store = createStore(mainReducer);

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