import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import {Screens} from '../constants';
import Players from '../screens/Players';

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={Screens.Players}
          options={{headerShown: true, title: 'Players'}}
          component={Players}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
