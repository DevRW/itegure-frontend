import axios from 'axios';
import { dispatchAction, setStorage, removeItem } from '../helpers/action.helper';
import {
  ERRORS,
  LOGIN,
  SUBSCRIPTION_TOKEN,
  IS_AUTH,
  PROFILE,
  NAME,
  PHONE_NUMBER,
  CREATE_SUBSCRIPTION,
  READ_ALL_NOTIFICATION,
  IS_SUBSCRIBED,
} from './types';

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
    setStorage({ item: SUBSCRIPTION_TOKEN, value: token });
    setStorage({ item: IS_AUTH, value: true });
    setStorage({ item: IS_SUBSCRIBED, value: true });
    dispatchAction({ type: LOGIN, payload: message, dispatch });
    window.location.href = '/home';
  } catch (error) {
    if (error) {
      const { data } = error.response;
      dispatchAction({ type: ERRORS, payload: data.error, dispatch });
    }
  }
};

export const currentProfile = () => async (dispatch) => {
  try {
    const { data } = await axios.get('/subscriptions/read-profile');
    const { profile } = data.result;
    setStorage({ item: NAME, value: profile.name });
    setStorage({ item: PHONE_NUMBER, value: profile.phoneNumber });
    dispatchAction({ type: PROFILE, payload: data.result, dispatch });
  } catch (error) {
    if (error) {
      const { data } = error.response;
      dispatchAction({ type: ERRORS, payload: { errors: data.error }, dispatch });
    }
  }
};

export const unSubscribe = () => async (dispatch) => {
  try {
    await axios.delete('/subscriptions/unsubscribe');
    removeItem(IS_AUTH);
    removeItem(SUBSCRIPTION_TOKEN);
    removeItem(IS_SUBSCRIBED);
    window.location.href = '/';
  } catch (error) {
    const { data } = error.response;
    dispatchAction({ type: ERRORS, payload: { errors: data.error }, dispatch });
  }
};

export const subscribe = (information) => async (dispatch) => {
  dispatchAction({ type: ERRORS, payload: null, dispatch });
  try {
    const { data } = await axios.post(
      '/subscriptions/create-subscription',
      information
    );
    const { message } = data.result;
    dispatchAction({ type: CREATE_SUBSCRIPTION, payload: message, dispatch });
  } catch (error) {
    if (error) {
      const { data } = error.response;
      dispatchAction({ type: ERRORS, payload: data.error, dispatch });
    }
  }
};

export const viewNotifications = () => async (dispatch) => {
  dispatchAction({ type: ERRORS, payload: null, dispatch });
  try {
    const { data } = await axios.get('/notifications/read-sub-notification');
    dispatchAction({ type: READ_ALL_NOTIFICATION, payload: data.result, dispatch });
  } catch (error) {
    if (error) {
      const { data } = error.response;
      dispatchAction({ type: ERRORS, payload: data.error, dispatch });
    }
  }
};
