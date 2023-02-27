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
import Change from '../change/Change';

const Forgot = ({navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor: COLORS.white, flex: 1}}>
      <Loader />
      <ScrollView
        contentContainerStyle={{paddingTop: 50, paddingHorizontal: 20}}>
        <Text style={{color: COLORS.black, fontSize: 40, fontWeight: 'bold'}}>
          Forgot password
        </Text>
        <Text style={{color: COLORS.grey, fontSize: 18, marginVertical: 10}}>
          Enter Your Email to recover password
        </Text>
        <View style={{marginVertical: 20}}>
          <Input
            iconName="email-outline"
            label="Email"
            placeholder="Enter your email address"
          />

          <TouchableOpacity>
            <Button
              title="Sign in"
              onPress={() => navigation.navigate(Change)}
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
    </SafeAreaView>
  );
};

export default Forgot;
