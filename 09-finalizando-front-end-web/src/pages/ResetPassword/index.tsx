import { useCallback, useRef } from 'react';
import { FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

import { useToast } from '../../hooks/toast';

import { getValidationErrors } from '../../utils/getValidationErrors';

import logoImg from '../../assets/logo.svg';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { Container, Content, AnimationContainer, Background } from './styles';

interface IResetPasswordFormData {
  password: string;
  password_confirmation: string;
}

export function ResetPassword() {
  const formRef = useRef<FormHandles>(null);

  const navigate = useNavigate();

  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: IResetPasswordFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          password: Yup.string().required('Senha obrigatória.'),
          password_confirmation: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Senhas devem ser iguais.')
            .required('Confirmação da senha obrigatória.'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        // navigate('/');
      } catch (err: any) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
          return;
        }

        /**
         * Erros que NÃO forem de validação
         */
        addToast({
          type: 'error',
          title: 'Erro ao resetar senha.',
          description: 'Ocorreu um erro ao resetar sua senha, tente novamente.',
        });
      }
    },
    [addToast, navigate], // toda variável externa usada dentro do useCallback precisa ser colocada nas dependências
  );

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logoImg} alt="Logo goBarber" />

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Resetar senha</h1>

            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Nova Senha"
            />
            <Input
              name="password_confirmation"
              icon={FiLock}
              type="password"
              placeholder="Confirmação da Senha"
            />

            <Button type="submit">Alterar Senha</Button>
          </Form>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  );
}
