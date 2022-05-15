import React from 'react';

import './index.css';
import App from './App';

import registerServiceWorker from './registerServiceWorker';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';

// Font Awesome
import 'font-awesome/css/font-awesome.css';

// React 18 ile aşağıdaki gibi render edilmesi gerekiyor
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// Old rendering method below (before version 6)
// import ReactDOM from 'react-dom';
// ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
