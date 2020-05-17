import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../admin/dashboard/dashboard';
import Login from '../admin/auth/login';
import ViewAllStations from '../admin/stations/view.all';
import ViewAllClassStudy from '../admin/classes/view.class';
import ViewTimeTable from '../admin/timetables/parent';
import ViewAllSubject from '../admin/subjects/view.all';

const AdminRouteComponent = () => {
  return (
    <Switch>
      <Route component={Dashboard} path="/itegure-dashboard" />
      <Route component={Login} path="/itegure-login" />
      <Route component={ViewAllStations} path="/itegure-stations" />
      <Route component={ViewAllClassStudy} path="/itegure-classes" />
      <Route component={ViewTimeTable} path="/itegure-timetables" />
      <Route component={ViewAllSubject} path="/itegure-subjects" />
    </Switch>
  );
};
export default AdminRouteComponent;
