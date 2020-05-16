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
