/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import { View, Button, Alert, useColorScheme, Text, SafeAreaView, StatusBar, ScrollView, StyleSheet } from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import HomePage from './screens/HomePage';

type SectionProps = PropsWithChildren<{
  title: string;
}>;



function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
       <View style={styles.container}>
         
        <HomePage></HomePage>
      </View>
      
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
