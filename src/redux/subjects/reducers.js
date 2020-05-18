import { ERRORS, VIEW_ALL_SUBJECT, CREATE_SUBJECT, DELETE_SUBJECT, UPDATE_SUBJECT } from './types';

const initialState = {
  message: null,
};
const subjectReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case VIEW_ALL_SUBJECT:
      return { ...state, subjects: payload };
    case CREATE_SUBJECT:
      const { message: createMessage } = payload;
      return { ...state, message: createMessage };
    case DELETE_SUBJECT:
      const { message: deleteMessage, subjectId } = payload;
      const filter = state.subjects.filter(
        (item) => Number(item.id) !== Number(subjectId)
      );
      return { ...state, message: deleteMessage, subjects: filter };
    case UPDATE_SUBJECT:
      const { message: updateMessage } = payload;
      return { ...state, message: updateMessage };
    case ERRORS:
      return { ...state, errors: payload };
    default:
      return state;
  }
};
export default subjectReducer;
