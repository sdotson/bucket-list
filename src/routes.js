import React from 'react';
import { Route, IndexRoute } from 'react-router';

import List from './components/list';
import ListMain from './components/list-main';
import ListCompleted from './components/list-completed';
import ListCategory from './components/list-category';
import App from './components/app';
import NewItem from './components/new-item';
import auth from './auth';
import LogIn from './components/log-in';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={ListMain} />
    <Route path="/login" component={LogIn} />
    <Route path="my-bucket-list" component={ListMain} />
    <Route path="completed" component={ListCompleted} filter={{done: true}} />
    <Route path="items/new" component={NewItem} />
    <Route path="categories/:category" component={ListCategory} filter={{done:false}} />
  </Route>
);
