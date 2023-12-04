import React, { useEffect, useState } from 'react'
import { View, Button, Alert, useColorScheme, Text, SafeAreaView, StatusBar, ScrollView, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import Product from '../components/Product';
import ArrowLeft from '../assets/ArrowLeft';
import ArrowRight from '../assets/ArrowRight';
import { NavigationContainer, RouteProp, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { sharedStyle } from '../shared/SharedStyle'; 
import { IProduct } from '../shared/IProduct'; 
import HomePageHeader from '../components/HomePageHeader';
import { RootStackParamList } from '../shared/RootStackParamList';
import ProductList from '../components/ProductList';
import { coinState, productState } from '../shared/SharedState';



interface IHomePage {
route: RouteProp<RootStackParamList, 'Home'>;
}

const HomePage : React.FC<IHomePage> = ({ route }) => {
     const {  productState, coinState } = route.params;

     return (
     <View>
         <HomePageHeader productState={productState} coinState={coinState}></HomePageHeader>  
         <ProductList productState={productState} coinState={coinState}></ProductList>
     </View>
  )
}

const styles = StyleSheet.create({
     
    
   
   
   
   
  });

export default HomePage
