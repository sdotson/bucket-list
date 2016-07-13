import React from 'react';
import { Route, IndexRoute } from 'react-router';

import ListMain from './components/list-main';
import ListCompleted from './components/list-completed';
import App from './components/app';
import NewItem from './components/new-item';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={ListMain} filter={{done: false}} />
    <Route path="completed" component={ListCompleted} filter={{done: true}} />
    <Route path="items/new" component={NewItem} />
  </Route>
);
