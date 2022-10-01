import { useCallback, useRef, useState } from 'react';
import { FiLock, FiLogIn } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import * as uuid from 'uuid';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';

import { useToast } from '../../hooks/toast';

import { getValidationErrors } from '../../utils/getValidationErrors';

import logoImg from '../../assets/logo.svg';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { Container, Content, AnimationContainer, Background } from './styles';
import { api } from '../../services/api';

interface IResetPasswordFormData {
  password: string;
  password_confirmation: string;
}

export function ResetPassword() {
  const [loading, setLoading] = useState(false);

  const formRef = useRef<FormHandles>(null);

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: IResetPasswordFormData) => {
      try {
        setLoading(true);

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

        const { password, password_confirmation } = data;
        const token = searchParams.get('token');

        if (!token || !uuid.validate(token)) {
          throw new Error();
        }

        await api.post('/password/reset', {
          password,
          password_confirmation,
          token,
        });

        addToast({
          type: 'success',
          title: 'Senha alterada com sucesso.',
        });

        navigate('/');
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
      } finally {
        setLoading(false);
      }
    },
    [addToast, navigate, searchParams], // toda variável externa usada dentro do useCallback precisa ser colocada nas dependências
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

            <Button loading={loading} type="submit">
              Alterar Senha
            </Button>
            <Link to="/forgot-password">Reenviar email de recuperação</Link>
          </Form>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  );
}
