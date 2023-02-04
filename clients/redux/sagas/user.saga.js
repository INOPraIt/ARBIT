import { takeEvery } from 'redux-saga/effects';
import userApi from '../../common/api/users.api';
import { bindAsyncActions } from '../../common/store/helper';
import  {
  createUser,
  createUserAsync
} from '../actions/users.actions';

function plugeWorker() {
  return true;
}

export function* userSaga() {
  yield takeEvery(createUser, bindAsyncActions(createUserAsync)(userApi.createUser));
}