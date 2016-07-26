import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, useRouterHistory } from 'react-router';
import { createHistory } from 'history';
import promise from 'redux-promise';

import routes from './routes';
import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

const history = useRouterHistory(createHistory)({
    basename: "/bucket-list"
});

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={history} routes={routes} />
  </Provider>
  , document.querySelector('#app'));
