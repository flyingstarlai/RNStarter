import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import navReducer from './navigation';


const rootReducer = combineReducers({
  nav: navReducer,
  form: formReducer,
});

export default rootReducer;
