import React, { Component } from 'react';
import { KeyboardAvoidingView, Text, Button, StyleSheet, TextInput, Image } from 'react-native';
import { storeAuthToken, getAuthToken } from '../services/auth';
import Map from '../assets/images/map.png';

class LoginScreen extends Component {
  constructor() {
    super();
    this.state = {
      authToken: undefined,
      tokenError: false,
    };
  }

  async componentDidMount() {
    const authToken = await getAuthToken();
    // if (authToken === 'PPPP') {
    //   this.props.navigation.navigate('Main');
    // }
  }

  onInputChange = (authToken) => {
    this.setState({ authToken });
  }

  handleSignIn = () => {
    if(this.state.authToken === 'PPPP') {
      storeAuthToken(this.state.authToken);
      this.props.navigation.navigate('Main');
    } else if (this.state.authToken) {
      this.setState({ tokenError: true });
    }
  }

  render() {
    return(
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <Image source={Map} style={styles.image} />
        <Text style={styles.title}>Scavenger Hunt</Text>
        <Text style={styles.year}>2019</Text>
        {
          this.state.tokenError && <Text style={styles.error}>Enter Valid Token, Ask Joe</Text>
        }
        <TextInput
          style={styles.textInput}
          placeholder="Enter Code"
          value={this.state.authToken}
          maxLength={4}
          autoCapitalize="characters"
          onChangeText={this.onInputChange}
          onSubmitEditing={this.handleSignIn}
        />
        <Button
          title="Login"
          onPress={this.handleSignIn}
          color="#2374AB"
        />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: '#06BEE1',
    fontSize: 64,
    fontWeight: "700",
    textAlign: "center",
  },
  year: {
    color: '#06BEE1',
    fontWeight: "700",
    fontSize: 110,
  },
  error: {
    color: 'red',
    fontSize: 16,
    fontWeight: "600",
    paddingBottom: 12,
  },
  textInput: {
    fontSize: 64,
    fontWeight: "700",
    color: "#2374AB"
  },
  image: {
    height: 200,
    width: 200,
  }
});

export default LoginScreen;
