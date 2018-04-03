import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
})
class Main extends React.Component {
  render() {
    return(
      <View style={styles.container}>
        <Text>Main Here</Text>
        <Button
          onPress={() => this.props.navigation.dispatch({ type: 'LOGIN'})}
          title='Go To Login'
        />
      </View>
    )
  }
}

Main.navigationOptions = {
  title: 'Main Screen',
}

export default Main;
