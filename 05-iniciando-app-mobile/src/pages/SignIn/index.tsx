import React from 'react';
import { Text, Image } from 'react-native';

import { Container } from './styles';

import logoImg from '../../assets/logo.png';

export function SignIn() {
  return (
    <Container>
      <Text>SignIn</Text>
      <Image source={logoImg} />
    </Container>
  );
}
