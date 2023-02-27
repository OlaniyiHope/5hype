import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  Touchable,
  FlatList,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ProfitIndicator, ActionCenter} from '../../components';
import Button from '../../components/Button';
import dummyData from '../../constants/Dummy';
import Tabs from '../../navigation/Tabs';
import Limit from '../wallet/Limit';

const History = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View style={{flex: 1}}>
          {/* Statusbar */}
          <StatusBar
            barStyle="light-content"
            translucent={true}
            backgroundColor="transparent"
          />
          {/* Header section */}

          {/* Body section */}
          <View
            style={{
              flex: 2.5,
              backgroundColor: '#fff',
              paddingHorizontal: wp('5%'),
            }}>
            {/* Action Center */}

            {/* My Assets */}
            <View style={{flexDirection: 'column'}}>
              {/* Text and button */}
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 30,
                  marginBottom: 60,
                }}>
                <Text
                  style={{
                    fontFamily: 'Roboto-Medium',
                    color: '#333',
                    fontSize: 22,
                  }}>
                  Transaction History
                </Text>
                <TouchableOpacity onPress={() => console.log('see all')}>
                  <Text
                    style={{
                      fontFamily: 'Roboto-Medium',
                      color: '#2249DA',
                      fontSize: 20,
                    }}>
                    See All
                  </Text>
                </TouchableOpacity>
              </View>

              {/* Horizontal asset slider */}
            </View>

            {/* Market */}
            <View style={{flex: 1, flexDirection: 'column'}}>
              {/* market text */}
              <Text
                style={{
                  fontFamily: 'Roboto-Bold',
                  fontSize: 22,
                  color: '#333',
                }}>
                All transaction history
              </Text>

              {/* coin list */}
              <FlatList
                keyExtractor={item => item.id}
                data={dummyData.coins}
                renderItem={({item}) => (
                  <View
                    style={{
                      flexDirection: 'row',
                      height: hp('10%'),
                      width: '100%',
                      borderWidth: 1,
                      borderColor: '#ddd',
                      borderRadius: 15,
                      justifyContent: 'space-between',
                      paddingRight: 10,
                      marginBottom: 10,
                    }}>
                    {/* Coin image ,coin name and symbol */}
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      {/* Coin image */}
                      <Image
                        style={{height: '65%'}}
                        resizeMode="contain"
                        source={item.image}
                      />

                      {/* Coin symbol */}
                      <View
                        style={{
                          flexDirection: 'column',
                          justifyContent: 'flex-start',
                        }}>
                        <Text
                          style={{
                            fontFamily: 'Roboto-Medium',
                            color: '#333',
                            fontSize: 20,
                          }}>
                          {item.currency}
                        </Text>
                        <Text
                          style={{
                            color: item.type == 'I' ? 'green' : 'red',
                            fontFamily: 'Roboto-Bold',
                            fontSize: 12,
                          }}>
                          {item.changes}
                        </Text>
                      </View>
                    </View>

                    {/* Coin price and indicator */}
                    <View
                      style={{
                        flexDirection: 'column',
                        backgroundColor: '#fff',
                        alignContent: 'center',
                        justifyContent: 'center',
                      }}>
                      {/* price */}
                      <Text
                        style={{
                          fontFamily: 'Roboto-Medium',
                          fontSize: 14,
                          color: '#333',
                        }}>
                        ${item.amount}
                      </Text>

                      {/* indicator */}
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}></View>
                    </View>
                  </View>
                )}
              />
            </View>
          </View>
        </View>
        <TouchableOpacity>
          <Button title="Continue" onPress={() => navigation.navigate(Limit)} />
        </TouchableOpacity>
        <Tabs />
      </ScrollView>
    </SafeAreaView>
  );
};

export default History;

const styles = StyleSheet.create({});
