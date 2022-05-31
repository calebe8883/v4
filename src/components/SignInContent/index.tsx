import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';
import IllustrationSvg from '../../assets/illustration.svg';

export function SignInContent() {
  return (
    <View style={styles.container}>
      <IllustrationSvg height={300} />

      <View style={styles.content}>
        <Text style={styles.title}>
        Onde é Hoje Rolezeiro??
        </Text>

        <Text style={styles.subtitle}>
          Esta com tédio? não sabe aonde ir? {'\n'}
           então vamos de Onde é Hoje!!.
        </Text>

        <Text style={styles.description}>
          Aplicativo de Eventos, encontre seu rolê ideal,{'\n'}
          Ohh Yeah!!
        </Text>
      </View>
    </View>
  );
}