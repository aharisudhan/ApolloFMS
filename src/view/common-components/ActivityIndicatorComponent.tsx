import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {ComponentBase} from 'resub';

export class ActivityIndicatorComponent extends ComponentBase<any, any> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    let userInteractionEnabled = true;
    if (this.props.userInteractionEnabled != undefined) {
      userInteractionEnabled = this.props.userInteractionEnabled;
    }
    return (
      <View
        pointerEvents={userInteractionEnabled ? 'auto' : 'none'}
        style={[
          styles.container,
          this.props.style ? this.props.style : {},
          this.props.isTransperant
            ? {backgroundColor: 'transparent'}
            : {backgroundColor: 'white'},
        ]}>
        <ActivityIndicator size="large" color="#24113f" />
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
