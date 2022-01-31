import React from 'react';
import { TouchableOpacity, View, StyleSheet, Keyboard } from 'react-native';
import { ComponentBase } from 'resub';
import { Container, Text, Input, Item } from 'native-base';
import Colors from '../resources/Colors';
import { Statusbar } from './common-components/Statusbar';
import { Retry } from './common-components/Retry';
import strings from '../resources/strings';
export class LoginComponent extends ComponentBase<any, any> {

  constructor(props: any) {
    super(props);
  }
  public render() {
    return (
      <Container style={styles.container}>
        <Statusbar barcolor={Colors.white} barcontent="dark-content" />
          <View style={styles.content}>
            <View>
              <Item style={styles.mobileNumberItem}>
                <Text
                  style={[
                    styles.phoneNo,
                    { color: Colors.textPrimaryLite, marginLeft: 10 },
                  ]}>
                    
                  {/* {this.state.isFocus ? strings.text_nine_one_number : ' '}{' '} */}
                </Text>
                <Input
                  placeholder={
                    strings.enter_mobile_number
                  }
                  keyboardType="number-pad"
                  // value={this.state.mobileNumber}
                  maxLength={10}
                  style={
                     styles.placeholder
                  }
                  // onChangeText={value => {
                  //   this.textIsChanging(value);
                  // }}
                  onSubmitEditing={() => {
                    Keyboard.dismiss();
                    // this.viewModel.generateOtp();
                  }}
                  // onFocus={() => {
                  //   this.viewModel.setMany({
                  //     ...this.state,
                  //     isErrorCardShow: false,
                  //     isFocus: true,
                  //     isUserBlocked: false,
                  //     error: undefined,
                  //   });
                  // }}
                />
              </Item>
              <View style={{ margin: 15, marginTop: 55 }}>
                <TouchableOpacity
                  // disabled={!this.state.isMobileNumberFilled}
                  style={[
                    styles.loginButton,
                    {
                      backgroundColor:Colors.buttonActive
                    },
                  ]}
                  onPress={() => {
                    // this.viewModel.generateOtp();
                  }}>
                  <Text
                    style={[
                      styles.loginText,
                      {
                        color:  Colors.TextColor,
                      },
                    ]}>
                    {strings.login_button_text}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
      </Container>
    );
  }

  // protected _buildState() {
  //   return this.viewModel.getState();
  // }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  content: {
    margin: 10,
    flex: 1,
    marginTop: 20,
  },
  hiText: {
    fontFamily: 'JosefinSans-Regular',
    fontSize: 20,
    letterSpacing: -0.4,
    padding: 16,
    marginTop: 20,
  },
  welcomeText: {
    fontFamily: 'JosefinSans-Regular',
    marginLeft: 16,
    fontSize: 16,
    color: Colors.textTertiaryDark,
    lineHeight: 22,
    marginBottom: 2,
  },
  image: {
    height: 30,
    width: 30,
  },
  loginButton: {
    alignSelf: 'center',
    width: '100%',
    height: 55,
    justifyContent: 'center',
    borderRadius: 28,
  },
  loginText: {
    fontSize: 15,
    alignSelf: 'center',
    textAlign: 'center',
  },
  phoneNo: {
    fontSize: 24,
    fontWeight: '500',
    fontFamily: 'JosefinSans-Medium',
    letterSpacing: 1.73,
  },
  placeholder: {
    fontSize: 14,
  },
  errorText: {
    marginLeft: 10,
    fontSize: 12,
  },
  mobileNumberItem: {
    marginTop: 64,
    marginLeft: 16,
    marginRight: 16,
    borderBottomWidth: 1,
  },
});
