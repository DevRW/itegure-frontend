import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import IndexRouteComponent from './index.routes';
import AdminRouteComponet from './admin.routes';
const IndexRoute = () => {
  return (
    <Router>
      <IndexRouteComponent />
      <AdminRouteComponet />
    </Router>
  );
};
export default IndexRoute;
