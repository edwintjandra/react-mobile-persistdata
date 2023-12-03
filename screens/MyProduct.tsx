import { View, Button, Alert, useColorScheme, Text, SafeAreaView, StatusBar, ScrollView, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import React from 'react'
import ArrowLeft from '../assets/ArrowLeft';
import { useNavigation } from '@react-navigation/native';

const MyProduct = () => {
  const navigation=useNavigation();

  return (
    <View style={styles.container}>     
        <View style={styles.flex}>
            <ArrowLeft onPress={() => navigation.navigate('Home')} />
            <Text style={styles.sectionTitle}>Product</Text>
        </View>   
        <Text>test</Text>
    </View>
  )
}

const styles = StyleSheet.create({
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

export default MyProduct
