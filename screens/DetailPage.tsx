import React, { useEffect, useState } from 'react'
import { View, Button, Alert, useColorScheme, Text, SafeAreaView, StatusBar, ScrollView, StyleSheet, Image, StyleProp, TextStyle, TouchableOpacity } from 'react-native';
import { NavigationContainer, RouteProp, useNavigation } from '@react-navigation/native';
import ArrowLeft from '../assets/ArrowLeft';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
    Home: undefined;
    Detail: { id: number };
  };


interface IDetailPage {
route: RouteProp<RootStackParamList, 'Detail'>;
}

interface IProduct {
    id:number;
    image:string;
    title: string;
    price: number;
    description:string;
}

const DetailPage: React.FC<IDetailPage> = ({ route }) => {
    const { id } = route.params;
    const [product, setProduct] = useState<IProduct | null>(null);
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

    return (
    <>
        {product && (
        <View style={styles.container}>
        <View>
        <View style={styles.flex}>
            <ArrowLeft onPress={() => navigation.navigate('Home')} />
            <Text style={styles.sectionTitle}>Product {product.id}</Text>
        </View>

        <Image source={{ uri: product.image }} style={styles.imageGridView} />

        <View>
            <Text style={styles.sectionTitle}>{product.title}</Text>
            <View>
            <Text style={[styles.textStyle, styles.lead]}>Price: </Text>
            <Text style={styles.textStyle}>{product.price} coins</Text>
            </View>
            <View>
            <Text style={[styles.textStyle, styles.lead]}>Description:</Text>
            <Text style={styles.textStyle}>
                {product.description}
            </Text>
            <Button title={'buy'}></Button>
            </View>
        </View>
        </View>
        </View>
        )}

    </>
    );
      
}

const styles = StyleSheet.create({
    //for grid layout refer to HomePage,Product,DetailPage
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
        height: 200,
        resizeMode: 'cover',
        marginBottom: 8,
      },
      //reusable style -> refer to HomePage,Product,DetailPage
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
        alignItems:'center'
      },
      lead:{
        fontWeight:'bold'
      }
})

export default DetailPage
