import { WELCOME, ERRORS, LOGIN } from './types';

const initialState = {
  message: null,
  errors: null,
};
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case WELCOME:
      return {
        ...state,
        message: payload,
      };
    case ERRORS:
      return { ...state, errors: payload };
    case LOGIN:
      return { ...state, message: payload };
    default:
      return state;
  }
};
