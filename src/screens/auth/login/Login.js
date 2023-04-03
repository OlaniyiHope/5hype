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
import Register from '../register/Register';

const Login = ({navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor: COLORS.white, flex: 1}}>
      <Loader />
      <ScrollView
        contentContainerStyle={{paddingTop: 50, paddingHorizontal: 20}}>
        <Text style={{color: COLORS.black, fontSize: 40, fontWeight: 'bold'}}>
          Sign In
        </Text>
      
        <View style={{marginVertical: 20}}>
          <Input
            iconName="email-outline"
            label="Username/Email"
            placeholder="johndoe@gmail.com"
          />

          <Input
            iconName="account-outline"
            label="Password"
            placeholder="******"
          />

<Text
            style={{
              color: COLORS.black,
              fontWeight: 'bold',
              textAlign: 'center',
              fontSize: 16,
            }}>
            Forgot Password
          </Text>

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
          Not a user?   <TouchableOpacity onPress={() => navigation.navigate(Register)}><Text>create a new account</Text></TouchableOpacity>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
