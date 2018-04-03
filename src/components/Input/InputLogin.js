import React from 'react';
import { Item, Input, Icon } from 'native-base';

const InputLogin = ({
  input, label, type, meta: { touched, error, warning },
}) => (
  <Item error={error && touched}>
    <Icon active name={input.name === 'username' ? 'person' : 'unlock'} />
    <Input
      placeholder={input.name === 'username' ? 'Username' : 'Password'}
      secureTextEntry={input.name === 'password' }
      {...input}
    />
  </Item>
);

export default InputLogin;
