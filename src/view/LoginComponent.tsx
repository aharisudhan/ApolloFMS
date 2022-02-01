import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import {ComponentBase} from 'resub';
import {Container, Input, Item} from 'native-base';
import Colors from '../resources/Colors';
import {Statusbar} from './common-components/Statusbar';
import {Retry} from './common-components/Retry';
import strings from '../resources/strings';
import ImageAssets from '../assets/images';
export class LoginComponent extends ComponentBase<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }
  public render() {
    const {email, password} = this.state;
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={ImageAssets.splash} />

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Username"
            placeholderTextColor=""
            onChangeText={email => this.setState({email: email})}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password"
            placeholderTextColor=""
            secureTextEntry={true}
            onChangeText={password => this.setState({password: password})}
          />
        </View>

        {/* <TouchableOpacity>
          <Text style={styles.forgot_button}>Forgot Password?</Text>
        </TouchableOpacity> */}

        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    );
  }

  // protected _buildState() {
  //   return this.viewModel.getState();
  // }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    marginBottom: 15,
  },

  inputView: {
    backgroundColor: Colors.codeInputColor,
    borderRadius: 30,
    width: '80%',
    height: 50,
    marginBottom: 20,
    alignItems: 'center',
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    // marginLeft: 20,
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
  },

  loginBtn: {
    width: '80%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    backgroundColor: Colors.primary,
  },
  loginText: {
    color: 'white',
  },
});
