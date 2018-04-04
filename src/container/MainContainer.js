import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
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
class Main extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Main Here</Text>
        <Button
          onPress={() => this.props.onLogout()}
          title='Logout'
        />
      </View>
    );
  }
}

Main.navigationOptions = {
  title: 'Main Screen',
};

const mapDispatchToProps = dispatch => ({
  onLogout: () => dispatch(actions.authLogoutInit()),
});

export default connect(null, mapDispatchToProps)(Main);
