import React from 'react';
import { Route, IndexRoute } from 'react-router';

import List from './components/list';
import App from './components/app';
import NewItem from './components/new-item';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={List} done={false} />
    <Route path="completed" component={List} done={true} />
    <Route path="items/new" component={NewItem} />
  </Route>
);
