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
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import Loader from '../../../components/Loader';
import Forgot from '../forgot/Forgot';

const Register = ({navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor: COLORS.white, flex: 1}}>
      <Loader />
      <ScrollView
        contentContainerStyle={{paddingTop: 50, paddingHorizontal: 20}}>
        <Text style={{color: COLORS.black, fontSize: 40, fontWeight: 'bold'}}>
          Register
        </Text>
        <Text style={{color: COLORS.grey, fontSize: 18, marginVertical: 10}}>
          Enter Your Details to Register
        </Text>
        <View style={{marginVertical: 20}}>
          <Input
            iconName="email-outline"
            label="Email"
            placeholder="Enter your email address"
          />

          <Input
            iconName="account-outline"
            label="Full Name"
            placeholder="Enter your full name"
          />

          <Input
            keyboardType="numeric"
            iconName="phone-outline"
            label="Phone Number"
            placeholder="Enter your phone no"
          />
          <Input
            iconName="lock-outline"
            label="Password"
            placeholder="Enter your password"
            password
          />

          <TouchableOpacity>
            <Button
              title="Register"
              onPress={() => navigation.navigate(Forgot)}
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;
