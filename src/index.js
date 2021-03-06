import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import LoGo from './page/header/qqSpaceLogo/index.js'
import * as serviceWorker from './serviceWorker';
import Overall from "./page/header/overall";
import Header from "./page/header";
import './sass/base.scss'

ReactDOM.render(
  <React.StrictMode>
      <Header></Header>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
