import React from 'react';
import {SafeAreaView, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Register from './auth/register/Register';

const HomeScreen = ({navigation}) => {
  setTimeout(() => {
    navigation.navigate(Register);
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
