import React, { useCallback } from 'react';
import { FiArrowLeft, FiUser, FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import logoImg from '../../assets/logo.svg';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { Container, Content, Background } from './styles';

export function SignUp() {
  const handleSubmit = useCallback(async (data: object) => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório.'),
        email: Yup.string()
          .required('E-mail obrigatório.')
          .email('Digite um e-mail válido'),
        password: Yup.string().min(6, 'Senha deve conter no mínimo 6 digitos'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err: any) {
      console.log(err?.errors);
    }
  }, []);

  return (
    <Container>
      <Background />
      <Content>
        <img src={logoImg} alt="Logo goBarber" />

        <Form initialData={{ name: 'Willian' }} onSubmit={handleSubmit}>
          {/**
           * No Form o initialData define o valor inicial do input
           * as chaves do objeto devem ser iguais ao name do input
           */}
          <h1>Faça seu cadastro</h1>

          <Input name="name" icon={FiUser} placeholder="Nome" />
          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />

          <Button type="submit">Cadastrar</Button>
        </Form>
        <a href="forgot">
          <FiArrowLeft />
          Voltar para login
        </a>
      </Content>
    </Container>
  );
}
