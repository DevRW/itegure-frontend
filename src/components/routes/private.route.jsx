import React from 'react';
import { IS_AUTH } from '../../redux/subscriptions/types';
import { getStorage } from '../../redux/helpers/action.helper';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ children, ...rest }) => {
  const isAuth = getStorage(IS_AUTH);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuth === String(true) ? children : <Redirect to="/" />
      }
    />
  );
};
export default PrivateRoute;
