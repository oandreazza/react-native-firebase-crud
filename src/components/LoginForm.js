import React, {Component} from 'react';
import { Text } from 'react-native';
import { Card, CardSection, MailField, Button, PasswordField, Spinner } from './common'

class LoginForm extends Component{
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  login = () => {
    const credential = {
      email: this.state.email,
      password: this.state.password
    }
    this.props.login(credential);
  }

  renderLoginButton = () => {
      return this.props.auth.loading ? <Spinner size="large" /> : <Button onPress={this.login.bind(this)}>Log in</Button>
  }

  render() {
    return(
      <Card>
        <CardSection>
            <MailField
              placeholder="your@email.com"
              label="User"
              value={this.state.email}
              onChangeText={email => this.setState({ email })}
           />
          </CardSection>
        <CardSection>
            <PasswordField
              placeholder="Your password..."
              label="Password"
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
             />
        </CardSection>
        <Text style={styles.errorStyle}>
          {this.props.auth.error}
        </Text>
        <CardSection>
          {this.renderLoginButton()}

        </CardSection>

      </Card>

    )
  }
}

const styles = {
  errorStyle: {
    fontSize: 18,
    color: 'red',
    alignSelf: 'center',
  }
}
export default LoginForm;
