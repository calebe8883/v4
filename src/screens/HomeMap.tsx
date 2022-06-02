import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import MapView, { Marker}   from "react-native-maps"
import * as Location from 'expo-location';


export function HomeMap () {
  const [location, setLocation] = useState(null);
 
  useEffect (() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  return (
    
    <View style={{flex:1, paddingTop: 50 }}>
      <MapView style={{flex: 1}}
      initialRegion={{
        latitude:  -7.53070,
        longitude:  -46.040,
        latitudeDelta: 0.1922,
        longitudeDelta: 0.0921,
    
      }}
      showsUserLocation
      >
      <Marker pinColor='blue'
      coordinate={{
        latitude:  -7.53075537061557,
        longitude:  -46.04020816477776,
        
      }}
      title= 'PUTEIRO DA TAY'
      description='Sede DA Onde é Hoje?'
    />



      </MapView>
      
    </View>
  );
}
