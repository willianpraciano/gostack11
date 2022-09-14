import React, { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

import { Container } from './styles';

export function Button({ children, ...rest }: ButtonProps) {
  return (
    <Container type="button" {...rest}>
      {children}
    </Container>
  );
}
