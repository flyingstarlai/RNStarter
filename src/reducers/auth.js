import { updateObject } from '../shared/utility';
import * as types from '../actions/actionTypes';

const initialState = {
  user: null,
  error: null,
  loading: false,
};

const authStart = state => updateObject(state, { loading: true, error: null });

const authSuccess = (state, { payload }) => updateObject(
  state,
  {
    user: payload,
    loading: false,
    error: null,
  },
);

const authFail = (state, { payload }) => updateObject(
  state,
  {
    user: null,
    loading: false,
    error: payload,
  },
);

const authLogout = state => updateObject(state, initialState);

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case (types.AUTH_START): return authStart(state);
    case (types.AUTH_SUCCESS): return authSuccess(state, action);
    case (types.AUTH_FAIL): return authFail(state, action);
    case (types.AUTH_LOGOUT): return authLogout(state);
    default: return state;
  }
};

export default reducer;
