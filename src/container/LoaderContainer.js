import React from 'react';
import { View, Text, ActivityIndicator, StatusBar, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
class AuthLoading extends React.Component {
  componentDidMount() {
    this.props.navigation.dispatch({ type: 'LOGIN' });
  }

  render() {
    return (
      <View>
          <ActivityIndicator />
      </View>
    );
  }
}


export default AuthLoading;
