import { VIEW_ALL, CREATE, DELETE, UPDATE, ERRORS } from './types';
import axios from 'axios';
import { dispatchAction } from '../helpers/action.helper';

export const viewAllStation = () => async (dispatch) => {
  dispatchAction({ type: ERRORS, payload: null, dispatch });
  try {
    const { data } = await axios.get('/stations');
    dispatchAction({ type: VIEW_ALL, payload: data.result, dispatch });
  } catch (error) {
    if (error) {
      const { data } = error.response;
      dispatchAction({ type: ERRORS, payload: data.error, dispatch });
    }
  }
};

export const createStation = ({ name }) => async (dispatch) => {
  dispatchAction({ type: ERRORS, payload: null, dispatch });
  try {
    const { data } = await axios.post('/stations', { name });
    dispatchAction({ type: CREATE, payload: data.result, dispatch });
  } catch (error) {
    if (error) {
      const { data } = error.response;
      dispatchAction({ type: ERRORS, payload: data.error, dispatch });
    }
  }
};

export const updateStation = ({ name, stationId }) => async (dispatch) => {
  dispatchAction({ type: ERRORS, payload: null, dispatch });
  try {
    const { data } = await axios.put(`/stations/${stationId}`, { name });
    dispatchAction({ type: UPDATE, payload: data.result, dispatch });
  } catch (error) {
    if (error) {
      const { data } = error.response;
      dispatchAction({ type: ERRORS, payload: data.error, dispatch });
    }
  }
};

export const deleteStation = ({ stationId }) => async (dispatch) => {
  dispatchAction({ type: ERRORS, payload: null, dispatch });
  try {
    const { data } = await axios.delete(`/stations/${stationId}`);
    dispatchAction({ type: DELETE, payload: data.result, dispatch });
  } catch (error) {
    if (error) {
      const { data } = error.response;
      dispatchAction({ type: ERRORS, payload: data.error, dispatch });
    }
  }
};
