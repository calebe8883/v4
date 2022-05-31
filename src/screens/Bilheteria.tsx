import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native'


export function Bilheteria () {
    const navigation = useNavigation();
    function openscreen(){
    navigation.navigate('Perfil')
  
  }
  
  
  return (
    <View style={{flex:1, backgroundColor: 'blue', justifyContent:"center" }}>


      
    </View>
  );
}



/* <Button
        title="IR PARA PERFIL"
        onPress={openscreen}
      /> */