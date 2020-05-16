import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../admin/dashboard/dashboard';
import Login from '../admin/auth/login';
const AdminRouteComponent = () => {
  return (
    <Switch>
      <Route component={Dashboard} path="/itegure-dashboard" />
      <Route component={Login} path="/itegure-login" />
    </Switch>
  );
};
export default AdminRouteComponent;
