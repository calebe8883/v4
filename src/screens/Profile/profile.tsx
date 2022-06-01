import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import { ProfileHeader } from '../../components/ProfileHeader';
import { Avatar } from '../../components/Avatar';
import { Button } from '../../components/Button';

import { styles } from './styles';
import { theme } from '../../styles/theme';
import { navigate } from '../../Routes/NavigationService';
import { getToken } from '../../services/Storage';

type ParamList = {
  Profile: {
    token: string
  }
}

type Profile = {
  email: string;
  family_name: string;
  given_name: string;
  locale: string;
  name: string;
  picture: string
}

export function Profile() {
  const [profile, setProfile] = useState<Partial<Profile>>({});
  const route = useRoute<RouteProp<ParamList, 'Profile'>>();

  useEffect(() => {
    loadprofile();
  }, [])

  async function handleLogout(): Promise<void> {
    navigate('Signin');
  }

  async function loadprofile() {
    const tokenOnStorage = await getToken()

    const tokenToUse: string | null = route.params?.token || tokenOnStorage

    if (tokenToUse) {
      const response = await fetch(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${tokenToUse}`);
      const userInfo = await response.json();
      setProfile(userInfo);
    }
  }

  return (
    <View style={styles.container}>
      <ProfileHeader />

      <View style={styles.content}>
        <View style={styles.profile}>
          <Avatar
            source={{ uri: profile.picture }}
          />

          <Text style={styles.name}>
            {profile.name}
          </Text>

          <View style={styles.email}>
            <Feather name="mail" color={theme.colors.secondary} size={15} />
            <Text style={styles.emailText}>
              {profile.email}
            </Text>
          </View>
        </View>

        <View style={styles.about}>
          <View style={styles.info}>
            <Feather
              name="user"
              size={34}
              color={theme.colors.note}
            />
            <Text style={styles.label}>
              Nome
            </Text>
            <Text style={styles.text}>
              {profile.given_name}
            </Text>
          </View>

          <View style={styles.info}>
            <Feather
              name="heart"
              size={34}
              color={theme.colors.note}
            />
            <Text style={styles.label}>
              Sobrenome
            </Text>
            <Text style={styles.text}>
              {profile.family_name}
            </Text>
          </View>
        </View>

        <View style={styles.locale}>
          
        </View>
        <Button
          title="ENCONTRE SEU ROLÊ"
          icon="map"
          onPress={handleLogout}
        />
      </View>
    </View>
  );
}
