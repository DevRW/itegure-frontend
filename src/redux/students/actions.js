import { CREATE, READ_ALL, ERRORS, DELETE, UPDATE } from './types';
import axios from 'axios';
import { dispatchAction } from '../helpers/action.helper';

export const readAllStudent = () => async (dispatch) => {
  try {
    const { data } = await axios.get('/students/read-student/all');
    dispatchAction({ type: READ_ALL, payload: data.result, dispatch });
  } catch (error) {
    const { data } = error.response;
    dispatchAction({ type: ERRORS, payload: data.error, dispatch });
  }
};

export const createStudent = (information) => async (dispatch) => {
  try {
    const { data } = await axios.post('/students/create-student', information);
    const { message } = data.result;
    dispatchAction({ type: CREATE, payload: { message }, dispatch });
    await dispatch(readAllStudent());
  } catch (error) {
    const { data } = error.response;
    dispatchAction({ type: ERRORS, payload: data.error, dispatch });
  }
};
export const deleteStudent = (studentId) => async (dispatch) => {
  try {
    const { data } = await axios.delete(`/students/delete-student/${studentId}`);
    const { message } = data.result;
    dispatchAction({ type: DELETE, payload: { message, studentId }, dispatch });
    await dispatch(readAllStudent());
  } catch (error) {
    const { data } = error.response;
    dispatchAction({ type: ERRORS, payload: data.error, dispatch });
  }
};

export const updateStudent = (studentId, information) => async (dispatch) => {
  try {
    const { data } = await axios.put(
      `/students/update-student/${studentId}`,
      information
    );
    const { message } = data.result;
    dispatchAction({ type: UPDATE, payload: { message, studentId }, dispatch });
    await dispatch(readAllStudent());
  } catch (error) {
    const { data } = error.response;
    dispatchAction({ type: ERRORS, payload: data.error, dispatch });
  }
};
