import React from 'react';
import {ComponentBase} from 'resub';
import {Text, View} from 'react-native';
import {Button} from 'native-base';

export class Retry extends ComponentBase<any, any> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
        }}>
        <View
          style={[
            {
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              marginHorizontal: 20,
            },
            this.props.style ? this.props.style : null,
          ]}>
          <Text
            style={{
              color: '#212b3888',
              fontFamily: 'JosefinSans-Regular',
              fontSize: 14,
            }}>
            {this.props.message}
          </Text>
          <Button
            transparent
            style={{alignItems: 'center', justifyContent: 'center'}}
            onPress={this.props.onRetry}>
            <Text style={{color: '#1264A3'}}>
              {' '}
              {this.props.buttonText ? this.props.buttonText : 'Retry'}{' '}
            </Text>
          </Button>
        </View>
      </View>
    );
  }
}
