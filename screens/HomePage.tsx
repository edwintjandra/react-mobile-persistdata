import React, { useEffect, useState } from 'react'
import { View, Button, Alert, useColorScheme, Text, SafeAreaView, StatusBar, ScrollView, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import Product from '../components/Product';
import ArrowLeft from '../assets/ArrowLeft';
import ArrowRight from '../assets/ArrowRight';

//product interface;
interface IProduct {
  image:string;
  title: string;
  price: number;
 }
 

const Header = () => {
    return (
      <View style={[styles.header,styles.container]}>
        <TextInput
        style={styles.input}
        placeholder="Type here..."
        // onChangeText={(text) => setInputText(text)}
        // value={inputText}
         />

        <View style={styles.flexContainer}>
            <View >
                <Text style={[styles.myProducts, styles.textStyle]}  >My Products <ArrowRight style={styles.arrow}></ArrowRight> </Text>
            </View>
            <View  style={styles.balance}>
                <Text style={styles.textStyle}>500</Text>
                <Text style={styles.textStyle}>My Coins</Text>
            </View>
        </View>

      </View>
    );
  };

const ProductList= ()=>{
  const [productData, setProductData] =  useState<IProduct[]>([]);;
  const [isGridViewActive, setIsGridViewActive] = useState(false);


    const getData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
    
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
    
        const productsResponse = await response.json();
        console.log('Product Response:', productsResponse);
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
        <View style={styles.container}>
            <View style={styles.flexContainer}>
                <Text style={styles.sectionTitle}>Available Products</Text>
                <Button title="grid" onPress={toggleGridView}></Button>
            </View>
            <ScrollView>
                {productData && (
                //<View >
                <View style={isGridViewActive && styles.rowLayout}>
                    {productData.map((product) => (
                          <Product isGrid={isGridViewActive}  image={product.image} title={product.title} price={product.price}></Product>
                    ))}
                </View>
               )}
               </ScrollView>
             
        </View>
    )
}

  

const HomePage = () => {
  return (
    <View>
        <Header></Header>
        <ProductList></ProductList>
     </View>
  )
}

const styles = StyleSheet.create({
    header:{
        backgroundColor:'#8775A9',  //main purple color       
    },
    
    myProducts:{
        padding: 14, //default padding in an element
        borderRadius: 8,
        backgroundColor:'white',
     },
    balance:{
        padding: 14, //default padding in an element
        borderRadius: 8,
        backgroundColor:'white',
        
    },
   
    input: {
        height: 45,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 16,
         paddingLeft: 8,
        backgroundColor:'white',
        borderRadius:5
      },

      //for grid layout refer to HomePage,Product
      rowLayout:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
      },
      productGridView:{
        width:'50%',
        marginBottom: 10, 
      },
      imageGridView: {
        width: '100%',
        height: 100,
        resizeMode: 'cover',
        marginBottom: 8,
      },
      //reusable style -> refer to HomePage,Product
      arrow: {
        paddingVertical: 8,
        paddingHorizontal: 16,
      },
      sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
      },
      textStyle:{
        fontSize: 18, //main font size
        fontWeight: '500' //main font weight
      },
      flexContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      container: {
          padding:20,   //the main spacing padding
      },
      flex: {
        flexDirection: 'row',
      }

  });

export default HomePage
