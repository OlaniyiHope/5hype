import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import OnboardingScreen from './src/screens/OnboardingScreen';
import {StatusBar} from 'react-native';
import COLORS from './src/screens/consts/colors';
import HomeScreen from './src/screens/HomeScreen';
import Act from './src/screens/act/Act';
import OnBoardScreen2 from './src/screens/OnBoardScreen2';
import HomeScreen2 from './src/screens/HomeScreen2';
import CartScreen from './src/screens/CartScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import Tabs from './src/navigation/Tabs';
import {Home, OrderDelivery, Restaurant} from './src/screens';
import Homes from './src/screens/Homes';
import SignIn from './src/screens/auth/signin/SignIn';
import HomeSc from './src/screens/HomeSc';
import Register from './src/screens/auth/register/Register';
import Forgot from './src/screens/auth/forgot/Forgot';
import Change from './src/screens/auth/change/Change';
import Airtime from './src/screens/bills/Airtime';
import Payment from './src/screens/bills/Payment';
import Cable from './src/screens/bills/Cable';
import Elect from './src/screens/bills/Elect';
import Wallet from './src/screens/wallet/Wallet';
import What from './src/screens/bills/What';
import Pay from './src/screens/bills/Pay';
import Profile from './src/screens/profile/Profile';
import Legal from './src/screens/profile/Legal';
import History from './src/screens/profile/History';
import Limit from './src/screens/wallet/Limit';
import Login from './src/screens/auth/login/Login';
const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: 'transparent',
  },
};

const App = () => {
  return (
    <NavigationContainer theme={theme}>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="/"
          component={HomeScreen}
          screenOptions={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          screenOptions={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          screenOptions={{headerShown: false}}
        />
        <Stack.Screen
          name="HomeSc"
          component={HomeSc}
          screenOptions={{headerShown: false}}
        />
        <Stack.Screen
          name="Change"
          component={Change}
          screenOptions={{headerShown: false}}
        />
        <Stack.Screen
          name="Forgot"
          component={Forgot}
          screenOptions={{headerShown: false}}
        />
        <Stack.Screen
          name="OnboardingScreen"
          component={OnboardingScreen}
          screenOptions={{headerShown: false}}
        />

      
        <Stack.Screen
          name="Act"
          component={Act}
          screenOptions={{headerShown: false}}
        />
        <Stack.Screen
          name="Homes"
          component={Homes}
          screenOptions={{headerShown: false}}
        />
        <Stack.Screen
          name="Airtime"
          component={Airtime}
          screenOptions={{headerShown: false}}
        />
        <Stack.Screen
          name="Cable"
          component={Cable}
          screenOptions={{headerShown: false}}
        />
        <Stack.Screen
          name="Elect"
          component={Elect}
          screenOptions={{headerShown: false}}
        />
        <Stack.Screen
          name="Payment"
          component={Payment}
          screenOptions={{headerShown: false}}
        />
        <Stack.Screen
          name="Legal"
          component={Legal}
          screenOptions={{headerShown: false}}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          screenOptions={{headerShown: false}}
        />

        <Stack.Screen
          name="SignIn"
          component={SignIn}
          screenOptions={{headerShown: false}}
        />
        <Stack.Screen
          name="Tabs"
          component={Tabs}
          screenOptions={{headerShown: false}}
        />
        <Stack.Screen
          name="Pay"
          component={Pay}
          screenOptions={{headerShown: false}}
        />
        <Stack.Screen
          name="History"
          component={History}
          screenOptions={{headerShown: false}}
        />
        <Stack.Screen
          name="What"
          component={What}
          screenOptions={{headerShown: false}}
        />
        <Stack.Screen
          name="Limit"
          component={Limit}
          screenOptions={{headerShown: false}}
        />
        <Stack.Screen
          name="Wallet"
          component={Wallet}
          screenOptions={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          screenOptions={{headerShown: false}}
        />
        <Stack.Screen
          name="OrderDelivery"
          component={OrderDelivery}
          screenOptions={{headerShown: false}}
        />
        <Stack.Screen
          name="Restaurant"
          component={Restaurant}
          screenOptions={{headerShown: false}}
        />
        <Stack.Screen
          name="DetailsScreen"
          component={DetailsScreen}
          screenOptions={{headerShown: false}}
        />
        <Stack.Screen
          name="CartScreen"
          component={CartScreen}
          screenOptions={{headerShown: false}}
        />
        <Stack.Screen
          name="OnBoardScreen2"
          component={OnBoardScreen2}
          screenOptions={{headerShown: false}}
        />
        <Stack.Screen
          name="HomeScreen2"
          component={HomeScreen2}
          screenOptions={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
