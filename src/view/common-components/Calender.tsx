import React from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import DatePicker from 'react-native-datepicker';
import {ComponentBase} from 'resub';
import Colors from '../../resources/Colors';

export default class Calender extends ComponentBase<any, any> {
  render() {
    return (
      <View>
        <DatePicker
          style={{width: '80%', height: 45}}
          date={this.props.date}
          mode="date"
          placeholder="Choose date"
          format="DD-MM-YYYY"
          minDate="01-01-1919"
          maxDate={new Date()}
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          androidMode="spinner"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              marginLeft: 0,
              height: 20,
              width: 25,
            },
            dateInput: {
              marginTop: 3,
              borderLeftWidth: 0,
              borderRightWidth: 0,
              borderTopWidth: 0,
              marginLeft: 5,
              borderBottomWidth: 1,
              borderBottomColor: Colors.blueBerry,
            },
            dateText: {
              fontSize: 14,
              fontFamily: 'Roboto-Light',
              color: Colors.dashboardText,
              textAlign: 'left',
            },
            placeholderText: {
              fontSize: 14,
              fontFamily: 'Roboto-Light',
              color: Colors.textPrimaryLite,
            },
          }}
          onDateChange={date => {
            this.props.onChangeDate(date);
          }}
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
