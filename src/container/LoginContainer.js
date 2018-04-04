import React from 'react';
import { Form, Button, Text } from 'native-base';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import * as actions from '../actions';

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
        <Button block onPress={this.props.handleSubmit(values => this.props.onLogin(values))}>
          <Text>Login</Text>
        </Button>
      </Form>
    );
    return (
      <LoginScreen
        navigation={this.props.navigation}
        loginForm={form}
        error={this.props.authError}
        loading={this.props.authLoading}
     />
    );
  }
}

const LoginContainer = reduxForm({
  form: 'login',
})(Login);

const mapStateToProps = state => ({
  authLoading: state.auth.loading,
  authError: state.auth.error,
});

const mapDispatchToProps = dispatch => ({
  onLogin: payload => dispatch(actions.authInit(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
