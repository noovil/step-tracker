import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './components/Homescreen';
import Weather from './components/Weather';
import { Provider } from 'react-redux';
import { store } from './store/store'
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
       <Stack.Navigator initialRouteName="Step Tracker" screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Step Tracker"
          component={HomeScreen}
        />
        <Stack.Screen name="Weather" component={Weather} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
  