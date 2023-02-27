import React from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import COLORS from '../screens/consts/colors';
import {PrimaryButton} from '../components/Button';

const OnBoardScreen2 = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <View
        style={{marginTop: 100, width: '80%', margin: 'auto', marginLeft: 40}}>
        <PrimaryButton title="About ue" />
      </View>
      <View style={style.textContainer}>
        <View>
          <Text
            style={{
              marginTop: 30,
              fontSize: 18,
              textAlign: 'center',
              color: COLORS.grey,
            }}>
            Hi Everyone, I am Hope Olaniyi from Lagos, Nigeria. I am a software
            developer, I build great mobile apps and web apps for companies,
            individuals and organization I love React Native and I use it for
            mobile app development, I'm also proficient in other Javascript
            framework like React Js, Next Js for Web App, Ionic and Expo for
            mobile app, bootstrap, tailwind css etc I am a graduate of Osun
            State University, Studied Physics with Electronics Apart from
            coding, i love playing chess, doing music, reading and watching
            movies
          </Text>
        </View>

        <PrimaryButton
          onPress={() => navigation.navigate('HomeScreen2')}
          title="View Projects"
        />
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  textContainer: {
    flex: 1,
    paddingHorizontal: 50,
    justifyContent: 'space-between',
    paddingBottom: 40,
  },
  indicatorContainer: {
    height: 50,
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  currentIndicator: {
    height: 12,
    width: 30,
    borderRadius: 10,
    backgroundColor: COLORS.primary,
    marginHorizontal: 5,
  },
  indicator: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: COLORS.grey,
    marginHorizontal: 5,
  },
});

export default OnBoardScreen2;
