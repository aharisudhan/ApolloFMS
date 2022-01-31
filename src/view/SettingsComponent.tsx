import React from 'react';
import {ComponentBase} from 'resub';
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  StyleSheet,
  SafeAreaView,
  Alert,
  Linking,
} from 'react-native';
import {Item, Container, Content, ActionSheet, Icon} from 'native-base';
import ImageAssets from '../assets/images/';

import Colors from '../resources/Colors';
import ImagePicker from 'react-native-image-picker';
import ImageResizer from 'react-native-image-resizer';
import ProfileImageComponent from './common-components/ProfileImageComponent';
import strings from '../resources/strings';
import constants from '../resources/constants';

export class SettingsComponent extends ComponentBase<any, any> {

  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
    // this.viewModel.getProfileInfo();
    // const loggedInUser = this.viewModel.userRepository.getState().loggedInUser;
  }

  // protected _buildState() {
  //   return this.viewModel.getState();
  // }

  submit() {
    Alert.alert(
      '',
      strings.logout_alert_text,
      [
        {
          text: strings.no_text,
        },
        {
          text: strings.yes_text,
          onPress: () => {
            // const userRepository = DependencyInjector.default().provideUserRepository();
            // userRepository.signOut();
            // this.viewModel.reset();
          },
        },
      ],
      {cancelable: false},
    );
  }

  private async setPic(response) {
    try {
      const max_size = 800;
      let width = response.width;
      let height = response.height;
      if (width > height) {
        if (width > max_size) {
          height *= max_size / width;
          width = max_size;
        }
      } else {
        if (height > max_size) {
          width *= max_size / height;
          height = max_size;
        }
      }
      if (response.uri) {
        const resizedReponse = await ImageResizer.createResizedImage(
          response.uri,
          width,
          height,
          'JPEG',
          50,
          response.originalRotation,
        );
        response.uri = resizedReponse.uri;
        response.fileSize = resizedReponse.size;
        response.path = resizedReponse.path;
        // this.viewModel.uploadProfilePic(resizedReponse);
      }
    } catch (error) {}
  }

  render() {
    return (
      <Container style={styles.mainView}>
        <SafeAreaView />
        <Content>
          <View style={{margin: 12}}>
            <Item>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{flex: 0.3, marginLeft: 20}}>
                  <View style={styles.profilePhotoView}>
                    <TouchableOpacity
                      onPress={() => {
                        ActionSheet.show(
                          {
                            options: [
                              'Choose from Gallery',
                              'Capture from Camera',
                              'Cancel',
                            ],
                            cancelButtonIndex: 3,
                            title: 'Update Profile Pic',
                          },
                          buttonIndex => {
                            if (buttonIndex === 0) {
                              ImagePicker.launchImageLibrary({}, response => {
                                this.setPic(response);
                              });
                            } else if (buttonIndex === 1) {
                              ImagePicker.launchCamera({}, response => {
                                this.setPic(response);
                              });
                            }
                          },
                        );
                      }}
                      style={{
                        alignItems: 'flex-start',
                        alignSelf: 'flex-start',
                        position: 'absolute',
                        top: 5,
                        right: 5,
                      }}>
                      <ProfileImageComponent isEditProfile={true} />
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={{flex: 1}}>
                  <Text style={styles.name}>Harisudhan A</Text>
                  <Text style={styles.phoneNo}>7418192535</Text>
                </View>
              </View>
            </Item>
            <Text style={styles.titles}>{strings.gender_text}</Text>
            <Item>
              <Text style={styles.number}>Male</Text>
            </Item>
            <Text style={styles.titles}>{strings.email_text}</Text>
            <Item>
              <Text style={styles.number}>hariarul1995@gmail.com</Text>
            </Item>
            <Text style={styles.titles}>{strings.date_of_birth_text}</Text>
            <Item>
              <Text style={styles.number}>4th June</Text>
            </Item>
            <Item style={styles.logoutItem}>
              <TouchableOpacity
                style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon
                  ios="ios-settings"
                  android="md-settings"
                  style={styles.InfoIcon}
                />
                <Text style={styles.logout}>{strings.profile_edit_text}</Text>
              </TouchableOpacity>
            </Item>
            <Item style={styles.logoutItem}>
              <TouchableOpacity
                onPress={() => {
                  this.submit();
                }}
                style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon
                  ios="ios-log-out"
                  android="md-log-out"
                  style={styles.InfoIcon}
                />
                <Text style={styles.logout}>{strings.logout_text}</Text>
              </TouchableOpacity>
            </Item>
          </View>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.goBack();
            }}
            style={styles.closeButton}>
            <Icon ios="ios-close" android="md-close" style={styles.closeIcon} />
          </TouchableOpacity>
          <Text style={styles.versionInfo}>
            {strings.madewith}
            <Icon ios="ios-heart" android="md-heart" style={styles.madeIcon} />
          </Text>
        </Content>
        <View style={{alignItems: 'center'}}>
          <View style={styles.buttomItems}>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL(constants.facebookUrl);
              }}>
              <Icon
                ios="logo-facebook"
                android="logo-facebook"
                style={styles.facebookIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL(constants.instagramUrl);
              }}>
              <Icon
                ios="logo-instagram"
                android="logo-instagram"
                style={styles.instagramIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL(constants.twitterUrl);
              }}>
              <Icon
                ios="logo-twitter"
                android="logo-twitter"
                style={styles.twitterIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{margin: 10}}>
          <Text style={styles.versionInfo}>
            {strings.appVersion_text}
            {strings.appVersion_number}
          </Text>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: Colors.dashboardstatus,
  },
  closeButton: {
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 0,
  },
  profilePhotoView: {
    borderRadius: 48,
    height: 48,
    width: 48,
    justifyContent: 'center',
    backgroundColor: 'gray',
    marginBottom: 24,
    flexDirection: 'row',
  },
  name: {
    color: Colors.textSecondaryDark,
    fontFamily: 'JosefinSans-Regular',
    fontSize: 15,
    fontWeight: '300',
    textAlign: 'left',
  },
  number: {
    marginBottom: 10,
    marginLeft: 23,
    fontSize: 16,
    fontFamily: 'JosefinSans-Regular',
    fontWeight: '500',
    color: Colors.textTertiaryDark,
  },
  phoneNo: {
    color: Colors.textSecondaryDark,
    height: 42,
    lineHeight: 21,
    fontFamily: 'JosefinSans-Regular',
    fontSize: 17,
    fontWeight: '300',
    textAlign: 'left',
  },
  titles: {
    marginTop: 10,
    color: Colors.textTertiaryDark,
    fontSize: 13,
    textAlign: 'left',
    lineHeight: 14,
    marginLeft: 24,
    fontFamily: 'JosefinSans-Bold',
    height: 14,
    width: 86,
  },
  logoutItem: {
    alignSelf: 'auto',
    marginTop: 15,
    paddingBottom: 15,
  },
  logout: {
    marginLeft: 12,
    fontSize: 13,
    fontWeight: 'normal',
    alignSelf: 'center',
    textAlign: 'left',
    fontFamily: 'JosefinSans-Bold',
    color: Colors.textTertiaryDark,
  },
  versionInfo: {
    fontSize: 13,
    fontWeight: 'normal',
    alignSelf: 'center',
    fontFamily: 'JosefinSans-Regular',
    color: Colors.textTertiaryDark,
  },
  InfoIcon: {
    fontSize: 25,
    marginLeft: 23,
    color: Colors.settingsIcons,
    alignSelf: 'center',
  },
  madeIcon: {
    fontSize: 15,
    marginLeft: 10,
    color: Colors.dashboardSocialIcons,
    alignSelf: 'center',
  },
  facebookIcon: {
    fontSize: 40,
    margin: 10,
    color: Colors.faceBook,
  },
  twitterIcon: {
    fontSize: 40,
    margin: 10,
    color: Colors.twitter,
  },
  instagramIcon: {
    fontSize: 40,
    margin: 10,
    color: Colors.instagram,
  },
  buttomItems: {
    alignContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
  closeIcon: {
    fontSize: 25,
    marginLeft: 23,
    color: Colors.backBtn,
    alignSelf: 'center',
  },
  themeImg: {
    alignItems: 'flex-end',
    height: 30,
    width: 30,
    marginLeft: 75,
  },
});
