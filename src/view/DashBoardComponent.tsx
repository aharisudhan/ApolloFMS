import React from 'react';
import { ComponentBase } from 'resub';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  Alert
} from 'react-native';
import { Container, Item, Toast } from 'native-base'
import { Statusbar } from './common-components/Statusbar';
import Colors from '../resources/Colors';
import LinearGradient from 'react-native-linear-gradient'
import CardView from 'react-native-cardview';

export class DashBoardComponent extends ComponentBase<any, any> {
  constructor(props) {
    super(props);
  }


  public render() {
    return (
      <View style={styles.container}>
        <LinearGradient colors={[Colors.testing, Colors.lightblue]}>
          <Statusbar barcolor={Colors.testing} barcontent='dark-content' />
          <View
            style={styles.mainCard}>
            <View style={styles.mainView}>
              <View style={{ flex: 0.25, flexDirection: 'row', marginTop: 10, marginHorizontal: 8 }}>
                <View style={styles.itemView}>
                  <View style={styles.SubViewLeft}>
                    <CardView
                      cardElevation={5}
                      cardMaxElevation={5}
                      cornerRadius={10}
                      style={styles.cardLeft}
                    >
                      <LinearGradient
                        style={{ flex: 1 }}
                        colors={[Colors.white, Colors.white]}
                        start={{ x: 1, y: 0 }}
                        end={{ x: 1.0, y: 1.0 }}
                      >
                        <Text style={styles.textTop}> Maintenance </Text>
                        <View style={{ flex: 1, justifyContent: 'center' }}>
                          <Text style={styles.textCenter}> Icon </Text>
                          <Text style={styles.textBottom}> hello </Text>
                        </View>
                        <View style={{ height: 40 }}></View>
                      </LinearGradient>
                    </CardView>
                  </View>
                  <View style={styles.SubViewRight}>
                    <CardView
                      cardElevation={5}
                      cardMaxElevation={5}
                      cornerRadius={10}
                      style={styles.cardLeft}
                    >
                      <LinearGradient
                        style={{ flex: 1 }}
                        colors={[Colors.white, Colors.white]}
                        start={{ x: 1, y: 0 }}
                        end={{ x: 1.0, y: 1.0 }}
                      >
                        <Text style={styles.textTop}> FMS Activities </Text>
                        <View style={{ flex: 1, justifyContent: 'center' }}>
                          <Text style={styles.textCenter}> Icon </Text>
                          <Text style={styles.textBottom}> hello </Text>
                        </View>
                        <View style={{ height: 40 }}></View>
                      </LinearGradient>
                    </CardView>
                  </View>
                </View>
              </View>
              <View style={{ flex: 0.48, flexDirection: 'row', marginTop: 10, marginHorizontal: 8 }}>
              </View>
              <View style={{ flex: 0.25, flexDirection: 'row', marginTop: 10, marginHorizontal: 8 }}>
                <View style={styles.buttomCard}></View>

              </View>
            </View>
          </View>
        </LinearGradient>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: Colors.backgroundDashboard,
  },
  list: {
    paddingHorizontal: 5,
    backgroundColor: '#fff',
  },
  listContainer: {
    alignItems: 'center',
  },
  /******** card **************/
  mainCard: {
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,

    marginVertical: 5,
    backgroundColor: Colors.lightGrey,
    flexBasis: '97%',
    marginHorizontal: 5,
    borderRadius: 10,
  },
  iconCard: {
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,

    marginVertical: 3,
    backgroundColor: Colors.white,
    flexBasis: '100%',
    marginHorizontal: 1,
    borderRadius: 10,
  },
  buttomCard: {
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,

    marginVertical: 3,
    backgroundColor: Colors.white,
    flexBasis: '100%',
    marginHorizontal: 1,
    borderRadius: 10,
  },
  card: {
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,

    marginVertical: 5,
    backgroundColor: 'white',
    flexBasis: '45%',
    marginHorizontal: 5,
    borderRadius: 10,
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
  //test
  mainView: {
    flex: 1,
  },
  mainContainer: {
    backgroundColor: Colors.backgroundDashboard,
  },
  itemView: {
    flex: 1,
    justifyContent: 'space-between',
    borderBottomWidth: 0,
    flexDirection: 'row',
  },
  SubViewLeft: {
    flex: 0.5,
    marginRight: 4,
    width: '100%',
    alignItems: 'center',
  },
  SubViewRight: {
    flex: 0.5,
    marginLeft: 4,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
  },
  chartView: {
    marginLeft: 8,
    marginRight: 8,
  },
  cardFull: {
    width: '100%',
    height: '100%',
    opacity: 0.9,
  },
  cardLeft: {
    width: '100%',
    height: '100%',
    opacity: 0.9,
  },
  cardRight: {
    width: '100%',
    height: '100%',
    opacity: 0.9,
  },
  textTop: {
    marginTop: 8,
    marginLeft: 8,
    fontFamily: 'Roboto-Light',
    fontSize: 17,
    lineHeight: 21,
    fontWeight: '300',
    color: Colors.gradiantDarkgray,
  },
  textCenter: {
    fontFamily: 'Roboto-Light',
    fontSize: 36,
    fontWeight: '300',
    color: Colors.buttonTextPink,
    textAlign: 'center',
  },

  textBottom: {
    fontFamily: 'Roboto-Light',
    fontSize: 12,
    fontWeight: '300',
    color: Colors.dashboardText,
    textAlign: 'center',
  },

  inProgressValue: {
    fontFamily: 'Roboto',
    lineHeight: 30,
    fontSize: 11,
    fontWeight: 'bold',
    color: Colors.dashboardText,
    textAlign: 'center',
  },

  inProgressPoints: {
    fontFamily: 'Roboto',
    lineHeight: 30,
    fontSize: 11,
    fontWeight: 'bold',
    color: Colors.dashboardText,
    textAlign: 'center',
  },

  inProgressSuffix: {
    fontFamily: 'Roboto-Light',
    lineHeight: 30,
    fontSize: 11,
    fontWeight: '300',
    color: Colors.dashboardText,
    textAlign: 'center',
  },

  textRedeem: {
    fontFamily: 'Roboto-Regular',
    fontSize: 12,
    lineHeight: 30,
    fontWeight: 'normal',
    color: Colors.dashboardText,
  },
  horizondalLine: {
    borderBottomColor: Colors.textSecondaryLite,
    borderBottomWidth: 1,
    marginTop: 5,
    opacity: 0.5,
  },
  chart: {
    height: 300,
  },
  // bottom
  mainViewBottom: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: Colors.primary,
  },
  SubViewBottomCenter: {
    width: '100%',
    position: 'absolute',
    alignItems: 'center',
    bottom: 25,

  },
  bottomViewItem: {
    flex: 1,
  },
  mainTextBottom: {
    color: Colors.textTertiaryLite,
    fontFamily: 'Roboto-Medium',
    fontSize: 11,
    height: 15,
    fontWeight: '500',
    textAlign: 'center',

  },

  subTextBottom: {
    fontSize: 28,
    color: Colors.textTertiaryDark,
    fontFamily: 'Roboto-Light',
    textAlign: 'center',
    fontWeight: '300',
    height: 33,
  },
  outerCircleBottom: {
    borderRadius: 62,
    height: 120,
    width: 120,
    borderColor: Colors.backgroundDashboard,
    borderWidth: 10,
    justifyContent: 'center',
    bottom: '25%',
    backgroundColor: 'white',
  },
  innerCircleBottom: {
    borderRadius: 54,
    height: 108,
    width: 108,
    alignSelf: 'center',
    borderColor: Colors.circleBorder,
    borderWidth: 5,
    justifyContent: 'center',
  },

});
