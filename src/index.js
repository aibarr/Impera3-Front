import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, compose } from 'redux';
import { offline } from '@redux-offline/redux-offline';
import offlineConfig from '@redux-offline/redux-offline/lib/defaults';
import Thunk from 'redux-thunk';
import imperaApp from './reducers'

import registerServiceWorker from './registerServiceWorker';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
    imperaApp,
    composeEnhancers(
        applyMiddleware(Thunk),
        offline(offlineConfig)
    )
  );
  

ReactDOM.render(
    <Provider store={store}>
        <App />        
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
