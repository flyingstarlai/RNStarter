import { SwitchNavigator } from 'react-navigation';

import Loader from '../container/LoaderContainer';
import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';

export default SwitchNavigator({
  Loader,
  Auth: AuthNavigator,
  App: AppNavigator,
}, { initialRouteName: 'Loader' });
