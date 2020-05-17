import { VIEW_ALL, CREATE, DELETE, UPDATE, ERRORS } from './types';

const initialState = {};
export const stationReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case VIEW_ALL:
      return { ...state, readAll: payload };
    case CREATE:
      return { ...state, create: payload };
    case DELETE:
      return { ...state, delete: payload };
    case UPDATE:
      return { ...state, update: payload };
    case ERRORS:
      return { ...state, errors: payload };
    default:
      return state;
  }
};
