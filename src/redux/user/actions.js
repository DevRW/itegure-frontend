import { ERRORS, PROFILE, EMAIL, VIEW_PARENTS } from './types';
import axios from 'axios';
import { dispatchAction, setStorage } from '../helpers/action.helper';
import {
  IS_SUBSCRIBED,
  IS_AUTH,
  SUBSCRIPTION_TOKEN,
  NAME,
} from '../subscriptions/types';

export const login = ({ email, password }) => async (dispatch) => {
  try {
    const { data } = await axios.post('/users/signin', { email, password });
    const { token, username } = data.result;
    setStorage({ item: SUBSCRIPTION_TOKEN, value: token });
    setStorage({ item: IS_SUBSCRIBED, value: false });
    setStorage({ item: IS_AUTH, value: true });
    setStorage({ item: NAME, value: username });
    setStorage({ item: EMAIL, value: email });
    window.location.href = '/itegure-dashboard';
  } catch (error) {
    const { data } = error.response;
    dispatchAction({ type: ERRORS, payload: data.error, dispatch });
  }
};

export const currentProfile = () => async (dispatch) => {
  try {
    const { data } = await axios.get('/api/v1/users/myprofile');
    dispatchAction({ type: PROFILE, payload: data.result, dispatch });
  } catch (error) {
    const { data } = error.response;
    dispatchAction({ type: ERRORS, payload: data.error, dispatch });
  }
};

export const viewAllParents = () => async (dispatch) => {
  dispatchAction({ type: ERRORS, payload: null, dispatch });
  try {
    const { data } = await axios.get('/users/read/parents');
    dispatchAction({ type: VIEW_PARENTS, payload: data.result, dispatch });
  } catch (error) {
    if (error) {
      const { data } = error.response;
      dispatchAction({ type: ERRORS, payload: data.error, dispatch });
    }
  }
};
