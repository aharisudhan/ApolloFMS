import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { ButtonGroup } from 'react-native-elements';
import React, { Component } from 'react';
import { assets } from './sample.js';
import { Card, ListItem, Icon, Button } from 'react-native-elements';
import Colors from '../resources/Colors';
export class AssetsLists extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
    };
  }
  render() {
    const { selectedIndex } = this.state;
    return (
      <View style={{}}>
        <View>
          <ButtonGroup
            buttons={['Pending', 'Tracked', 'Filter']}
            selectedIndex={selectedIndex}
            onPress={value => {
              this.setState({ selectedIndex: value });
            }}
            containerStyle={{ marginBottom: 10 }}
          />
        </View>
        <Card
          containerStyle={{
            borderRadius: 10,
          }}>
          {assets?.asset_details.map((res, i) => (
            <View>
              <TouchableOpacity
                onPress={() => {
                  // this.props.navigation.navigate('Home');
                }}>
                <ListItem
                  key={i}
                  bottomDivider
                  hasTVPreferredFocus={undefined}
                  tvParallaxProperties={undefined}>
                  {/* <Icon name={res.icon} /> */}
                  <ListItem.Content>
                    <View
                      style={{
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                        display: 'flex',
                        alignItems: 'center',
                        // backgroundColor: 'gray',
                        width: '100%',
                      }}>
                      <Text>{i + 1}</Text>
                      <View
                        style={{
                          width: 240,
                          // backgroundColor: 'blue',
                          // overflow: 'hidden',
                          // whiteSpace: 'no-warp',
                        }}>
                        <ListItem.Title
                          style={styles.listTitle}
                          numberOfLines={1}>
                          {res.ASSET_NAME}
                        </ListItem.Title>
                        <ListItem.Subtitle>
                          {res.ASSET_CODE}/{res.LOCATIONID_SYSTEM}/
                          {res.ASSETID_SYSTEM}
                        </ListItem.Subtitle>
                      </View>
                    </View>
                  </ListItem.Content>
                  <ListItem.Chevron />
                </ListItem>
              </TouchableOpacity>
            </View>
          ))}
        </Card>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  listTitle: {
    // overflow: 'hidden',
    // whiteSpace: 'nowarp',
    textOverflow: 'ellipsis',
    // fontSize: 16,
    color: Colors.textBlue,
  },
});
export default AssetsLists;
