import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Routes';
import { Dashboard } from '../pages/dashboard';
import { SignIn } from '../pages/signIn';
import { DetailBook } from '../pages/detailBook';
import { RegisterBook } from '../pages/registerBook';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} isPrivate={false} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/detail/:id" component={DetailBook} isPrivate />
      <Route path="/register" component={RegisterBook} isPrivate />
      <Route path="/edit/:id" component={RegisterBook} isPrivate />
    </Switch>
  );
}
