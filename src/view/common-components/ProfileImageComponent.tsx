import React from 'react';
import {ComponentBase} from 'resub';
import {Image, StyleSheet} from 'react-native';
import ImageAssets from '../../assets/images';

export default class ProfileImageComponent extends ComponentBase<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return <Image style={styles.ImageView1} source={ImageAssets.profile_pic} />;
  }
}

const styles = StyleSheet.create({
  ImageView: {
    alignSelf: 'center',
    height: 48,
    width: 48,
    borderRadius: 24,
  },
  ImageView1: {
    alignSelf: 'center',
    height: 40,
    width: 40,
    borderRadius: 20,
    marginLeft: 10,
  },
});
