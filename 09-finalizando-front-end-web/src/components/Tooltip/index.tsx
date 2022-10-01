import { ReactNode } from 'react';
import { Container } from './styles';

interface ITooltipsProps {
  title: string;
  className?: string;
  children: ReactNode;
}

export function Tooltip({ title, className = '', children }: ITooltipsProps) {
  return (
    <Container className={className}>
      {children}
      <span>{title}</span>
    </Container>
  );
}
