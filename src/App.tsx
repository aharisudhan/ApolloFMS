import * as React from 'react';
import 'react-native-gesture-handler';
import { ComponentBase } from 'resub';
import AsyncStorage from '@react-native-community/async-storage';
import { TouchableOpacity, Image, StyleSheet, Text } from 'react-native';
import { Root, View, Icon, Badge } from 'native-base';
import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator,
} from 'react-navigation';
import Colors from './resources/Colors';
import ImageAssets from './assets/images';
import { DashBoardComponent } from './view/DashBoardComponent';
import strings from './resources/strings';
import { SettingsComponent } from './view/SettingsComponent';
import { SplashScreen } from './view/SplashScreen';
import { LoginComponent } from './view/LoginComponent';
export default class App extends ComponentBase<any, any> {

  constructor(props: {}) {
    super(props);
  }

  render(): any {
    const NavStacks = createStackNavigator(
      {
        DashBoardComponent: {
          screen: DashBoardComponent,
          navigationOptions: ({ navigation }) => ({
            headerStyle: {
              backgroundColor: Colors.white,
              height: 60,
            },
            headerForceInset: { top: 'never', bottom: 'never' },
            headerTitle: (
              <View style={{ flexDirection: 'row' }}>
                <View style={styles.headerView}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.openDrawer();
                    }}
                    style={[
                      styles.imageStyle,
                      { margin: 10, flexDirection: 'row' },
                    ]}>
                    <Image source={ImageAssets.menu} />
                  </TouchableOpacity>
                </View>
                <View style={styles.headerView1}>
                  <Text
                    style={[
                      styles.headerTitleText,
                      { color: Colors.buttonActive },
                    ]}>
                    {strings.dashboard_text}
                  </Text>
                </View>
                <View style={styles.headerView2}>
                  <TouchableOpacity
                    onPress={() => {
                      console.log('navigation to notific');
                    }}
                    style={[
                      styles.imageStyle,
                      { margin: 10, flexDirection: 'row' },
                    ]}>
                    <Icon
                      ios="ios-notifications"
                      android="md-notifications"
                      style={styles.notiIcon}
                    />
                    <Badge
                      warning
                      style={{ height: 10, marginLeft: -20, marginTop: 5 }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            ),
          }),
        },
      },
      {
        headerLayoutPreset: 'center',
      },
    );
    const navContainer = createAppContainer(NavStacks);

    const DrawerNavigator = createDrawerNavigator(
      {
        HomeContainer: {
          screen: navContainer,
        },
      },
      {
        initialRouteName: 'HomeContainer',
        contentComponent: SettingsComponent,
        drawerWidth: 300,
      },
    );
    const DrawerContainer = createAppContainer(DrawerNavigator);
    const NavStack = createStackNavigator(
      {
        SplashScreen: {
          screen: SplashScreen,
          navigationOptions: ({ navigation }) => ({
            header: null,
          }),
        },
        LoginComponent: {
          screen: LoginComponent,
          navigationOptions: ({ navigation }) => ({
            header: null,
          }),
        },
        Home: {
          screen: DrawerContainer,
          navigationOptions: ({ navigation }) => ({
            headerForceInset: { top: 'never', bottom: 'never' },
            header: null,
            headerBackTitle: null,
          }),
        },
      },
      {
        headerLayoutPreset: 'center',
      },
    );
    const NavStackkContainer = createAppContainer(NavStack);

    return (
      <Root>
        <DrawerContainer />
        {/* <NavStackkContainer /> */}
      </Root>
    );
  }
}

const styles = StyleSheet.create({
  imageStyle: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginRight: 25,
    marginLeft: 15,
  },
  headerTitleText: {
    fontSize: 22,
    fontFamily: 'JosefinSans-Bold',
    color: Colors.buttonActive,
    marginLeft: 25,
  },
  headerNavigationTitleText: {
    fontSize: 22,
    fontFamily: 'JosefinSans-Bold',
    color: Colors.buttonActive,
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 0.25,
  },
  headerView1: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 0.55,
  },
  headerView2: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 0.2,
  },
  notiIcon: {
    color: Colors.backBtn,
    height: 30,
    width: 30,
  },
});
