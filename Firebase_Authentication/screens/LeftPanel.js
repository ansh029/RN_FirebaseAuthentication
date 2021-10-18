import * as React from 'react';
import { View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';
import BottomTab from './BottomTab';

const Drawer = createDrawerNavigator();

  

  function LeftPanel() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{ drawerLabel: 'Home' }}
      />
      <Drawer.Screen
        name="Tabs"
        component={BottomTab}
        options={{ drawerLabel: 'Tabs' }}
      />
   
    </Drawer.Navigator>
  );
}

export default LeftPanel;