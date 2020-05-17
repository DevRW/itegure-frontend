import { ERRORS, VIEW_ALL_SUBJECT, CREATE_SUBJECT, DELETE_SUBJECT, UPDATE_SUBJECT  } from './types';
import axios from 'axios';
import { dispatchAction } from '../helpers/action.helper';

export const getAllSubject = () => async (dispatch) => {
  try {
    const { data } = await axios.get('/subjects');
    dispatchAction({ type: VIEW_ALL_SUBJECT, payload: data.result, dispatch });
  } catch (error) {
    const { dataError } = error.response;
    if (dataError) {
      dispatchAction({ type: ERRORS, payload: dataError.error, dispatch });
    }
  }
};
export const createSubject = (information) => async (dispatch) => {
  try {
    const { data } = await axios.post('/subjects', information);
    const { message } = data.result;
    dispatchAction({ type: CREATE_SUBJECT, payload: { message }, dispatch });
    dispatch(getAllSubject());
  } catch (error) {
    if (error) {
      const { data } = error.response;
      dispatchAction({ type: ERRORS, payload: data.error, dispatch });
    }
  }
};
export const deleteSubject = ({ subjectId }) => async (dispatch) => {
    dispatchAction({ type: ERRORS, payload: null, dispatch });
    try {
      const { data } = await axios.delete(`/subjects/${subjectId}`);
      
      const { message } = data.result;
      dispatchAction({ type: DELETE_SUBJECT, payload: { message, subjectId }, dispatch });
    } catch (error) {
      const { data: dataError } = error.response;
      if (dataError) {
        dispatchAction({ type: ERRORS, payload: dataError.error, dispatch });
      }
    }
  };

export const updateSubject = ({ name, subjectId, type }) => async (dispatch) => {
  dispatchAction({ type: ERRORS, payload: null, dispatch });
  dispatchAction({ type: UPDATE_SUBJECT, payload: { message: null }, dispatch });
  try {
    const { data } = await axios.put(`/subjects/${subjectId}`, { name, type });
    dispatchAction({ type: UPDATE_SUBJECT, payload: data.result, dispatch });
    dispatch(getAllSubject());
  } catch (error) {
    const { data: dataError } = error.response;
    if (dataError) {
      dispatchAction({ type: ERRORS, payload: dataError.error, dispatch });
    }
  }
};
