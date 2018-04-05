import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import App from './components/App';

ReactDOM.render(
  <App />, document.getElementById('root'));
  registerServiceWorker();
