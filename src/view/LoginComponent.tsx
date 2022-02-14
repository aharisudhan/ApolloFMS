import React from 'react';
import { ComponentBase } from 'resub';
import { Statusbar } from './common-components/Statusbar';
import { Retry } from './common-components/Retry';
import strings from '../resources/strings';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  Alert,
  View,
  Image,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Keyboard,
  Platform,
  SafeAreaView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  ToastAndroid,
  BackHandler,
  Switch,
} from 'react-native';
import { Container, Toast } from 'native-base';
import { ActivityIndicatorComponent } from './common-components/ActivityIndicatorComponent';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../resources/Colors';
import ImageAssets from '../assets/images';
import { LoginState, LoginViewModel } from '../view-model/LoginViewModel';
import { DependencyInjector } from '../dependency-injector/DependencyInjector';
import constants from '../resources/constants';
export class LoginComponent extends ComponentBase<any, LoginState> {

  private viewModel: LoginViewModel = DependencyInjector.default().provideLoginViewModel();
  constructor(props: any) {
    super(props);
    this.toggleSwitch = this.toggleSwitch.bind(this);
  }

  private onMobileNumberChange(mobileNumber) {
    this.viewModel.set('mobileNumber', mobileNumber);
    if (mobileNumber.length === 10) {
      Keyboard.dismiss();
      this.viewModel.set('isMobileNumberFilled', true);
    } else {
      this.viewModel.set('isMobileNumberFilled', false);
    }
  }
  private currentCount: number = 0;
  backPressHandler = () => {
    if (this.currentCount < 1) {
      this.currentCount += 1;
      ToastAndroid.showWithGravity(
        'Press again to exit!',
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
      );
    } else {
      BackHandler.exitApp();
    }
    setTimeout(() => {
      this.currentCount = 0;
    }, 2000);
  };
  onButtonPress = () => {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  };
  handleBackButton = () => {
    if (Platform.OS === 'ios') {
      return;
    }
    this.backPressHandler();
    return true;
  };
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }

  componentWillUnmount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }

  componentDidUpdate() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    let errorMessage;
  }
  toggleSwitch() {

    this.viewModel.set("showPassword", !this.state.showPassword);
  }

  private clearTextfieldErrors() {
    this.viewModel.set('mobileNumberValidationError', undefined);
    this.viewModel.set('passwordValidationError', undefined);
  }

  protected _buildState() {
    return this.viewModel.getState();
  }
  public render() {
    const {email, password} = this.state;
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}>
        <Container style={styles.container}>
          <LinearGradient colors={[Colors.testing, Colors.cardTeamGradiantend]}>
            <SafeAreaView />
            <Statusbar barcolor={Colors.testing} barcontent="light-content" />

            <KeyboardAvoidingView style={styles.formHolder}>
              <View style={styles.loginImageHolder}>
                <View style={styles.loginImage}>
                  <Image style={styles.logoImage} source={ImageAssets.splash} />
                </View>
              </View>
              <View style={styles.welcomeVolunteersTextHolder}>
                <Text style={styles.welcomeText}>Welcome to Apollo FMS</Text>
                <Text style={styles.VolunteersProgramText}>
                  A Integrated Facility Management Services
                </Text>
              </View>
              <View style={styles.horizontalRule} />
              <View style={styles.inputsHolder}>
                <Text
                  style={[
                    styles.countryCodeText,
                    { color: Colors.textPrimaryLite },
                  ]}>
                  {this.state.isFocus ? '+91 ' : ' '}
                </Text>
                <View style={styles.passwordContainer}>
                  <TextInput
                    style={[
                      styles.passwordField,
                      this.state.mobileNumberValidationError === undefined
                        ? { borderColor: '#DDDDDD' }
                        : { borderColor: '#F03737' },
                      this.state.isFocus ? { paddingLeft: 28 } : null,
                    ]}
                    maxLength={10}
                    value={this.state.mobileNumber}
                    placeholder={
                      this.state.isFocus ? '' : 'Mobile number'
                    }
                    placeholderTextColor="#CACFD2"
                    keyboardType="phone-pad"
                    onChangeText={value => {
                      this.onMobileNumberChange(value);
                      this.clearTextfieldErrors();
                    }}
                    onSubmitEditing={() => {
                      Keyboard.dismiss();
                      this.viewModel.verifyLogin();
                    }}
                    returnKeyType="done"
                    onFocus={() => {
                      this.viewModel.setMany({
                        ...this.state,
                        isErrorCardShow: false,
                        isFocus: true,
                        isUserBlocked: false,
                        error: undefined,
                      });
                    }}
                  />
                </View>
                <View >
                  {/* <TextInput
                    style={[
                      styles.textField,
                      this.state.otpValidationError === undefined
                        ? { borderColor: '#DDDDDD' }
                        :
                        { borderColor: '#F03737' },
                      { marginTop: Platform.OS === 'ios' ? 30 : 20 },
                    ]}
                    maxLength={5}
                    // value={this.state.otp}
                    placeholder={
                      this.state.isPasswordFocus ? '' : 'Enter your password'
                    } placeholderTextColor="#AAAAAA"
                    secureTextEntry={this.state.showPassword}
                    underlineColorAndroid="transparent"
                    keyboardType="default"
                    onChangeText={value => {
                      // this.onOtpChange(value);
                      // this.clearTextfieldErrors();
                    }}
                    onSubmitEditing={() => {
                      Keyboard.dismiss();
                      // this.viewModel.verifyOtp();
                    }}
                    returnKeyType="done"
                    onFocus={() => {
                      this.viewModel.setMany({
                        ...this.state,
                        isErrorCardShow: false,
                        isPasswordFocus: true,
                        isUserBlocked: false,
                        error: undefined,
                      });
                    }}
                  /> */}

                  <View style={styles.passwordContainer}>
                    <TextInput
                      style={[
                        styles.passwordField,
                        this.state.otpValidationError === undefined
                          ? { borderColor: '#DDDDDD' }
                          :
                          { borderColor: '#F03737' },
                        { marginTop: Platform.OS === 'ios' ? 30 : 20 },
                      ]}
                      minLength={8}
                      // value={this.state.otp}
                      placeholder={
                        this.state.isPasswordFocus ? '' : 'Password'
                      } placeholderTextColor="#CACFD2"
                      secureTextEntry={this.state.showPassword}
                      underlineColorAndroid="transparent"
                      keyboardType="default"
                      onChangeText={value => {
                        // this.onOtpChange(value);
                        // this.clearTextfieldErrors();
                      }}
                      onSubmitEditing={() => {
                        Keyboard.dismiss();
                        // this.viewModel.verifyOtp();
                      }}
                      returnKeyType="done"
                      onFocus={() => {
                        this.viewModel.setMany({
                          ...this.state,
                          isErrorCardShow: false,
                          isPasswordFocus: true,
                          isUserBlocked: false,
                          error: undefined,
                        });
                      }}
                    />
                    <Icon style={{ marginTop: 40 }} name={this.state.showPassword ? 'eye-slash' : 'eye'} color={Colors.textPrimaryLite}
                      size={20} onPress={() => this.toggleSwitch()} />
                  </View>
                </View>

                {/* 
                {this.state.otpValidationError ? (
                  <View style={{ height: 13 }}>
                    <Text style={styles.errorText}>
                      {this.state.otpValidationError.message}
                    </Text>
                  </View>
                ) : null} */}

                <TouchableOpacity
                  disabled={false}
                  style={styles.loginButton}
                  onPress={() => {
                    Keyboard.dismiss();
                    // this.viewModel.verifyOtp();
                  }}>
                  <Text style={styles.sendOTPText}>Login</Text>
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>

            {/* {this.state.isLoading ? (
              <ActivityIndicatorComponent isTransperant={true} />
            ) : null}
            {this.state.isErrorCardShow && this.state.error ? (
              <ErrorModalComponent navigation={this.props.navigation} />
            ) : null}
            {this.state.isUserBlocked && this.state.error ? (
              <ErrorModalComponent navigation={this.props.navigation} />
            ) : null} */}
          </LinearGradient>
        </Container>
      </TouchableWithoutFeedback>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.cardTeamGradiantend,
  },
  logoHolder: {
    marginTop: 20,
    marginHorizontal: 108,
    marginBottom: 20,
    alignSelf: 'center',
  },
  loginImageHolder: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
    top: -50,
    alignSelf: 'center',
    height: 110,
    width: 110,
    borderRadius: 55,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: Platform.OS === 'ios' ? 0.1 : 0.5,
    shadowRadius: 38,
    elevation: 2,
  },
  loginImage: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#1CB3E9',
    height: 95,
    width: 95,
    borderRadius: 55,
  },
  formHolder: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 26,
    marginTop: '40%',
    marginBottom: '55%',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: Platform.OS === 'ios' ? 0.1 : 0.5,
    shadowRadius: 38,
    elevation: 2,
    height: 440,
  },
  welcomeVolunteersTextHolder: {
    justifyContent: 'center',
    marginTop: 77,
  },
  welcomeText: {
    height: 21,
    color: '#777777',
    fontFamily: 'JosefinSans-Regular',
    fontSize: 16,
    fontWeight: '300',
    lineHeight: 21,
    textAlign: 'center',
    marginBottom: 2,
  },
  VolunteersProgramText: {
    height: 21,
    color: '#1C97AB',
    fontFamily: 'JosefinSans-Bold',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 21,
    textAlign: 'center',
    marginBottom: 2,
  },
  horizontalRule: {
    backgroundColor: '#EEEEEE',
    height: 1,
    width: '100%',
    marginTop: 10,
  },
  inputsHolder: {
    marginHorizontal: 34,
  },
  countryCodeText: {
    color: '#CCCCCC',
    fontFamily: 'JosefinSans-Regular',
    fontSize: 14,
    fontWeight: '300',
    letterSpacing: 0,
    lineHeight: 21,
    position: 'absolute',
    left: 0,
    top: Platform.OS === 'ios' ? 38 : 54,
  },
  textField: {
    // flex: 1,
    borderBottomWidth: 1.0,
    marginTop: 40,
    fontWeight: '300',
    color: "#AAA",
    fontFamily: 'JosefinSans-Regular',
  },

  passwordField: {
    flex: 1,
    borderBottomWidth: 1.0,
    marginTop: 40,
    fontWeight: '300',
    color: "#AAA",
    fontFamily: 'JosefinSans-Regular',
  },
  errorText: {
    height: 13,
    color: '#F03737',
    fontFamily: 'JosefinSans-Regular',
    fontSize: 10,
    fontWeight: '300',
    letterSpacing: 0,
    lineHeight: 13,
  },
  resendOtpButton: {
    height: 14,
    width: 100,
    position: 'absolute',
    zIndex: 10,
    right: 0,
    bottom: Platform.OS === 'ios' ? 0 : 17,
    fontFamily: 'JosefinSans-Regular',
  },
  resendOtpText: {
    color: '#a60909',
    fontSize: 11,
    fontWeight: '400',
    textAlign: 'right',
    fontFamily: 'JosefinSans-Bold',
    lineHeight: 14,
  },
  resendOtpTimerText: {
    color: '#CBCBCB',
    fontFamily: 'JosefinSans-Bold',
    fontSize: 10,
    fontWeight: '400',
    letterSpacing: 0,
    lineHeight: 13,
    textAlign: 'right',
  },
  loginButton: {
    justifyContent: 'center',
    height: 36,
    borderRadius: 2,
    backgroundColor: '#2E86C1',
    alignItems: 'center',
    marginHorizontal: 14,
    marginTop: 34,
    shadowColor: '#a60909',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: Platform.OS === 'ios' ? 0.1 : 0.5,
    shadowRadius: 38,
    fontFamily: 'JosefinSans-Regular',
    elevation: 2,
  },
  loginText: {
    height: 21,
    color: '#fff',
    fontFamily: 'JosefinSans-Bold',
    fontSize: 16,
    lineHeight: 21,
    textAlign: 'center',
  },
  sendOTPText: {
    height: 21,
    color: '#fff',
    fontFamily: 'JosefinSans-Regular',
    fontSize: 16,
    lineHeight: 21,
    textAlign: 'center',
  },
  termsAndPrivacyHolder: {
    marginTop: 25,
    paddingTop: 5,
  },
  termsAndPrivacyAgreementText: {
    color: '#AAAAAA',
    fontFamily: 'JosefinSans-Bold',
    fontSize: 10,
    fontWeight: '400',
    lineHeight: 13,
  },
  termsAndPrivacyText: {
    height: 26,
    width: 233,
    color: '#00AD7E',
    fontFamily: 'JosefinSans-Regular',
    fontSize: 10,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  logoImage: {
    flex: 1,
    alignSelf: 'stretch',
    width: 90,
    height: 100,
  },
  passwordContainer: {
    flexDirection: 'row',
  },

});