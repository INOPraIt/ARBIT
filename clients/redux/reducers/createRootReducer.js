import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import useReducer from './user.reducer';

export default (history) => combineReducers({
  user: useReducer,
  router: connectRouter(history)
});

