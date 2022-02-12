import React from 'react';
import {ComponentBase} from 'resub';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import AssetsDetails from './AssetsDetails';
import FmsActivity from './FmsActivity';
import {LoginComponent} from './LoginComponent';
import PasswordResetComponent from './PasswordResetComponent';
import Bottom from './BottomComponent';
export class DashBoardComponent extends ComponentBase<any, any> {
  constructor(props) {
    super(props);
  }

  public render() {
    return (
      <View style={styles.container}>
        {/* <Text>Dashboard</Text> */}
        {/* <LoginComponent /> */}
        <Bottom />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  list: {
    paddingHorizontal: 5,
    backgroundColor: '#fff',
  },
  listContainer: {
    alignItems: 'center',
  },
  /******** card **************/
  card: {
    shadowColor: '#474747',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    flex: 0.5,
    elevation: 12,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 30,
    backgroundColor: '#e2e2e2',
    width: 120,
    height: 120,
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardHeader: {
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage: {
    height: 50,
    width: 50,
    alignSelf: 'center',
  },
  title: {
    fontSize: 15,
    flex: 1,
    alignSelf: 'center',
    fontFamily: 'JosefinSans-Bold',
  },
});
