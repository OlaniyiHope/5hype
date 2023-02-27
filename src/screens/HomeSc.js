import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import Button from '../components/Button';
const HomeSc = ({navigation}) => {
  return (
    <View>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>Welcome</Text>
      <Button title="Logout" onPress={() => navigation.navigate('/')}></Button>
    </View>
  );
};

export default HomeSc;
