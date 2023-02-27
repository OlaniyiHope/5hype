import React from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from '../../components/Button';
import OnboardingScreen from '../OnboardingScreen';
import History from './History';

/*import Share from 'react-native-share';*/

//import files from '../assets/filesBase64';

const Legal = ({navigation}) => {
  /*const myCustomShare = async () => {
    const shareOptions = {
      message:
        "Order your next meal from FoodFinder App. I've already ordered more than 10 meals on it.",
      url: files.appLogo,
      // urls: [files.image1, files.image2]
    };

    try {
      const ShareResponse = await Share.open(shareOptions);
      console.log(JSON.stringify(ShareResponse));
    } catch (error) {
      console.log('Error => ', error);
    }
  };*/

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.userInfoSection}>
          <View style={{marginTop: 15}}>
            {/*} <Avatar.Image
            source={{
              uri: 'https://api.adorable.io/avatars/80/abott@adorable.png',
            }}
            size={80}
        />*/}
            <View>
              <Title
                style={[
                  styles.title,
                  {
                    marginTop: 25,
                    marginBottom: 15,
                  },
                ]}>
                Legal
              </Title>
            </View>
          </View>
        </View>

        <View style={styles.menuWrapper}>
          <TouchableRipple onPress={() => {}}>
            <View style={styles.menuItem}>
              <Icon name="heart-outline" color="#FF6347" size={25} />
              <Text style={styles.menuItemText}>Terms and condition</Text>
              <Icon
                name="phone"
                color="#777777"
                size={20}
                style={{marginLeft: 170}}
              />
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => {}}>
            <View style={styles.menuItem}>
              <Icon name="credit-card" color="#FF6347" size={25} />
              <Text style={styles.menuItemText}>Disclaimer</Text>
              <Icon
                name="phone"
                color="#777777"
                size={20}
                style={{marginLeft: 240}}
              />
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={{}}>
            <View style={styles.menuItem}>
              <Icon name="share-outline" color="#FF6347" size={25} />
              <Text style={styles.menuItemText}>Policies</Text>
              <Icon
                name="phone"
                color="#777777"
                size={20}
                style={{marginLeft: 250}}
              />
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={{}}>
            <View style={styles.menuItem}>
              <Icon name="share-outline" color="#FF6347" size={25} />
              <Text style={styles.menuItemText}>Faqs</Text>
              <Icon
                name="phone"
                color="#777777"
                size={20}
                style={{marginLeft: 260}}
              />
            </View>
          </TouchableRipple>
        </View>

        <TouchableOpacity>
          <Button
            title="Continue"
            onPress={() => navigation.navigate(History)}
          />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Legal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 18,

    fontWeight: '500',
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
});
