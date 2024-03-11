import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {palette} from 'theme';
import {Home} from 'screens';
import {AppLogo} from 'components';
import NewsDetailsScreen from 'screens/DetailsScreen';

const Stack = createNativeStackNavigator<ParamList>();
export const AppStack: FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        animation: 'slide_from_right',
        contentStyle: {
          backgroundColor: palette.BG,
        },
        headerShown: true,
        headerTitleAlign: 'center',
        headerTitle: () => <AppLogo size={60} />,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={NewsDetailsScreen} />
    </Stack.Navigator>
  );
};
export default AppStack;
