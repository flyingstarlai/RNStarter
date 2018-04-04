import { NavigationActions } from 'react-navigation';

import * as types from '../actions/actionTypes';
import Navigator from '../navigator';
// const { AppNavigator.router } = AppNavigator;

const firstAction = Navigator.router.getActionForPathAndParams('Root');
const initialState = Navigator.router.getStateForAction(firstAction);


const reducer = (state = null, action) => {
  let nextState;
  switch (action.type) {
    case (types.NAVIGATION_ROOT):
      nextState = Navigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Root' }),
        state,
      );
      break;
    case (types.NAVIGATION_AUTH):
      nextState = Navigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Auth' }),
        state,
      );
      break;
    case (types.NAVIGATION_MAIN):
      nextState = Navigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Main' }),
        state,
      );
      break;
    default:
      nextState = Navigator.router.getStateForAction(action, state);
      break;
  }

  return nextState || state;
};

export default reducer;
