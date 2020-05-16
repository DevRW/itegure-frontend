import { LOGIN, ERRORS, PROFILE } from './types';

const initialState = {};
export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN:
      return {
        ...state,
        message: payload,
      };
    case ERRORS:
      return { ...state, errors: payload };
    case PROFILE:
      return { ...state, currentProfile: payload };
    default:
      return state;
  }
};
