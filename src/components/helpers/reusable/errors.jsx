import React from 'react';
export const handleValidationError = (validationError, param) => {
  const find = validationError.find((item) => item.param === param);
  return (
    <small className="error-message red-color font-weight-bold">
      {find ? find.msg : ''}
    </small>
  );
};
