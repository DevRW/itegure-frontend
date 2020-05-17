import React, { Fragment } from 'react';
import { FaQuestionCircle } from 'react-icons/fa';
import { BsCheckCircle } from 'react-icons/bs';
import { FaGrinWink } from 'react-icons/fa';
import { Alert } from 'reactstrap';
export const Spinner = ({ color }) => {
  return <div className={`spinner-border ${color}`} role="status"></div>;
};
export const LoadingWait = () => {
  return (
    <div className="loading-wait">
      <div className="spinner-border" role="status" />
      <div>please wait</div>
    </div>
  );
};

export const NotFoundMessage = ({ message }) => {
  return (
    <div className="d-flex align-items-center">
      <div style={{ fontSize: '40px', color: '#f10e3b' }}>
        <FaQuestionCircle />
      </div>
      <div className="font-weight-bold ml-2 mt-1">{message}</div>
    </div>
  );
};

export const SuccessMessage = ({ message, color, suc, er }) => {
  return (
    <div className="msg-div" style={{ color: `${color} !important` }}>
      {message} {suc && <BsCheckCircle />} {er && <FaGrinWink />}
    </div>
  );
};

export const AlertErrorMessage = ({ errors }) => {
  return (
    <Fragment>
      {errors && (
        <Fragment>
          {errors.serverError && (
            <Alert color="danger">
              {errors.serverError} <FaGrinWink />
            </Alert>
          )}
          {errors.unauthorized && (
            <Alert color="danger">
              {errors.unauthorized} <FaGrinWink />
            </Alert>
          )}
          {errors.notFoundError && (
            <Alert color="danger">
              {errors.notFoundError} <FaGrinWink />
            </Alert>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};
