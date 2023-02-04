import { handleActions } from "redux-actions";

import {
  createUserAsync
} from '../actions/users.actions';

const initialState = {
  state: [],
  error: null
};

export default handleActions({
  [createUserAsync.failed]: (s, a) => ({ ...s, state: [], error: 'Что-то пошло не так'}),
  [createUserAsync.success]: (s, a) => ({
    ...s,
    state: a.payload.data && a.payload.data.user._id
  })
},  initialState);
