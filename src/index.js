import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  //In strict mode every component is rendered twice
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
