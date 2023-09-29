/* import ReactDOM from "react-dom"
import App from "./App"
import "./index.css"

ReactDOM.render(<App />, document.querySelector("#root"));

 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const root = document.getElementById('root');
const rootElement = ReactDOM.createRoot(root);
rootElement.render(<App />);