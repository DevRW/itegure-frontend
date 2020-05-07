import { ERRORS, VIEW_ALL_CLASS } from './types';

const initialState = {
  message: null,
};
const classReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case VIEW_ALL_CLASS:
      return { ...state, classes: payload };
    case ERRORS:
      return { ...state, errors: payload };
    default:
      return state;
  }
};
export default classReducer;
