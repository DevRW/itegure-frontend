import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomeComponent from '../index/home/home';
import Dashboard from '../index/dashboard/dashboard';
const IndexRouteComponent = () => {
  return (
    <Switch>
      <Route path="/" component={HomeComponent} exact />
      <Route path="/home" component={Dashboard} />
    </Switch>
  );
};
export default IndexRouteComponent;
