import React from 'react';
import { Route, IndexRoute } from 'react-router';

import List from './components/list';
import App from './components/app';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={List} />
  </Route>
);
