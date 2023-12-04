import React, { useEffect, useState } from 'react'
import { View, Button, Alert, useColorScheme, Text, SafeAreaView, StatusBar, ScrollView, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { sharedStyle } from '../shared/SharedStyle';
import { IProduct } from '../shared/IProduct';
import Product from './Product';
import { coinState, productState } from '../shared/SharedState';
import { IDefaultProps } from '../shared/IDefaultProps';

interface IProductList {
  
}

const ProductList = (props: IDefaultProps) => {
    const [productData, setProductData] =  useState<IProduct[]>([]);;
    const [isGridViewActive, setIsGridViewActive] = useState(false);
    const productState=props.productState;
    const coinState=props.coinState
     
  
      const getData = async () => {
        try {
          const response = await fetch("https://fakestoreapi.com/products");
      
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
      
          const productsResponse = await response.json();
            setProductData(productsResponse);
      
          return productsResponse;
        } catch (error) {
          return null;
        }
      };
  
      const toggleGridView=()=>{
        setIsGridViewActive((prev) => !prev);
      }
    
  
      useEffect(()=>{
        getData();
      })
      
      return (
        <View style={sharedStyle.container}>
            <View style={sharedStyle.flexContainer}>
                <Text style={sharedStyle.sectionTitle}>Available Products</Text>
                <Button title="grid" onPress={toggleGridView}></Button>
            </View>
           
            <ScrollView>
                 {productData && (
                //<View >
                <View style={isGridViewActive && sharedStyle.rowLayout}>
                    {productData.map((product) => (
                        <Product productState={productState} coinState={coinState} description={product.description} isGrid={isGridViewActive} id={product.id}  image={product.image} title={product.title} price={product.price}></Product>
                    ))}
                </View>
               )}
               </ScrollView>
             
        </View>
    )
}

export default ProductList



