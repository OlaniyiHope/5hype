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
import Tabs from '../../navigation/Tabs';

const Airtime = ({navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor: COLORS.white, flex: 1}}>
      <Loader />
      <ScrollView
        contentContainerStyle={{paddingTop: 50, paddingHorizontal: 20}}>
        <Text style={{color: COLORS.black, fontSize: 40, fontWeight: 'bold'}}>
          Airtime
        </Text>
        <Text style={{color: COLORS.grey, fontSize: 18, marginVertical: 10}}>
          Pay bills for different utilities and service
        </Text>
        <View style={{marginVertical: 20}}>
          <Input
            iconName="email-outline"
            label="Service Provider"
            placeholder="Airtel"
          />

          <Input
            iconName="lock-outline"
            label="Recipent phone number"
            placeholder="+234703439434"
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
              onPress={() => navigation.navigate(Payment)}
            />
          </TouchableOpacity>
          <Text
            style={{
              color: COLORS.black,
              fontWeight: 'bold',
              textAlign: 'center',
              fontSize: 16,
            }}>
            Already have account ?Login
          </Text>
        </View>
        <Tabs />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Airtime;
