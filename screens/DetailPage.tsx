import React, { useEffect, useState } from 'react'
import { View, Button, Alert, useColorScheme, Text, SafeAreaView, StatusBar, ScrollView, StyleSheet, Image, StyleProp, TextStyle, TouchableOpacity } from 'react-native';
import { NavigationContainer, RouteProp, useNavigation } from '@react-navigation/native';
import ArrowLeft from '../assets/ArrowLeft';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { sharedStyle } from '../shared/SharedStyle'; 
import { IProduct } from '../shared/IProduct'; 
import { RootStackParamList } from '../shared/RootStackParamList';
import Modal from '../components/Modal';
import { coinState, productState } from '../shared/SharedState';



interface IDetailPage {
route: RouteProp<RootStackParamList, 'Detail'>;
}

 

const DetailPage: React.FC<IDetailPage> = ({ route }) => {
    const { id, ownProduct } = route.params;
    const {  productState, coinState } = route.params;
    const { myProducts, addProduct,removeProduct } = productState;
    const { myCoins, reduceCoins, addCoins } = coinState;
    const [product, setProduct] = useState<IProduct>();
    const [modal, setModal] = useState({
      isVisible: false,
      message: '',
    });
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
        if (product && !ownProduct ) {
          if(myCoins > product.price){
            addProduct(product);
            reduceCoins(product.price);
             setModal({
              isVisible: true,
              message: 'product successfully purchased',
            });
          }else {
            setModal({
              isVisible: true,
              message: 'purchased failed, insufficient balance',
            });
          }
         
        }else if(product && ownProduct){
          removeProduct(product.id);
          addCoins(product.price);
          setModal({
            isVisible: true,
            message: 'product successfully sold',
          });

        }
      };

      const closeModal = () => {
        setModal({
          isVisible: false,
          message: '',
        });
      };    
    

    return (
    <>
        {product && (

        <ScrollView style={sharedStyle.container}>
          {modal.isVisible && (
            <Modal message={modal.message} onClose={closeModal} />
          )}
 
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
                <Button title={ownProduct ? 'Sell' : 'Buy'} onPress={handleBuyPress} />
            </View>
        </View>
        </View>
        </ScrollView>
        )}

    </>
    );
      
}

const styles = StyleSheet.create({
   
})

export default DetailPage
