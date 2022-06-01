import SignIn from '../screens/SignIn/SignIn';
import TabRoutes from './Tab.Routes';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Root from '../screens/Root';

type RootStackParamList = {
    Signin: {},
    HomeNavigator: {}
    Root: {}
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function StackRoutes() {
    return (
        <Stack.Navigator initialRouteName='Root'>
            <Stack.Screen name='Root' component={Root} options={{ headerShown: false }} />
            <Stack.Screen name="Signin" component={SignIn} options={{
                headerShown: false,
            }}/>
            <Stack.Screen name='HomeNavigator' component={TabRoutes} options={{
                headerShown: false,
            }}/>
        </Stack.Navigator>
    )
}