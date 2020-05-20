import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../admin/dashboard/dashboard';
import Login from '../admin/auth/login';
import ViewAllStations from '../admin/stations/view.all';
import ViewAllClassStudy from '../admin/classes/view.class';
import ViewTimeTable from '../admin/timetables/parent';
import ViewAllSubject from '../admin/subjects/view.all';
import Private from './private.admin';
import Parents from '../admin/parents';

const AdminRouteComponent = () => {
  return (
    <Switch>
      <Private path="/itegure-dashboard">
        <Dashboard />
      </Private>
      <Route path="/itegure-login" component={Login} />
      <Private path="/itegure-stations">
        <ViewAllStations />
      </Private>
      <Private path="/itegure-classes">
        <ViewAllClassStudy />
      </Private>
      <Private path="/itegure-timetables">
        <ViewTimeTable />
      </Private>
      <Private path="/itegure-subjects">
        <ViewAllSubject />
      </Private>
      <Private path="/itegure-parents">
        <Parents />
      </Private>
    </Switch>
  );
};
export default AdminRouteComponent;
