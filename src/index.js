import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import thunkMiddleware from 'redux-thunk'

import routes from './routes';
import App from './components/app';
import reducers from './reducers';

/*

state
{
  filter: completed/noncompleted
  list-items: all list items
}

http://192.241.148.238:3000/

3 routes
/ all list items
/list-items/completed
/list-items/new create new list item

*/

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.querySelector('#app'));
