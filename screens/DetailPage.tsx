import React, { useEffect, useState } from 'react'
import { View, Button, Alert, useColorScheme, Text, SafeAreaView, StatusBar, ScrollView, StyleSheet, Image, StyleProp, TextStyle, TouchableOpacity } from 'react-native';
import { NavigationContainer, RouteProp, useNavigation } from '@react-navigation/native';
import ArrowLeft from '../assets/ArrowLeft';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
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
route: RouteProp<RootStackParamList, 'Detail'>;
}

 

const DetailPage: React.FC<IDetailPage> = ({ route }) => {
    const { id, addProduct } = route.params;
    const [product, setProduct] = useState<IProduct>();
    const navigation=useNavigation();

    const getProductById = async (productId:number) => {
        try {
          const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
          
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
    
          const productData = await response.json();
          setProduct(productData);
        } catch (error) {
          console.error('Error fetching product:', error);
        }
      };
    
      useEffect(() => {
        getProductById(id);
      }, [id]);

      const handleBuyPress = () => {
        if (product) {
            addProduct(product);
            navigation.navigate('MyProduct'); 
        } else {
            console.log("product is not available");
          }    
       };
    

    return (
    <>
        {product && (
        <View style={sharedStyle.container}>
        <View>
        <View style={sharedStyle.flex}>
            <ArrowLeft onPress={() => navigation.navigate('Home')} />
            <Text style={sharedStyle.sectionTitle}>Product {product.id}</Text>
        </View>

        <Image source={{ uri: product.image }} style={sharedStyle.imageGridView} />

        <View>
            <Text style={sharedStyle.sectionTitle}>{product.title}</Text>
            <View>
            <Text style={[sharedStyle.textStyle, sharedStyle.lead]}>Price: </Text>
            <Text style={sharedStyle.textStyle}>{product.price} coins</Text>
            </View>
            <View>
            <Text style={[sharedStyle.textStyle, sharedStyle.lead]}>Description:</Text>
            <Text style={sharedStyle.textStyle}>
                {product.description}
            </Text>
            <Button title={'buy'} onPress={handleBuyPress}></Button>
            </View>
        </View>
        </View>
        </View>
        )}

    </>
    );
      
}

const styles = StyleSheet.create({
   
})

export default DetailPage
