import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Button from '../components/Button';
import {SIZES, FONTS, icons, images} from '../constants2';
import COLORS from '../conts/colors';
import Wallet from './wallet/Wallet';

const Homes = ({navigation}) => {
  const featuresData = [
    {
      id: 1,
      icon: icons.reload,
      color: COLORS.purple,
      backgroundColor: COLORS.lightpurple,
      description: 'Buy Airtime',
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
    {
      id: 5,
      icon: icons.internet,
      color: COLORS.red,
      backgroundColor: COLORS.lightRed,
      description: 'Internet',
    },
    {
      id: 6,
      icon: icons.internet,
      color: COLORS.red,
      backgroundColor: COLORS.lightRed,
      description: 'Internet',
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
      <View style={{flexDirection: 'row', marginVertical: SIZES.padding * 2}}>
        <View style={{flex: 1}}>
          <Text style={{...FONTS.h1}}>Good morning </Text>
          <Text style={{...FONTS.body2, color: COLORS.gray}}>John Doe</Text>
        </View>

        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <TouchableOpacity
            style={{
              height: 40,
              width: 40,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: COLORS.lightGray,
            }}>
            <Image
              source={icons.bell}
              style={{
                width: 20,
                height: 20,
                tintColor: COLORS.secondary,
              }}
            />
            <View
              style={{
                position: 'absolute',
                top: -5,
                right: -5,
                height: 10,
                width: 10,
                backgroundColor: COLORS.red,
                borderRadius: 5,
              }}></View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  function renderBanner() {
    return (
      <View
        style={{
          height: 120,
          borderRadius: 20,
        }}>
        <View
          style={{
            backgroundColor: COLORS.blue,
            height: 140,
            borderRadius: 10,
            width: '100%',
          }}>
          <Text
            style={{
              ...FONTS.h4,
              color: COLORS.white,
              textAlign: 'center',
              paddingTop: 20,
            }}>
            Total balance
          </Text>
          <Text
            style={{
              ...FONTS.h1,
              color: COLORS.white,
              textAlign: 'center',
              paddingTop: 20,
            }}>
            ₦56,000
          </Text>
        </View>
      </View>
    );
  }

  function renderFeatures() {
    const Header = () => (
      <View style={{marginBottom: SIZES.padding * 2}}>
        <Text style={{...FONTS.h3}}>Quick Options</Text>
      </View>
    );

    const renderItem = ({item}) => (
      <TouchableOpacity
        style={{
          marginBottom: SIZES.padding * 2,
          width: 60,
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
              height: 30,
              width: 60,
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
        numColumns={3}
        columnWrapperStyle={{justifyContent: 'space-between'}}
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
        {renderBanner()}
        {renderFeatures()}
        {renderPromoHeader()}
      </View>
    );

    const renderPromoHeader = () => (
      <View
        style={{
          flexDirection: 'row',
          marginBottom: SIZES.padding,
        }}>
        <View style={{flex: 1}}>
          <Text style={{...FONTS.h3}}>Recent Activities</Text>
        </View>
        <TouchableOpacity onPress={() => console.log('View All')}>
          <Text style={{color: COLORS.gray, ...FONTS.body4}}>View All</Text>
        </TouchableOpacity>
      </View>
    );

    const renderItem = ({item}) => (
      <TouchableOpacity
        style={{
          marginVertical: SIZES.base,
          width: SIZES.width / 2.5,
        }}
        onPress={() => console.log(item.title)}>
        <View
          style={{
            height: 40,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}></View>

        <View
          style={{
            padding: SIZES.padding,
            backgroundColor: COLORS.lightGray,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}>
          <Text style={{...FONTS.h4}}>{item.title}</Text>
          <Text style={{...FONTS.body4}}>{item.date}</Text>
        </View>
      </TouchableOpacity>
    );

    return (
      <FlatList
        ListHeaderComponent={HeaderComponent}
        contentContainerStyle={{paddingHorizontal: SIZES.padding * 2}}
        numColumns={2}
        data={recentActivitys}
        keyExtractor={item => `${item.id}`}
        renderItem={renderItem}
        showsVerticalScrollIndicator={true}
        ListFooterComponent={<View style={{marginBottom: 80}}></View>}
      />
    );
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      {renderPromos()}
      <TouchableOpacity>
        <Button title="Continue" onPress={() => navigation.navigate(Wallet)} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Homes;
