import React from 'react';
import { FaQuestionCircle } from 'react-icons/fa';
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
