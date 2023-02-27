import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {black} from 'react-native-paper/lib/typescript/styles/colors';
import Button from '../../components/Button';

import {SIZES, FONTS, icons, images} from '../../constants2';
import COLORS from '../../conts/colors';
import Pay from './Pay';

const What = ({navigation}) => {
  const featuresData = [
    {
      id: 1,
      icon: icons.reload,
      color: COLORS.purple,
      backgroundColor: COLORS.lightpurple,
      description: 'Airtime',
    },
    {
      id: 2,
      icon: icons.send,
      color: COLORS.yellow,
      backgroundColor: COLORS.lightyellow,
      description: 'Transfer',
    },

    {
      id: 3,
      icon: icons.bill,
      color: COLORS.yellow,
      backgroundColor: COLORS.lightyellow,
      description: 'Pay Bills',
    },

    {
      id: 4,
      icon: icons.phone,
      color: COLORS.red,
      backgroundColor: COLORS.lightRed,
      description: 'Remital',
    },
  ];

  const recentActivity = [
    {
      id: 1,

      title: 'Internet',
      date: '12/03/2023, 12:00pm',
    },
    {
      id: 2,

      title: 'Transfer',
      date: '12/03/2023, 12:00pm',
    },
    {
      id: 3,

      title: 'Airtime',
      date: '12/03/2023, 12:00pm',
    },
    {
      id: 4,

      title: 'Dstv',
      date: '12/03/2023, 12:00pm',
    },
  ];

  const [features, setFeatures] = React.useState(featuresData);
  const [recentActivitys, setrecentActivity] = React.useState(recentActivity);

  function renderHeader() {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginVertical: SIZES.padding * 2,
        }}></View>
    );
  }

  function renderFeatures() {
    const Header = () => (
      <View style={{marginBottom: SIZES.padding * 2}}>
        <Text style={{...FONTS.h3, textAlign: 'center'}}>
          What do you want to do
        </Text>
        <Text style={{...FONTS.h5, textAlign: 'center'}}>
          Below are the list of services we offer
        </Text>
      </View>
    );

    const renderItem = ({item}) => (
      <TouchableOpacity
        style={{
          marginBottom: SIZES.padding * 4,
          width: 150,
          borderWidth: 0.2,
          borderRadius: 6,
          padding: 20,
          margin: 'auto',
          marginLeft: 10,

          alignItems: 'center',
        }}
        onPress={() => console.log(item.description)}>
        <View
          style={{
            height: 50,
            width: 50,
            marginBottom: 5,
            borderRadius: 20,
            backgroundColor: item.backgroundColor,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={item.icon}
            resizeMode="contain"
            style={{
              height: 40,
              width: 70,
              tintColor: item.color,
            }}
          />
        </View>
        <Text style={{flexWrap: 'wrap', ...FONTS.body4}}>
          {item.description}
        </Text>
      </TouchableOpacity>
    );

    return (
      <FlatList
        ListHeaderComponent={Header}
        data={features}
        numColumns={2}
        columnWrapperStyle={{}}
        keyExtractor={item => `${item.id}`}
        renderItem={renderItem}
        style={{marginTop: SIZES.padding * 4}}
      />
    );
  }

  function renderPromos() {
    const HeaderComponent = () => (
      <View>
        {renderHeader()}

        {renderFeatures()}
        {renderPromoHeader()}
      </View>
    );

    const renderPromoHeader = () => (
      <View
        style={{
          flexDirection: 'row',
          marginBottom: SIZES.padding,
        }}></View>
    );

    return (
      <FlatList
        ListHeaderComponent={HeaderComponent}
        contentContainerStyle={{paddingHorizontal: SIZES.padding * 2}}
        numColumns={2}
        data={recentActivitys}
        keyExtractor={item => `${item.id}`}
        showsVerticalScrollIndicator={true}
        ListFooterComponent={<View style={{marginBottom: 80}}></View>}
      />
    );
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      {renderPromos()}
      <TouchableOpacity>
        <Button title="Continue" onPress={() => navigation.navigate(Pay)} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default What;
