import React, { useEffect, useState } from 'react';
import type {PropsWithChildren} from 'react';
import { View, Button, Alert, useColorScheme, Text, SafeAreaView, StatusBar, ScrollView, StyleSheet } from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './screens/HomePage';
import DetailPage from './screens/DetailPage';
import MyProduct from './screens/MyProduct';
import { IProduct } from './shared/IProduct';
import { RootStackParamList } from './shared/RootStackParamList';
import { coinState, productState } from './shared/SharedState';

 
const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const productStateInstance = productState();
  const coinStateInstance = coinState();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{
            headerShown: false, 
          }}
          initialParams={{ productState: productStateInstance, coinState: coinStateInstance }}
        />
        <Stack.Screen
          name="Detail"
          component={DetailPage}
          options={{
            headerShown: false, 
          }}
          initialParams={{ productState: productStateInstance, coinState: coinStateInstance }}
        />
        <Stack.Screen
          name="MyProduct"
          component={MyProduct}
          options={{
            headerShown: false, 
          }}
          initialParams={{ productState: productStateInstance, coinState: coinStateInstance }}
        />
      </Stack.Navigator>
    </NavigationContainer>
       
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  container: {
    
  }
});

export default App;
