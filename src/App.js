import React from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import { addListener } from './boot/navigationRedux';
import Navigator from './navigator';

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
