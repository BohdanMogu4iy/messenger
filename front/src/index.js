import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {io} from "socket.io-client";

const SERVER_URL = 'ws://localhost:3000'
let socket = io(SERVER_URL, {})

socket.on('connected', socket => {
  console.log('front connected'+socket.id)
})

socket.emit("userEvent", {user: "vova"})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
