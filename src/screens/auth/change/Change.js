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
import Airtime from '../../bills/Airtime';

const Change = ({navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor: COLORS.white, flex: 1}}>
      <Loader />
      <ScrollView
        contentContainerStyle={{paddingTop: 50, paddingHorizontal: 20}}>
        <Text style={{color: COLORS.black, fontSize: 40, fontWeight: 'bold'}}>
          Change password
        </Text>

        <View style={{marginVertical: 20}}>
          <Input
            iconName="email-outline"
            label="Username/Email"
            placeholder="Enter your email address"
          />
          <Input
            iconName="email-outline"
            label="Password"
            placeholder="Enter your password "
          />

          <TouchableOpacity>
            <Button
              title="Reset"
              onPress={() => navigation.navigate(Airtime)}
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

export default Change;
