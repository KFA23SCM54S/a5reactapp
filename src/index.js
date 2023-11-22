import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App, Requirement5, Requirement6, Requirement7, Requirement8, Requirement9, Requirement10, Requirement11_1,
Requirement11_2, Requirement11_3, Requirement11_4, Requirement11_5, Requirement11_6, Requirement11_7} from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Requirement5/>
    <Requirement6/>
    <Requirement7/>
    <Requirement8/>
    <Requirement9/>
    <Requirement10/>
    <h1>LSTM, StatsModel and Prophet Forecasting</h1>
    <Requirement11_1/>
    <Requirement11_2/>
    <Requirement11_3/>
    <Requirement11_4/>
    <Requirement11_5/>
    <Requirement11_6/>
    <Requirement11_7/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
