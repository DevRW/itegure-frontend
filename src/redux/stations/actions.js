import { VIEW_ALL, CREATE, DELETE, UPDATE, ERRORS } from './types';
import axios from 'axios';
import { dispatchAction } from '../helpers/action.helper';

export const viewAllStation = () => async (dispatch) => {
  try {
    const { data } = await axios.get('/stations');
    dispatchAction({ type: VIEW_ALL, payload: data.result, dispatch });
  } catch (error) {
    const { dataError } = error.response;
    if (dataError) {
      dispatchAction({ type: ERRORS, payload: dataError.error, dispatch });
    }
  }
};

export const createStation = ({ name }) => async (dispatch) => {
  dispatchAction({ type: ERRORS, payload: null, dispatch });
  try {
    const { data } = await axios.post('/stations', { name });
    dispatchAction({ type: CREATE, payload: data.result, dispatch });
    dispatch(viewAllStation());
  } catch (error) {
    const { data: dataError } = error.response;
    if (dataError) {
      dispatchAction({ type: ERRORS, payload: dataError.error, dispatch });
    }
  }
};

export const updateStation = ({ name, stationId }) => async (dispatch) => {
  dispatchAction({ type: ERRORS, payload: null, dispatch });
  try {
    const { data } = await axios.put(`/stations/${stationId}`, { name });
    dispatchAction({ type: UPDATE, payload: data.result, dispatch });
    dispatch(viewAllStation());
  } catch (error) {
    const { data: dataError } = error.response;
    if (dataError) {
      dispatchAction({ type: ERRORS, payload: dataError.error, dispatch });
    }
  }
};

export const deleteStation = ({ stationId }) => async (dispatch) => {
  dispatchAction({ type: ERRORS, payload: null, dispatch });
  try {
    const { data } = await axios.delete(`/stations/${stationId}`);
    const { message } = data.result;
    dispatchAction({ type: DELETE, payload: { message, stationId }, dispatch });
  } catch (error) {
    const { data: dataError } = error.response;
    if (dataError) {
      dispatchAction({ type: ERRORS, payload: dataError.error, dispatch });
    }
  }
};
