import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomeComponent from '../index/home/home';

const IndexRouteComponent = () => {
  return (
    <Switch>
      <Route path="/" component={HomeComponent} exact />
    </Switch>
  );
};
export default IndexRouteComponent;
