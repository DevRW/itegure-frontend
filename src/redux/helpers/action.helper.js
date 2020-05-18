import { IS_AUTH, SUBSCRIPTION_TOKEN, IS_SUBSCRIBED } from '../subscriptions/types';
export const dispatchAction = ({ type, payload, dispatch }) => {
  dispatch({ type, payload });
};
export const setStorage = ({ item, value }) => {
  sessionStorage.setItem(item, value);
};

export const getStorage = (item) => {
  const value = sessionStorage.getItem(item);
  return value;
};
export const removeItem = (item) => {
  sessionStorage.removeItem(item);
};
export const logout = () => {
  removeItem(IS_AUTH);
  removeItem(SUBSCRIPTION_TOKEN);
  removeItem(IS_SUBSCRIBED);
  window.location.href = '/';
};

export const customMinutes = (value) => {
  const date = new Date(value);
  if (date.getMinutes() < 10) {
    return `0${date.getMinutes()}`;
  }
  return date.getMinutes();
};

export const customHours = (value) => {
  const date = new Date(`${value}`);
  if (date.getHours() < 10) {
    return `0${date.getHours()}`;
  }
  return date.getHours();
};
