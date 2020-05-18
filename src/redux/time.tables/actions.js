import { VIEW, CREATE, UPDATE, DELETE, ERRORS } from './types';
import axios from 'axios';
import { dispatchAction } from '../helpers/action.helper';

export const viewTimeTable = () => async (dispatch) => {
  try {
    const { data } = await axios.get('/timetable');
    dispatchAction({ type: VIEW, payload: data.result, dispatch });
  } catch (error) {
    const { dataError } = error.response;
    if (dataError) {
      dispatchAction({ type: ERRORS, payload: dataError.error, dispatch });
    }
  }
};

export const createTimeTable = (information) => async (dispatch) => {
  dispatchAction({ type: ERRORS, payload: null, dispatch });
  dispatchAction({ type: CREATE, payload: { message: null }, dispatch });
  try {
    const { timeFrom, timeTo, station, subject, date, classStudy } = information;
    const newDate = new Date(`${date}`);
    const { data } = await axios.post('/timetable', {
      date: `${newDate.getFullYear()}-${
        newDate.getMonth() + 1
      }-${newDate.getDate()}`,
      timeFrom,
      timeTo,
      station,
      subject,
      classStudy,
    });
    dispatchAction({ type: CREATE, payload: data.result, dispatch });
    dispatch(viewTimeTable());
  } catch (error) {
    const { data: dataError } = error.response;
    if (dataError) {
      dispatchAction({ type: ERRORS, payload: dataError.error, dispatch });
    }
  }
};

export const updateTimeTable = (information) => async (dispatch) => {
  dispatchAction({ type: ERRORS, payload: null, dispatch });
  dispatchAction({ type: UPDATE, payload: { message: null }, dispatch });
  try {
    const {
      timeFrom,
      timeTo,
      station,
      subject,
      timeTableId,
      classStudy,
      date,
    } = information;
    const newDate = new Date(`${date}`);
    const { data } = await axios.put(`/timetable/${timeTableId}`, {
      timeFrom,
      timeTo,
      station,
      subject,
      classStudy,
      date: `${newDate.getFullYear()}-${
        newDate.getMonth() + 1
      }-${newDate.getDate()}`,
    });
    dispatchAction({ type: UPDATE, payload: data.result, dispatch });
    dispatch(viewTimeTable());
  } catch (error) {
    const { data: dataError } = error.response;
    if (dataError) {
      dispatchAction({ type: ERRORS, payload: dataError.error, dispatch });
    }
  }
};

export const deleteTimeTable = ({ timeTableId }) => async (dispatch) => {
  dispatchAction({ type: ERRORS, payload: null, dispatch });
  try {
    const { data } = await axios.delete(`/timetable/${timeTableId}`);
    const { message } = data.result;
    dispatchAction({ type: DELETE, payload: { message, timeTableId }, dispatch });
  } catch (error) {
    const { data: dataError } = error.response;
    if (dataError) {
      dispatchAction({ type: ERRORS, payload: dataError.error, dispatch });
    }
  }
};
