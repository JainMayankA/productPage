import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import allReducer from './reducers/index';
import { Provider } from 'react-redux';
import Navbar from './components/Navbar'


const store = createStore(
  allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );


ReactDOM.render(
  <Provider store = {store}>
  <Navbar />
    <App />
  </Provider>,
  document.getElementById('root')
);

