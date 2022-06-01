import React from 'react';
import { View } from 'react-native';
import { navigate } from '../Routes/NavigationService';


export function Bilheteria () {
  function openscreen(){
    navigate('Perfil')
  }
  
  return (
    <View style={{flex:1, backgroundColor: 'blue', justifyContent:"center" }}>
    </View>
  );
}