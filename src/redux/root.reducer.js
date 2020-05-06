import { combineReducers } from 'redux';
import subscriptions from './subscriptions/reducers';
export const rootReducer = combineReducers({
  subscriptions,
});
