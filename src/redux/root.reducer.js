import { combineReducers } from 'redux';
import subscriptions from './subscriptions/reducers';
import classes from './classes/reducers';
import students from './students/reducers';
import { userReducer } from './user/reducers';
export const rootReducer = combineReducers({
  subscriptions,
  classes,
  students,
  users: userReducer,
});
