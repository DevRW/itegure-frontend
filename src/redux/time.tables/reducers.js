import { VIEW, CREATE, UPDATE, DELETE, ERRORS } from './types';

const initialState = {};
export const timeTableReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case VIEW:
      return { ...state, readAll: payload };
    case CREATE:
      const { message: createMessage } = payload;
      return { ...state, message: createMessage };
    case UPDATE:
      const { message: updateMessage } = payload;
      return { ...state, message: updateMessage };
    case DELETE:
      const { message: deleteMessage, timeTableId } = payload;
      const filter = state.readAll.filter(
        (item) => Number(item.id) !== Number(timeTableId)
      );
      return { ...state, message: deleteMessage, readAll: filter };
    case ERRORS:
      return { ...state, errors: payload };
    default:
      return state;
  }
};
