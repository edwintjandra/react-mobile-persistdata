import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, Button, Alert, useColorScheme, Text, SafeAreaView, StatusBar, ScrollView, StyleSheet, Image, StyleProp, TextStyle, TouchableOpacity } from 'react-native';
import { sharedStyle } from '../shared/SharedStyle'; 
import { IProduct } from '../shared/IProduct'; 


interface IProductComponent {
  style?: StyleProp<TextStyle>;
  isGrid?:boolean;
  addProduct?:(newProduct: IProduct) => void
  ownProduct?:boolean
 }

interface CombinedProps extends IProduct, IProductComponent {}

const Product = (props:CombinedProps) => {
  const navigation=useNavigation();

  return (
    <TouchableOpacity
      style={[styles.product, props.isGrid ? sharedStyle.productGridView : sharedStyle.flex]}
      onPress={() => navigation.navigate('Detail',{ id: props.id, addProduct: props.addProduct,ownProduct:props.ownProduct })}
    >
      <View style={styles.productThumbnail} >
         <Image source={{ uri: props.image }} style={props.isGrid? sharedStyle.imageGridView: styles.productImage} />
      </View>
        <View>
            <Text style={sharedStyle.sectionTitle}>{props.title} </Text>
            <Text style={sharedStyle.textStyle}>{props.price} </Text>
        </View>
    </TouchableOpacity>  
  )
}

const styles = StyleSheet.create({
      product: {
        marginTop:20,
        padding: 16,
        borderRadius: 8,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,  
      },
      productThumbnail: {
        marginRight:15
      },
      productImage: {
        width: 80,
        height: 80,
        resizeMode: 'cover',
        marginBottom: 8,
      },

  });

export default Product
