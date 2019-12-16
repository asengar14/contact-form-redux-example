import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import  reducer  from "./Reducer/reducer";
import { Provider } from "react-redux";

/**
 * Creating Redux store
 */
const store = createStore(reducer);

/**
 * Subscribing store, this will invoke if there is any change in store.
 */
store.subscribe(() => {
    console.log("[Subscribe]" , store.getState());
});
ReactDOM.render(<Provider store = {store}><App /> </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
