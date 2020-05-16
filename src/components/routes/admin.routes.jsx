import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../admin/dashboard/dashboard';
import PrivateRoute from './private.route';
const AdminRouteComponent = () => {
  return (
    <Switch>
      <Route component={Dashboard} path="/itegure-dashboard" />
    </Switch>
  );
};
export default AdminRouteComponent;
