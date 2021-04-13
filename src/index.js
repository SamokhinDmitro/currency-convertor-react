import React from 'react';
import ReactDOM from 'react-dom';
import './index.sass';
import App from './App';
import reportWebVitals from './reportWebVitals';

//Add react-router-dom support
import {BrowserRouter} from 'react-router-dom';

const app = (<BrowserRouter>
    <React.StrictMode>
        <App />
    </React.StrictMode>
</BrowserRouter>);

ReactDOM.render(app, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
