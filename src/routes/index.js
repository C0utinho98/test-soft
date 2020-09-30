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
      <Route path="/" exact component={SignIn} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/detail" component={DetailBook} isPrivate />
      <Route path="/register" component={RegisterBook} isPrivate />
    </Switch>
  );
}
