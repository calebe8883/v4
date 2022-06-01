
import Routes from './src/Routes/index';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts, Inter_400Regular, Inter_500Medium, Inter_700Bold } from '@expo-google-fonts/inter';
import { ActivityIndicator } from 'react-native';

export default function App() {

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold
  })


  if (!fontsLoaded) {
    return <ActivityIndicator />
  }

  (async () => {
    await SplashScreen.hideAsync();
  })()

  return (
    <Routes />
  );

}

