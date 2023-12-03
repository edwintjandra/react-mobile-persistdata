import React from 'react'
import { View, Button, Alert, useColorScheme, Text, SafeAreaView, StatusBar, ScrollView, StyleSheet, Image, StyleProp, TextStyle, TouchableOpacity } from 'react-native';
import { sharedStyle } from '../shared/SharedStyle';


interface IModalProps {
    message: string;
    onClose: () => void;
  }

const Modal = (props:IModalProps) => {
  return (
    <View style={styles.modal}>
      <View style={styles.modalContent}>
        <Text style={styles.successModal}>
          Success
        </Text>
        <View>
          <Text style={sharedStyle.textStyle}>{props.message}</Text>
          <Button title='close' onPress={props.onClose}></Button>
        </View>     
      </View>  
    </View>
  )
}

const styles=StyleSheet.create({
    modal: {
        flex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        // backgroundColor: 'rgba(0, 0, 0, 0.6)',  
        zIndex: 1000,
        padding: 0,
        justifyContent: 'center',
    alignItems: 'center',
      },
      successModal: {
        
        fontSize: 18, 
        fontWeight: '500' 
    },
      modalContent: {
        margin: 0,
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '50%',
        transform: [{ translateX: -50 }, { translateY: -50 }], 
        zIndex: 1,
        color: 'black',
        backgroundColor: '#00FF00',
        padding: 20,
        borderRadius: 10,
      },

});

export default Modal
