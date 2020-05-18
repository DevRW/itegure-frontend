import {
  ERRORS,
  VIEW_ALL_CLASS,
  CREATE_CLASS,
  DELETE_CLASS,
  UPDATE_CLASS,
} from './types';

const initialState = {
  message: null,
};
const classReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case VIEW_ALL_CLASS:
      return { ...state, classes: payload };
    case CREATE_CLASS:
      const { message: createMessage } = payload;
      return { ...state, message: createMessage };
    case DELETE_CLASS:
      const { message: deleteMessage, classStudyId } = payload;
      const filter = state.readAll.filter(
        (item) => Number(item.id) !== Number(classStudyId)
      );
      return { ...state, message: deleteMessage, readAll: filter };
    case UPDATE_CLASS:
      const { message: updateMessage } = payload;
      return { ...state, message: updateMessage };
    case ERRORS:
      return { ...state, errors: payload };
    default:
      return state;
  }
};
export default classReducer;
