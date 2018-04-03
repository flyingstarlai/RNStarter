import { NavigationActions } from 'react-navigation';

import Navigator from '../navigator';
// const { AppNavigator.router } = AppNavigator;

const firstAction = Navigator.router.getActionForPathAndParams('Loader');
const initialState = Navigator.router.getStateForAction(firstAction);


const reducer = (state = null, action) => {
  let nextState;
  switch (action.type) {
    case ('LOGIN'):
      nextState = Navigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Auth' }),
        state,
      );
      break;
    case ('MAIN'):
      nextState = Navigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'App' }),
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
