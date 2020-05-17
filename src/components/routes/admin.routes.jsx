import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../admin/dashboard/dashboard';
import Login from '../admin/auth/login';
import ViewAllStations from '../admin/stations/view.all';
import ViewAllClassStudy from '../admin/classes/view.class';

const AdminRouteComponent = () => {
  return (
    <Switch>
      <Route component={Dashboard} path="/itegure-dashboard" />
      <Route component={Login} path="/itegure-login" />
      <Route component={ViewAllStations} path="/itegure-stations" />
      <Route component={ViewAllClassStudy} path="/itegure-classes" />
    </Switch>
  );
};
export default AdminRouteComponent;
