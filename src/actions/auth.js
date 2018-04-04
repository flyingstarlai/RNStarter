import * as types from './actionTypes';

export const authInit = login => ({
  type: types.AUTH_INITIAL,
  payload: login,
});

export const authStart = () => ({
  type: types.AUTH_START,
});

export const authSuccess = user => ({
  type: types.AUTH_SUCCESS,
  payload: user,
});

export const authFail = error => ({
  type: types.AUTH_FAIL,
  payload: error,
});
