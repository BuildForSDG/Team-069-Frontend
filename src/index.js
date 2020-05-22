import React from 'react';
import ReactDOM from 'react-dom';
import '../src/scss/main.scss';
import App from './App';
import * as serviceWorker from "./serviceWorker";


ReactDOM.render(<App />, document.getElementById('app'));
serviceWorker.register();