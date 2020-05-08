import {
  WELCOME,
  ERRORS,
  LOGIN,
  PROFILE,
  CREATE_SUBSCRIPTION,
  READ_ALL_NOTIFICATION,
} from './types';

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
    case CREATE_SUBSCRIPTION:
      return { ...state, message: payload };
    case READ_ALL_NOTIFICATION:
      return { ...state, notifications: payload };
    default:
      return state;
  }
};
