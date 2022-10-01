import { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};

import { Container } from './styles';

export function Button({ loading = false, children, ...rest }: ButtonProps) {
  return (
    <Container type="button" disabled={!!loading} {...rest}>
      {loading ? 'Carregando...' : children}
    </Container>
  );
}
