import React from 'react';
import { Route, IndexRoute } from 'react-router';

import List from './components/list';
import ListMain from './components/list-main';
import ListCompleted from './components/list-completed';
import ListCategory from './components/list-category';
import App from './components/app';
import NewItem from './components/new-item';
import LogIn from './components/log-in';
import {requireAuthentication} from './components/authenticated-component';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={requireAuthentication(ListMain)} />
    <Route path="/login" component={LogIn} />
    <Route component={requireAuthentication(ListMain)}>
      <Route path="my-bucket-list" component={ListMain} />
      <Route path="completed" component={ListCompleted} />
      <Route path="items/new" component={NewItem} />
      <Route path="categories/:category" component={ListCategory} />
    </Route>
  </Route>
);
