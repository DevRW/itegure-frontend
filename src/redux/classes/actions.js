import { ERRORS, VIEW_ALL_CLASS, CREATE_CLASS, DELETE_CLASS, UPDATE_CLASS  } from './types';
import axios from 'axios';
import { dispatchAction } from '../helpers/action.helper';

export const getAllClass = () => async (dispatch) => {
  try {
    const { data } = await axios.get('/classes');
    dispatchAction({ type: VIEW_ALL_CLASS, payload: data.result, dispatch });
  } catch (error) {
    const { dataError } = error.response;
    if (dataError) {
      dispatchAction({ type: ERRORS, payload: dataError.error, dispatch });
    }
  }
};
export const createClass = (information) => async (dispatch) => {
  try {
    const { data } = await axios.post('/classes', information);
    const { message } = data.result;
    dispatchAction({ type: CREATE_CLASS, payload: { message }, dispatch });
    dispatch(getAllClass());
  } catch (error) {
    if (error) {
      const { data } = error.response;
      dispatchAction({ type: ERRORS, payload: data.error, dispatch });
    }
  }
};
export const deleteClass = ({ classStudyId }) => async (dispatch) => {
  dispatchAction({ type: ERRORS, payload: null, dispatch });
  try {
    const { data } = await axios.delete(`/classes/${classStudyId}`);
    const { message } = data.result;
    dispatchAction({ type: DELETE_CLASS, payload: { message, classStudyId }, dispatch });
  } catch (error) {
    const { data: dataError } = error.response;
    if (dataError) {
      dispatchAction({ type: ERRORS, payload: dataError.error, dispatch });
    }
  }
};

export const updateClass = ({ name, classStudyId, type }) => async (dispatch) => {
  dispatchAction({ type: ERRORS, payload: null, dispatch });
  dispatchAction({ type: UPDATE_CLASS, payload: { message: null }, dispatch });
  try {
    const { data } = await axios.put(`/classes/${classStudyId}`, { name, type });
    dispatchAction({ type: UPDATE_CLASS, payload: data.result, dispatch });
    dispatch(getAllClass());
  } catch (error) {
    const { data: dataError } = error.response;
    if (dataError) {
      dispatchAction({ type: ERRORS, payload: dataError.error, dispatch });
    }
  }
};
