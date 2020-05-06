import { WELCOME, ERRORS } from './types';

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

    default:
      return state;
  }
};
