import { combineReducers } from 'redux';
import userReducer from './reducer';

const rootReducer = combineReducers({
  user: userReducer,
  // Add other reducers if needed
});

export default rootReducer;
