import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

import { createStore, applyMiddleware } from 'redux';
import { usersReducer } from './reduceres/usersReducer';
import thunk from 'redux-thunk';

import { fetchUsers } from './actions/UserActions';
import logger from 'redux-logger';

const store = createStore(usersReducer, applyMiddleware(thunk, logger));

store.subscribe(() => {
  //console.log(store.getState());
});
store.dispatch(fetchUsers());

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(<App />);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
