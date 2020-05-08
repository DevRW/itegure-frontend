import { CREATE, READ_ALL, READ_ONE, ERRORS, DELETE, UPDATE } from './types';

const initialState = {
  create: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE:
      return { ...state, create: payload };
    case READ_ALL:
      return { ...state, readAll: payload };
    case READ_ONE:
      return { ...state, readSpecific: payload };
    case DELETE:
      const { message } = payload;
      return { ...state, delete: { message } };
    case UPDATE:
      const { message: messages } = payload;
      return { ...state, update: { message: messages } };
    case ERRORS:
      return { ...state, errors: payload };
    default:
      return state;
  }
};
