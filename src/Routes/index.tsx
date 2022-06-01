import { NavigationContainer } from '@react-navigation/native'
import StackRoutes from './Stack.Routes';
import { navigationRef } from './NavigationService';

export default function Routes() {
  return (
    <NavigationContainer ref={navigationRef}>
      <StackRoutes />
    </NavigationContainer>
  )
}