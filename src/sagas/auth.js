import { takeEvery, put } from 'redux-saga/effects';
import { app, usersService } from '../boot/feathers';
import * as types from '../actions/actionTypes';
import * as actions from '../actions';

function* auth({ payload }) {
  try {
    yield put(actions.authStart());
    const { accessToken } = yield app.authenticate({
      strategy: 'local-username',
      ...payload,
    });
    const { userId } = yield app.passport.verifyJWT(accessToken);
    const user = yield usersService.get(userId);
    yield put(actions.authSuccess(user));
  } catch (error) {
    yield put(actions.authFail(error.data));
  }
}

export function* watchAuth() {
  yield takeEvery(types.AUTH_INITIAL, auth);
}
