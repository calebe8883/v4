import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native'


export function HomeMap () {
    const navigation = useNavigation();
    function openscreen(){
    navigation.navigate('Bilheteria')
  
  }
  
  
  return (
    <View style={{flex:1, backgroundColor: 'green', justifyContent:"center" }}>


      
   </View>
  );
}


/* <Button
        title="IR PARA BILHETERIA"
        onPress={openscreen}
      /> */