import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../constants/Colors';

import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import Jumpers from '../screens/Jumpers';
import AboutUs from '../screens/AboutUs';


export default TabNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Links: {
      screen: LinksScreen,
    },
    Jumpers: {
      screen: Jumpers,
    },
    About: {
      screen: AboutUs,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Home':
            iconName =
              Platform.OS === 'ios'
                ? `ios-home${focused ? '' : '-outline'}`
                : 'md-home';
            break;
          case 'Links':
            iconName = Platform.OS === 'ios' ? `ios-trophy${focused ? '' : '-outline'}` : 'md-trophy';
            break;
          case 'Jumpers':
            iconName = Platform.OS === 'ios' ? `ios-game-controller-a${focused ? '' : '-outline'}` : 'md-game-controller-a';
            break;
          case 'About':
            iconName =
              Platform.OS === 'ios' ? `ios-contact${focused ? '' : '-outline'}` : 'md-contact';
        }
        return (
          <Ionicons
            name={iconName}
            size={28}
            style={{ marginBottom: -3 }}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        );
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  }
);
