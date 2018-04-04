import React from 'react';
import { View, Text, ActivityIndicator, StatusBar, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
class Root extends React.Component {
  componentDidMount() {
    const { isAuthenticated, navigation } = this.props;
    if (isAuthenticated) navigation.dispatch(actions.navigateToMain());
    else navigation.dispatch(actions.navigateToAuth());
  }

  render() {
    return (
      <View>
          <ActivityIndicator />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.user,
});


export default connect(mapStateToProps)(Root);
