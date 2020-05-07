import { ERRORS, VIEW_ALL_CLASS } from './types';
import axios from 'axios';
import { dispatchAction } from '../helpers/action.helper';

export const getAllClass = () => async (dispatch) => {
  try {
    const { data } = await axios.get('/classes');
    dispatchAction({ type: VIEW_ALL_CLASS, payload: data.result, dispatch });
  } catch (error) {
    if (error) {
      const { data } = error.response;
      dispatchAction({ type: ERRORS, payload: data.error, dispatch });
    }
  }
};
