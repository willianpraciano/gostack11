import React, { InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

export function Input({ icon: Icon, ...rest }: InputProps) {
  /**
   * O React não aceita componente com incial minuscula,
   * por isso tem que converter "icon" para "Icon"
   */

  return (
    <Container>
      {Icon && <Icon size={20} />}
      <input {...rest} />
    </Container>
  );
}
