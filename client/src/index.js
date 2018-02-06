import React from 'react';
import { render } from 'react-dom';
// console.log(ReactDOM.render());
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

render((
	<Router>
		<App />
	</Router>
), document.getElementById('root'));
registerServiceWorker();
