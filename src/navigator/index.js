import { SwitchNavigator } from 'react-navigation';

import Root from '../container/RootContainer';
import MainNavigator from './MainNavigator';
import AuthNavigator from './AuthNavigator';

export default SwitchNavigator({
  Root,
  Auth: AuthNavigator,
  Main: MainNavigator,
}, { initialRouteName: 'Root' });
