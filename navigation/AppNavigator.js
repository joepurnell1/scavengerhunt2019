import React from 'react';
import { createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import Login from '../screens/Login';

export default createSwitchNavigator(
  {
  Main: MainTabNavigator,
  Login
  },
  {
    initialRouteName: 'Login',
  }
);
