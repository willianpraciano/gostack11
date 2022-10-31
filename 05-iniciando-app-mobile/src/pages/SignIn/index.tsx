import { useCallback, useRef } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/mobile';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import logoImg from '../../assets/logo.png';

import {
  Container,
  Title,
  ForgotPassword,
  ForgotPasswordText,
  CreateAccountButton,
  CreateAccountButtontext,
} from './styles';

export function SignIn() {
  /**
   * Usa-se o useRef quando se deseja manipular um elemento do html
   * de forma direta e não à partir de algum evento que aconteça
   */
  const formRef = useRef<FormHandles>(null);

  const navigation = useNavigation();

  const handleSignIn = useCallback((data: object) => {
    console.log(data);
  }, []);

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        enabled
      >
        <ScrollView keyboardShouldPersistTaps="handled">
          <Container>
            <Image source={logoImg} />
            <View>
              <Title>Faça seu logon</Title>
            </View>
            <Form ref={formRef} onSubmit={handleSignIn}>
              <Input name="email" icon="mail" placeholder="E-mail" />
              <Input name="password" icon="lock" placeholder="Senha" />
              <View>
                <Button
                  onPress={() => {
                    formRef.current?.submitForm();
                  }}
                >
                  Entrar
                </Button>
              </View>
            </Form>

            <ForgotPassword onPress={() => {}}>
              <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
            </ForgotPassword>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <CreateAccountButton
        onPress={() => {
          navigation.navigate('SignUp' as never);
        }}
      >
        <Icon name="log-in" size={20} color="#ff9000" />
        <CreateAccountButtontext>Criar uma conta</CreateAccountButtontext>
      </CreateAccountButton>
    </>
  );
}
