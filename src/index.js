import React from "react";
import * as ReactDOM from 'react-dom';
import App from './App'
import {BrowserRouter} from 'react-router-dom';
import 'antd/dist/antd.css';
import './style2.css';

ReactDOM.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>
    , document.getElementById("root"));