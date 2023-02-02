import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import generateStore from './redux/store';
import {PersistGate} from 'redux-persist/integration/react';

const { store, persistor } = generateStore();

ReactDOM.render(
	<Provider store={store}>
		<PersistGate loading="null" persistor={persistor}>
			<App />
		</PersistGate>
	</Provider>,
	document.getElementById('root')
);