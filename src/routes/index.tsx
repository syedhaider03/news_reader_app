// Importing required modules and components from React Navigation and React Native
import React, {FC, useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {enableScreens} from 'react-native-screens';
import {NavigationContainer} from '@react-navigation/native';
import AppStack from './AppStack'; // Importing the main stack navigator for the app

// Enabling native screens for better performance
enableScreens(true);

// Creating a native stack navigator
const Stack = createNativeStackNavigator();

// AppNavigator functional component
export const AppNavigator: FC = () => {
  return (
    // Wrapping the navigator with NavigationContainer
    <NavigationContainer
      theme={{
        //@ts-ignore
        colors: {
          background: 'transparent', // Setting background color to transparent
        },
      }}>
      {/* Defining the stack navigator */}
      <Stack.Navigator
        initialRouteName="App" // Setting initial route name to 'App'
        screenOptions={{
          headerShown: false, // Showing the header by default
          animation: 'fade', // Setting animation to fade for screen transitions
        }}>
        {/* Defining the main screen */}
        <Stack.Screen
          navigationKey="PublicApp" // Setting navigation key for the screen
          name="App" // Setting screen name to 'App'
          component={AppStack} // Rendering the main app stack
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator; // Exporting the AppNavigator component
