import { WELCOME, ERRORS, LOGIN, PROFILE } from './types';

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
    case PROFILE:
      return { ...state, profile: payload };
    default:
      return state;
  }
};
