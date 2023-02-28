import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Keyboard,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import COLORS from './colors';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Loader from '../../components/Loader';
import {Label} from 'react-native-form-component';
import Payment from './Payment';
import Elect from './Elect';
import Tabs from '../../navigation/Tabs';

const Cable = ({navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor: COLORS.white, flex: 1}}>
      <Loader />
      <ScrollView
        contentContainerStyle={{paddingTop: 50, paddingHorizontal: 20}}>
        <Text style={{color: COLORS.black, fontSize: 40, fontWeight: 'bold'}}>
          Cable Tv
        </Text>
        <Text style={{color: COLORS.grey, fontSize: 18, marginVertical: 10}}>
          Pay bills for different utilities and service
        </Text>
        <View style={{marginVertical: 20}}>
          <Input
            iconName="email-outline"
            label="Service Provider"
            placeholder="DSTV"
          />

          <Input
            iconName="lock-outline"
            label="Customer ID"
            placeholder="3434393434"
            password
          />
          <Input
            iconName="lock-outline"
            label="Service"
            placeholder="Dstv compact"
            password
          />
          <Input
            iconName="lock-outline"
            label="Amount"
            placeholder="1000"
            password
          />

          <TouchableOpacity>
            <Button
              title="Recharge"
              onPress={() => navigation.navigate(Elect)}
            />
          </TouchableOpacity>
          <Text
            style={{
              color: COLORS.black,
              fontWeight: 'bold',
              textAlign: 'center',
              fontSize: 16,
            }}></Text>
        </View>
      </ScrollView>
      <Tabs />
    </SafeAreaView>
  );
};

export default Cable;
