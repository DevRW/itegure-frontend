import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomeComponent from '../index/home/home';
import Dashboard from '../index/dashboard/dashboard';
import PrivateRoute from './private.route';
const IndexRouteComponent = () => {
  return (
    <Switch>
      <Route path="/" component={HomeComponent} exact />
      <PrivateRoute path="/home">
        <Dashboard />
      </PrivateRoute>
    </Switch>
  );
};
export default IndexRouteComponent;
