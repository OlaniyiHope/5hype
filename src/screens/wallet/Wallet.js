import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Button from '../../components/Button';
import Input from '../../components/Input';
import COLORS from '../../conts/colors';
import What from '../bills/What';

const Wallet = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <View
        style={{
          height: 120,
          borderRadius: 20,
          padding: 30,
        }}>
        <View
          style={{
            backgroundColor: COLORS.blue,
            height: 140,
            borderRadius: 10,
            width: '100%',
          }}>
          <Text
            style={{
              fontSize: 14,
              color: COLORS.white,
              textAlign: 'center',
              paddingTop: 20,
            }}>
            Total balance
          </Text>
          <Text
            style={{
              fontSize: 24,
              color: COLORS.white,
              textAlign: 'center',
              paddingTop: 20,
            }}>
            ₦56,000
          </Text>
        </View>
      </View>
      <Text
        style={{
          color: COLORS.black,
          fontSize: 18,
          marginVertical: 10,
          marginTop: 100,
        }}>
        Convert credit points to money
      </Text>
      <Text
        style={{
          color: COLORS.black,
          fontSize: 18,
          marginVertical: 10,
        }}>
        How much credit point do you want to convert
      </Text>
      <Input placeholder="45" />
      <TouchableOpacity>
        <Button
          style={{marginTop: 50}}
          title="Continue"
          onPress={() => navigation.navigate(What)}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Wallet;
