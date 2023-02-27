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
import Cable from './Cable';
import Tabs from '../../navigation/Tabs';

const Payment = ({navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor: COLORS.white, flex: 1}}>
      <Loader />
      <ScrollView
        contentContainerStyle={{paddingTop: 50, paddingHorizontal: 20}}>
        <Text style={{color: COLORS.black, fontSize: 40, fontWeight: 'bold'}}>
          Payment Method
        </Text>
        <Text style={{color: COLORS.grey, fontSize: 18, marginVertical: 10}}>
          Set how you want to recharge
        </Text>
        <View style={{marginVertical: 20}}>
          <Input
            iconName="email-outline"
            label="Debit Card"
            placeholder="---- ---- ---- ----"
          />

          <Input
            iconName="lock-outline"
            label="Enter your password to confirm "
            placeholder="******"
            password
          />

          <TouchableOpacity>
            <Button
              title="Recharge"
              onPress={() => navigation.navigate(Cable)}
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
        <Tabs />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Payment;
