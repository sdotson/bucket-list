import React from 'react';
import { Route, IndexRoute } from 'react-router';

import List from './components/list';
import ListMain from './components/list-main';
import ListCompleted from './components/list-completed';
import ListCategory from './components/list-category';
import App from './components/app';
import NewItem from './components/new-item';
import EditItem from './components/edit-item';
import LogIn from './components/log-in';
import RegisterForm from './components/register-form';
import AuthenticatedComponent from './components/authenticated-component';

export default (
  <Route path="/" component={App}>
    <Route path="/login" component={LogIn} />
    <Route path="/register" component={RegisterForm} />
    <Route component={AuthenticatedComponent}>
      <IndexRoute component={ListMain} />
      <Route path="my-bucket-list" component={ListMain} />
      <Route path="completed" component={ListCompleted} />
      <Route path="items/new" component={NewItem} />
      <Route path="items/:item_id/edit" component={EditItem} />
      <Route path="categories/:category" component={ListCategory} />
    </Route>
  </Route>
);
