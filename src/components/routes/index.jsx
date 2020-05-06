import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import IndexRouteComponent from './index.routes';
const IndexRoute = () => {
  return (
    <Router>
      <IndexRouteComponent />
    </Router>
  );
};
export default IndexRoute;
