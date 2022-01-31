import React from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';

export class Statusbar extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <View>
        <StatusBar
          backgroundColor={this.props.barcolor}
          barStyle={this.props.barcontent}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
