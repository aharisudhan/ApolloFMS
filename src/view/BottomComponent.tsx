import {Text, View, StyleSheet} from 'react-native';
import React, {
  Component,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import {Button, Card, Icon} from 'react-native-elements';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import moment, {Moment} from 'moment';

export default function Bottom() {
  const [start, useStart] = useState(false);
  const [startTime, SetStartTime] = useState<Moment>();
  const startDay = () => {
    useStart(true);
    const now = moment();
    SetStartTime(now);
    const end = moment().set('hour', 8);
    // console.log('now,end :>> ', now, end);
    // var duration = moment.duration(end.diff(now));
    // console.log('duration :>> ', duration);
    // var hours = duration.asHours();
    // console.log('hours :>> ', hours);
    // var a = moment('2016-06-06T21:03:55'); //now
    // var b = moment('2016-05-06T20:03:55');
    // console.log(a.diff(b, 'minutes')); // 44700
    // console.log(a.diff(b, 'hours')); // 745
    // console.log(a.diff(b, 'days')); // 31
    // console.log(a.diff(b, 'weeks')); //
  };

  const endDay = () => {
    useStart(false);
  };
  return (
    <>
      {!start ? (
        <Card
          containerStyle={{
            marginTop: 15,
            borderRadius: 10,
            alignItems: 'center',
            width: '100%',
            left: -14,
          }}>
          <View style={{alignItems: 'center'}}>
            <Icon
              raised
              name="hourglass-start"
              type="font-awesome"
              color="#f50"
              onPress={() => startDay()}
              size={30}
              tvParallaxProperties={undefined}
            />
            <Text>Start Day</Text>
          </View>
          {/* <Text>
              <Countdown eventTime={1626573600} interval={1000} />
            </Text> */}
        </Card>
      ) : (
        <Card
          containerStyle={{
            marginTop: 15,
            borderRadius: 10,
            alignItems: 'center',
            width: '100%',
            left: -14,
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
              onPress={() => endDay()}
            />
          </View>
        </Card>
      )}
    </>
  );
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

const calculateDuration = (eventTime: any) =>
  moment.duration(
    Math.max(eventTime - Math.floor(Date.now() / 1000), 0),
    'seconds',
  );

function Countdown({eventTime, interval}) {
  // const CurrentDate = moment().format();

  const [duration, setDuration] = useState(calculateDuration(eventTime));
  const timerRef = useRef(0);
  const timerCallback = useCallback(() => {
    setDuration(calculateDuration(eventTime));
  }, [eventTime]);

  useEffect(() => {
    timerRef.current = setInterval(timerCallback, interval);

    return () => {
      clearInterval(timerRef.current);
    };
  }, [eventTime]);

  return (
    <View>
      <Text>
        {duration.days()} Days {duration.hours()} Hours {duration.minutes()}{' '}
        Minutes {duration.seconds()} Seconds
      </Text>
    </View>
  );
}
