// commonStyles.js

import { StyleSheet } from 'react-native';

export const sharedStyle = StyleSheet.create({
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
      //shared stylesheet
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
});
