import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import rootReducer from './reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
);
