import * as React from 'react';

import {Pressable, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import DoctorContainer from './screens/DoctorContainer';
import HomeScreen from './screens/05_HomeScreen'
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  HeaderBackButton,
} from '@react-navigation/stack';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
const Stack = createStackNavigator();

export default function App() {
    return (
      <HomeScreen/>

    /*<NavigationContainer>
      <Stack.Navigator
        screenOptions={({ navigation, route }) => ({
          headerLeft: (props) => {
            return (
              <>
                <Text>Menu</Text>
                {props.canGoBack && <HeaderBackButton {...props} />}
              </>
            );
          },
        })}>
        <Stack.Screen name="Home Screen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>*/
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
