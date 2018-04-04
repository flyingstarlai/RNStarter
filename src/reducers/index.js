import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import navReducer from './navigation';
import authReducer from './auth';


const rootReducer = combineReducers({
  nav: navReducer,
  form: formReducer,
  auth: authReducer,
});

export default rootReducer;
