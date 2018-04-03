import { StackNavigator } from 'react-navigation';

import Login from '../container/LoginContainer';

export default StackNavigator({
  Login: { screen: Login },
}, { headerMode: 'none' });
