import React from 'react'
import { View, Button, Alert, useColorScheme, Text, SafeAreaView, StatusBar, ScrollView, StyleSheet, Image, StyleProp, TextStyle } from 'react-native';
 
interface IProduct {
  image: string;
  title: string;
  price: number;
  style?: StyleProp<TextStyle>;
  isGrid?:boolean;
 }

const Product = (props:IProduct) => {
  return (
    // <View style={[styles.product,styles.flex]}> this is default without grid layout
    //    <View style={[styles.product,styles.productGridView]}> this is with grid layout
    <View style={[styles.product,props.isGrid? styles.productGridView: styles.flex]}>
      <View style={styles.productThumbnail}>
         {/* <Image source={{ uri: props.image }}  style={styles.productImage}/>  this is default without grid layout*/}
         {/* <Image source={{ uri: props.image }} style={styles.imageGridView }/> this is with grid layout */}

         <Image source={{ uri: props.image }} style={props.isGrid? styles.imageGridView: styles.productImage} />


      </View>
        <View>
            <Text style={styles.sectionTitle}>{props.title}</Text>
            <Text style={styles.textStyle}>{props.price}</Text>
        </View>
    </View>
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

      //for grid layout refer to HomePage,and Product
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
        fontSize: 18,
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

export default Product