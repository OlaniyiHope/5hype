import React from 'react';
import {SafeAreaView, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Login from './auth/login/Login';

const HomeScreen = ({navigation}) => {
  setTimeout(() => {
    navigation.navigate(Login);
  }, 9000);

  return (
    <SafeAreaView style={{backgroundColor: '#ff4500', height: '100%'}}>
      <Text
        style={{color: 'white', fontSize: 50, textAlign: 'center', top: 300}}>
        5hype
      </Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
