import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createHistory, useBasename } from 'history';
import { Router } from 'react-router';
import promise from 'redux-promise';

import routes from './routes';
import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

const browserHistory = useBasename(createHistory)({
    basename: "/bucket-list"
});

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.querySelector('#app'));
