import React from 'react';
import { IS_AUTH, IS_SUBSCRIBED } from '../../redux/subscriptions/types';
import { getStorage } from '../../redux/helpers/action.helper';
import { Redirect, Route } from 'react-router-dom';

const Prevent = ({ children, ...rest }) => {
  const isAuth = getStorage(IS_AUTH);
  const isSubscribed = getStorage(IS_SUBSCRIBED);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuth === String(false) && isSubscribed === String(false) ? (
          children
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};
export default Prevent;
