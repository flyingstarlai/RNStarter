import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Container,
  Content,
  Header,
  Body,
  Title,
  Button,
  Toast,
  Text,
  View,
  Icon,
  Footer,
  Spinner,
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
              <Text>
                StarLai Dev
              </Text>
            </View>
          </Body>
        </Header>
        <Content>
          <View padder>
            {this.props.loading ? <Spinner color="blue"/> : null }
            {this.props.error ? <Text style={styles.textDanger}>{this.props.error.message}</Text> : null}
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

const styles = StyleSheet.create({
  textDanger: {
    fontSize: 20,
    color: '#FF1744',
    alignSelf: 'center',
  },
});

export default Login;
