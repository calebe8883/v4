import React, { useEffect } from 'react'

import { navigate } from '../../Routes/NavigationService';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { getToken } from '../../services/Storage';
import { ActivityIndicator } from 'react-native';

export default function Root() {
    const navigation = useNavigation<NativeStackNavigationProp<{ HomeNavigator: {} }>>()

    useEffect(() => {
        (async () => {
            if (await isAuthenticated()) {
                navigation.replace('HomeNavigator', {})
            } else {
                navigate('Signin')
            }
        })();
    })

    async function isAuthenticated(): Promise<boolean> {
        return !!(await getToken())
    }

    return (
        <ActivityIndicator />
    )
}