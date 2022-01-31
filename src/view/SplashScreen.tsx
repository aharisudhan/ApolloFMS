import React, {Component} from 'react';
import {View, Image} from 'react-native';
import ImageAssets from '../assets/images';
import Colors from '../resources/Colors';
import {Statusbar} from './common-components/Statusbar';

export class SplashScreen extends Component {
  constructor(props: any) {
    super(props);
  }
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('LoginComponent');
    }, 3000);
  }
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Statusbar barcolor={Colors.dashboardText} barcontent="light-content" />
        <Image source={ImageAssets.splash} />
      </View>
    );
  }
}
