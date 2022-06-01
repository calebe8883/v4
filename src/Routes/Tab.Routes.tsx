import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeMap } from '../screens/HomeMap';
import { Bilheteria } from '../screens/Bilheteria';
import { Profile } from '../screens/Profile/profile'
import { Entypo } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'; 

const { Screen, Navigator } = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Navigator>
      <Screen
        name='HOMEMAP'
        options={{
          tabBarLabel: 'HOME',
          headerShown: false,
          tabBarIcon: ({color, size}) => (<Entypo
           name='map'
           color={color}
           size={size}
          
          />)
        }}
        component={HomeMap}
      />
      <Screen
        name='Bilheteria'
        options={{
          tabBarLabel: 'BILHETERIA',
          headerShown: false,
          tabBarIcon: ({color, size}) => (<Entypo
           name='ticket'
           color={color}
           size={size}
          />)
        }}
        component={Bilheteria}
      />
      <Screen
        name='Profile'
        options={{
          tabBarLabel: 'PERFIL',
          headerShown: false,
          tabBarIcon: ({color, size}) => (<AntDesign
           name='profile'
           color={color}
           size={size}
          />)
        }}
        component={Profile}
      />
    </Navigator>
  )
}