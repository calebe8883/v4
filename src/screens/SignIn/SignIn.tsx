import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as AuthSession from 'expo-auth-session';

import { Button } from '../../components/Button';
import { SignInContent } from '../../components/SignInContent';

import { styles } from './styles';

type AuthResponse = {
  params: {
    access_token: string
  };
  type: string
}

export function SignIn() {
  const navigation = useNavigation();
  async function handleGoogleSignIn() {
    try {
      const CLIENT_ID = "237718531683-5k8ob94kc8s6urbnoq23njq7ne7tgreh.apps.googleusercontent.com";
      const REDIRECT_URI = "https://auth.expo.io/@calebe888/ondeehoje";
      const SCOPE = encodeURI("profile email");
      const RESPONSE_TYPE = "token";

      const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;
      const { type, params } = await AuthSession.startAsync({ authUrl }) as AuthResponse;
      
      
      if (type === "success"){
        navigation.navigate('Profile',{token: params.access_token});
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <View style={styles.container}>
      <SignInContent />

      <Button
        title="Entrar com Google"
        icon="social-google"
        onPress={handleGoogleSignIn}
      />
    </View>
  );
}
