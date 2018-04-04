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
    yield put(actions.navigateToMain());
  } catch (error) {
    yield put(actions.authFail(error.data));
  }
}

function* logout() {
  try {
    yield app.logout();
    yield put(actions.authLogout());
    yield put(actions.navigateToRoot());
  } catch (error) {
  }
}

export function* watchAuth() {
  yield takeEvery(types.AUTH_INITIAL, auth);
}

export function* watchAuthLogout() {
  yield takeEvery(types.AUTH_LOGOUT_INITIAL, logout);
}
