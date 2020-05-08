import React from 'react';

export const Spinner = ({ color }) => {
  return <div className={`spinner-border ${color}`} role="status"></div>;
};
