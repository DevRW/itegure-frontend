import axios from 'axios';
import { dispatchAction, setStorage } from '../helpers/action.helper';
import { ERRORS, LOGIN, SUBSCRIPTION_TOKEN } from './types';

export const login = (information) => async (dispatch) => {
  dispatchAction({ type: ERRORS, payload: null, dispatch });
  try {
    const { data } = await axios.post('/subscriptions/login', information);
    const { message } = data.result;
    dispatchAction({ type: LOGIN, payload: message, dispatch });
  } catch (error) {
    if (error) {
      const { data } = error.response;
      dispatchAction({ type: ERRORS, payload: data.error, dispatch });
    }
  }
};

export const authenticate = (information) => async (dispatch) => {
  dispatchAction({ type: ERRORS, payload: null, dispatch });
  try {
    const { data } = await axios.post(
      '/subscriptions/authenticate-subscriber',
      information
    );
    const { message, token } = data.result;
    setStorage({item: SUBSCRIPTION_TOKEN, value: token});
    dispatchAction({ type: LOGIN, payload: message, dispatch });
    window.location.href = '/home';
  } catch (error) {
    if (error) {
      const { data } = error.response;
      dispatchAction({ type: ERRORS, payload: data.error, dispatch });
    }
  }
};
