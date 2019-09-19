import React, {Fragment} from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import {Animated, Easing, Text, View, TouchableOpacity} from 'react-native';
import styles from './styles';
import {Welcome, Main} from '../../screens/';

const Tabs = createBottomTabNavigator(
  {
    Main: {
      screen: Main,
      navigationOptions: {
        tabBarIcon: ({focused}) => {
          return (
            <Fragment>
              <Text style={[styles.buttonTitle, focused && styles.btnActTitle]}>
                Main
              </Text>
            </Fragment>
          );
        },
      },
    },
  },
  {
    tabBarComponent: props => {
      const {
        navigation: {
          state: {index, routes},
        },
        style,
        renderIcon,
        jumpTo,
      } = props;
      return (
        <View style={[styles.menuWrapper, {...style}]}>
          {routes.map((route, idx) => (
            <TouchableOpacity
              key={route.key}
              style={styles.menuButton}
              onPress={() => jumpTo(route.key)}>
              {renderIcon({route, focused: index === idx})}
            </TouchableOpacity>
          ))}
        </View>
      );
    },
    tabBarOptions: {
      showLabel: false,
      style: {},
    },
  },
  {
    tabBarOptions: {
      labelStyle: {
        display: 'none',
      },
      style: {
        display: 'none',
      },
    },
  },
);

const StackNavigator = createStackNavigator(
  {
    subNavigator: {
      screen: Tabs,
      navigationOptions: {header: null},
    },
    Main,
  },
  {
    headerMode: 'none',
    navigationOptions: {headerVisible: false},
    mode: 'card',
    defaultNavigationOptions: {
      gesturesEnabled: false,
    },
    transitionConfig: () => ({
      transitionSpec: {
        duration: 0,
        timing: Animated.timing,
        easing: Easing.ease,
      },
    }),
  },
);

const RootNavigator = createSwitchNavigator(
  {
    StackNavigator,
    Welcome,
  },
  {
    initialRouteName: 'Welcome',
  },
);

export default createAppContainer(RootNavigator);
