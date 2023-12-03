import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, Button, Alert, useColorScheme, Text, SafeAreaView, StatusBar, ScrollView, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { sharedStyle } from '../shared/SharedStyle';
import ArrowRight from '../assets/ArrowRight';
import { IProduct } from '../shared/IProduct';


const HomePageHeader  = (props: { myProducts: IProduct[]}) => {
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
  
}

const styles = StyleSheet.create({
    header:{
        backgroundColor:'#8775A9',  //main purple color       
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
      myProducts:{
        padding: 10, //default padding in an element
        borderRadius: 8,
        backgroundColor:'white',
     },
})

export default HomePageHeader
