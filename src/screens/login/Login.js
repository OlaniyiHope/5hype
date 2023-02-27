import React from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import Act from '../act/Act';
import HomeScreen from '../HomeScreen';
const Login = ({navigation}) => {
  return (
    <SafeAreaView>
   
       <TouchableOpacity
               
                onPress={() => navigation.navigate(Act)}>
                <Text>
                 Login
                </Text>
              </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Login;
