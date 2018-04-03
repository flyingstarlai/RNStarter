import React from 'react';
import {
  Container,
  Content,
  Header,
  Body,
  Title,
  Button,
  Text,
  View,
  Icon,
  Footer,
} from 'native-base';

class Login extends React.Component {
  render() {
    return (
      <Container>
        <Header style={{ height: 200 }}>
          <Body style={{ alignItems: 'center' }}>
            <Icon name="flash" style={{ fontSize: 104 }} />
            <Title> ProcMaster </Title>
            <View padder>
              <Text style={{ color: '#FFF' }} >
                StarLai Dev
              </Text>
            </View>
          </Body>
        </Header>
        <Content>
          <View padder>
            {this.props.loginForm}
          </View>
        </Content>
        <Footer style={{ backgroundColor: '#F8F8F8' }}>
          <View style={{ alignItems: 'center', opacity: 0.5, flexDirection: 'row' }}>
              <Text style={{ color: '#000' }}>Made With Love</Text>
          </View>
        </Footer>
      </Container>
    );
  }
}

export default Login;
