import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';
import Colors from '../resources/Colors';

export default class PasswordResetComponent extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      oldPassword: '',
      newPassword: '',
    };
  }
  render() {
    return (
      <View style={styles.container}>
        {/* <Image style={styles.image} source={ImageAssets.splash} /> */}

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Enter Your Old Password"
            placeholderTextColor=""
            onChangeText={pass => this.setState({oldPassword: pass})}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Enter New Password"
            placeholderTextColor=""
            secureTextEntry={true}
            onChangeText={password => this.setState({password: password})}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Confirm New Password"
            placeholderTextColor=""
            secureTextEntry={true}
            onChangeText={password => this.setState({newpassword: password})}
          />
        </View>

        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>Change Password</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cancelBtn}>
          <Text style={styles.loginText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    );
  }
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
  cancelBtn: {
    width: '80%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    backgroundColor: 'red',
  },
});
