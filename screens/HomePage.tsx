import React, { useEffect, useState } from 'react'
import { View, Button, Alert, useColorScheme, Text, SafeAreaView, StatusBar, ScrollView, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import Product from '../components/Product';
import ArrowLeft from '../assets/ArrowLeft';
import ArrowRight from '../assets/ArrowRight';
import { NavigationContainer, RouteProp, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { sharedStyle } from '../shared/SharedStyle'; 
import { IProduct } from '../shared/IProduct'; 



type RootStackParamList = {
  Home: {
    addProduct:(newProduct: IProduct) => void;
    myProducts: IProduct[]
  };
    Detail: { 
        id: number;
        addProduct:(newProduct: IProduct) => void
      }; 
    MyProduct:undefined;
  };


interface IDetailPage {
route: RouteProp<RootStackParamList, 'Home'>;
}
 

const Header = (props: { myProducts: IProduct[]}) => {
  const navigation=useNavigation();
  const myProducts=props.myProducts;

  const handleNavigateToMyProduct = () => {
    navigation.navigate('MyProduct', { myProducts });
  };

    return (
      <View style={[styles.header,sharedStyle.container]}>
        <TextInput
        style={styles.input}
        placeholder="Type here..."
        // onChangeText={(text) => setInputText(text)}
        // value={inputText}
         />

        <View style={sharedStyle.flexContainer}>
            <TouchableOpacity style={[styles.myProducts,sharedStyle.flex]} onPress={handleNavigateToMyProduct}>
                <Text style={sharedStyle.textStyle} >My Products</Text>
                <ArrowRight style={sharedStyle.arrow}></ArrowRight> 
            </TouchableOpacity>
            <View  style={styles.balance}>
                <Text style={sharedStyle.textStyle}>500</Text>
                <Text style={sharedStyle.textStyle}>My Coins</Text>
            </View>
        </View>

      </View>
    );
  };

const ProductList= (props: { addProduct: (newProduct:IProduct) => void }) => {
  const [productData, setProductData] =  useState<IProduct[]>([]);;
  const [isGridViewActive, setIsGridViewActive] = useState(false);

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
                          <Product addProduct={props.addProduct} description={product.description} isGrid={isGridViewActive} id={product.id}  image={product.image} title={product.title} price={product.price}></Product>
                    ))}
                </View>
               )}
               </ScrollView>
             
        </View>
    )
}

const HomePage : React.FC<IDetailPage> = ({ route }) => {
  const { addProduct, myProducts } = route.params;
//ini header harus dikasih myProducts cok
  return (
    <View>
        <Header myProducts={myProducts}></Header> 
        <ProductList addProduct={addProduct}></ProductList>
     </View>
  )
}

const styles = StyleSheet.create({
    header:{
        backgroundColor:'#8775A9',  //main purple color       
    },
    
    myProducts:{
        padding: 10, //default padding in an element
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
  });

export default HomePage
