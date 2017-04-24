import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import toDoApp from './reducers';
import App from './components/App';



ReactDOM.render(
  <Provider store={createStore(toDoApp)}>
    <App />
  </Provider>,
  document.getElementById('root')
);