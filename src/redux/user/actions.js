import { ERRORS, PROFILE } from './types';
import axios from 'axios';
import { dispatchAction, setStorage } from '../helpers/action.helper';
import { IS_SUBSCRIBED, IS_AUTH, SUBSCRIPTION_TOKEN } from '../subscriptions/types';

export const login = ({ email, password }) => async (dispatch) => {
  try {
    const { data } = await axios.post('/users/signin', { email, password });
    const { token } = data.result;
    setStorage({ item: SUBSCRIPTION_TOKEN, value: token });
    setStorage({ item: IS_SUBSCRIBED, value: false });
    setStorage({ item: IS_AUTH, value: true });
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
