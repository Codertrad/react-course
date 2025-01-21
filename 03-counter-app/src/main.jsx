import React from 'react';
import ReactDOM from 'react-dom/client'
import './globals.css';
import { CounterApp } from './CounterApp';
//import { FirstApp } from './FirstApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <FirstApp title='Hola, Soy Goku' subTitle='SubTitle' name='Julian'/> */}
    <CounterApp value={20}/>
  </React.StrictMode>
)
