import {Text, View, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import {Button, Card, Icon} from 'react-native-elements';
import {AnimatedCircularProgress} from 'react-native-circular-progress';

export default class Bottom extends Component {
  render() {
    return (
      <View>
        <View></View>
        <View>
          <Card
            containerStyle={{
              marginTop: 15,
              borderRadius: 10,
              alignItems: 'center',
            }}>
            <Button
              title="Start"
              icon={{
                name: 'hourglass-start',
                type: 'font-awesome',
                size: 15,
                color: 'white',
              }}
              iconContainerStyle={{marginRight: 10}}
              titleStyle={{fontWeight: '700'}}
              buttonStyle={{
                backgroundColor: 'rgba(90, 154, 230, 1)',
                borderColor: 'transparent',
                borderWidth: 0,
                borderRadius: 30,
              }}
              containerStyle={{
                width: 150,
                marginHorizontal: 50,
                // height: 40,
              }}
            />
          </Card>
          <Card
            containerStyle={{
              marginTop: 15,
              borderRadius: 10,
              alignItems: 'center',
            }}>
            <View style={{alignItems: 'center'}}>
              <AnimatedCircularProgress
                size={60}
                width={5}
                fill={80}
                tintColor="rgba(90, 154, 230, 1)"
                onAnimationComplete={() => console.log('onAnimationComplete')}
                backgroundColor="#3d5875">
                {fill => <Text>{6}</Text>}
              </AnimatedCircularProgress>
            </View>
            <View
              style={{
                // alignItems: 'center',
                justifyContent: 'space-evenly',
                flexDirection: 'row',
                // flex: 1,
              }}>
              <Button
                title="Take Break"
                icon={{
                  name: 'flash',
                  type: 'font-awesome',
                  size: 15,
                  color: 'white',
                }}
                iconContainerStyle={{marginRight: 10}}
                titleStyle={{fontWeight: '700'}}
                buttonStyle={{
                  backgroundColor: 'rgba(90, 154, 230, 1)',
                  borderColor: 'transparent',
                  borderWidth: 0,
                  borderRadius: 30,
                }}
                containerStyle={{
                  width: 150,
                  marginHorizontal: 50,
                  marginVertical: 10,
                }}
              />
              <Button
                title="End Day"
                icon={{
                  name: 'calendar-check-o',
                  type: 'font-awesome',
                  size: 15,
                  color: 'white',
                }}
                iconContainerStyle={{marginRight: 10}}
                titleStyle={{fontWeight: '700'}}
                buttonStyle={{
                  backgroundColor: 'rgba(90, 154, 230, 1)',
                  borderColor: 'transparent',
                  borderWidth: 0,
                  borderRadius: 30,
                }}
                containerStyle={{
                  width: 150,
                  marginHorizontal: 50,
                  marginVertical: 10,
                }}
              />
            </View>
          </Card>
        </View>
        <View>
          <Card>
            <View>
              <View>
                <Icon
                  reverse
                  name="ios-american-football"
                  type="ionicon"
                  color="#517fa4"
                  onTextLayout={undefined}
                  dataDetectorType={undefined}
                />
                <Text>Assets</Text>
              </View>
            </View>
            <Icon
              reverse
              name="ios-american-football"
              type="ionicon"
              color="#517fa4"
            />
            <Icon
              reverse
              name="ios-american-football"
              type="ionicon"
              color="#517fa4"
            />
            <Icon
              reverse
              name="ios-american-football"
              type="ionicon"
              color="#517fa4"
            />
            <Icon
              reverse
              name="ios-american-football"
              type="ionicon"
              color="#517fa4"
            />
          </Card>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fonts: {
    marginBottom: 8,
  },
  user: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    marginTop: 5,
  },
});
