import React from 'react';
import {SafeAreaView, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Login from './login/Login';
const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => navigation.navigate(Login)}>
        <Text>HOME</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeScreen;
