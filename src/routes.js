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
import Register from './components/register';
import SendPassword from './components/send-password';
import ResetPassword from './components/reset-password';
import PasswordSuccess from './components/password-success';
import EmailSuccess from './components/email-success';
import AuthenticatedComponent from './components/authenticated-component';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={LogIn} />
    <Route path="/login" component={LogIn} />
    <Route path="/register" component={Register} />
    <Route path="/send-password-email" component={SendPassword} />
    <Route path="/reset-password" component={ResetPassword} />
    <Route path="/password-success" component={PasswordSuccess} />
    <Route path="/email-success" component={EmailSuccess} />
    <Route component={AuthenticatedComponent}>
      <Route path="my-bucket-list" component={ListMain} />
      <Route path="completed" component={ListCompleted} />
      <Route path="items/new" component={NewItem} />
      <Route path="items/:item_id/edit" component={EditItem} />
      <Route path="categories/:category" component={ListCategory} />
    </Route>
  </Route>
);
