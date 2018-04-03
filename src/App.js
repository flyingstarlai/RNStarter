import React from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import { addListener } from './boot/navigationRedux';
import Login from './container/LoginContainer';
import Main from './container/MainContainer';

import Navigator from './navigator';

export const AppNavigator = StackNavigator({
  Login: { screen: Login },
  Main: { screen: Main },
});


class App extends React.Component {
  render() {
    const { dispatch, nav } = this.props;
    return (
            <Navigator
                navigation={addNavigationHelpers({
                    dispatch,
                    state: nav,
                    addListener,
                })}
            />
    );
  }
}

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(App);
