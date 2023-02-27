import React from 'react';
import {Text, View, Image, TouchableOpacity } from 'react-native';
import HomeScreen from '../HomeScreen';
import OnboardingScreen from '../OnboardingScreen';
import styles from './Style';

const Act = ({navigation}) => {
    return(
      
<View style={styles.container} >

    <View style={styles.bannercontainer}>
    <Image source={require("../../images/image1.png")} style={styles.banner} />
    </View>
    <View style={styles.titlecontainer}>
    <Text style={styles.title}>Your account has being verified</Text>
    
    </View>
<TouchableOpacity onPress={()=>navigation.navigate(OnboardingScreen)} style={styles.button}>
<Text style={styles.buttonText}>Sign In</Text>
</TouchableOpacity>

</View>
 
    );
    
}

export default Act;