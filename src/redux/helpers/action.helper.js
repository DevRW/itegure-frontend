export const dispatchAction = ({ type, payload, dispatch }) => {
  dispatch({ type, payload });
};
export const setStorage = ({ item, value }) => {
  localStorage.setItem(item, value);
};

export const getStorage = (item) => {
  const value = localStorage.getItem(item);
  return value;
};
