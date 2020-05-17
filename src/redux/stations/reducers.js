import { VIEW_ALL, CREATE, DELETE, UPDATE, ERRORS } from './types';

const initialState = {
  readAll: [],
};
export const stationReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case VIEW_ALL:
      return { ...state, readAll: payload };
    case CREATE:
      const { message: createMessage } = payload;
      return { ...state, message: createMessage };
    case DELETE:
      const { message: deleteMessage, stationId } = payload;
      const filter = state.readAll.filter(
        (item) => Number(item.id) !== Number(stationId)
      );
      return { ...state, message: deleteMessage, readAll: filter };
    case UPDATE:
      const { message: updateMessage } = payload;
      return { ...state, message: updateMessage };
    case ERRORS:
      return { ...state, errors: payload };
    default:
      return state;
  }
};
