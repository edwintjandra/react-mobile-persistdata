import { View, Button, Alert, useColorScheme, Text, SafeAreaView, StatusBar, ScrollView, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react'
import ArrowLeft from '../assets/ArrowLeft';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { sharedStyle } from '../shared/SharedStyle'; 
import Product from '../components/Product';
import { IProduct } from '../shared/IProduct'; 
import { RootStackParamList } from '../shared/RootStackParamList';
import { coinState, productState } from '../shared/SharedState';
 
  
  interface IMyProductPage {
  route: RouteProp<RootStackParamList, 'MyProduct'>;
  }
  
  
  const MyProduct: React.FC<IMyProductPage> = ({ route }) => {
    const navigation=useNavigation();
    const {  productState, coinState } = route.params;
    const { myProducts, addProduct } = productState;
    const { myCoins, reduceCoins, addCoins } = coinState;


  return (
    <View style={sharedStyle.container}>     
        <View style={sharedStyle.flex}>
            <ArrowLeft onPress={() => navigation.navigate('Home')} />
            <Text style={sharedStyle.sectionTitle}>My Products</Text>
        </View>   
        
        <ScrollView>
        {myProducts && (
        <View style={sharedStyle.rowLayout}>
            {myProducts.map((product) => (
                <Product productState={productState} coinState={coinState} ownProduct  description={product.description} id={product.id}  image={product.image} title={product.title} price={product.price}></Product>
            ))}
        </View>
        )}
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    
})

export default MyProduct
