import React from 'react';
import { Route, IndexRoute } from 'react-router';

import ListMain from './components/list-main';
import ListCompleted from './components/list-completed';
import ListCategory from './components/list-category';
import App from './components/app';
import NewItem from './components/new-item';
import auth from './auth';
import SignIn from './components/sign-in';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={ListMain} filter={{done: false}} />
    <Route path="/signin" component={SignIn} />
    <Route path="my-bucket-list" component={ListMain} filter={{done: false}} />
    <Route path="completed" component={ListCompleted} filter={{done: true}} />
    <Route path="items/new" component={NewItem} />
    <Route path="categories/:category" component={ListCategory} filter={{done:false}} />
  </Route>
);
