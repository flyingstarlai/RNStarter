import React from 'react';
import { Form, Button, Text } from 'native-base';
import { Field, reduxForm } from 'redux-form';

import LoginScreen from '../screens/LoginScreen';
import InputLogin from '../components/Input/InputLogin';

const required = value => (value ? undefined : 'Required');

class Login extends React.Component {
  render() {
    const form = (
      <Form>
        <Field
          name="username"
          component={InputLogin}
          validate={required}
        />
        <Field
          name="password"
          component={InputLogin}
          validate={required}
        />
        <Button block onPress={this.props.handleSubmit(values => console.log(values))}>
          <Text>Login</Text>
        </Button>
      </Form>
    );
    return (
      <LoginScreen
        navigation={this.props.navigation}
        loginForm={form}
  />
    );
  }
}

const LoginContainer = reduxForm({
  form: 'login',
})(Login);

export default LoginContainer;
