import { useEffect } from 'react';
import {
  FiAlertCircle,
  FiCheckCircle,
  FiInfo,
  FiXCircle,
} from 'react-icons/fi';

import { IToastMessage, useToast } from '../../../hooks/toast';

import { Container } from './styles';

interface IToastProps {
  message: IToastMessage;
}

const icons = {
  info: <FiInfo size={25} />,
  error: <FiAlertCircle size={25} />,
  success: <FiCheckCircle size={25} />,
};

export function Toast({ message }: IToastProps) {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(message.id);
    }, 3000);

    /**
     * O retorno do useEffect é automaticamente executado
     * quando o componente deixar de existir
     */
    return () => {
      clearTimeout(timer);
    };
  }, [removeToast, message.id]);

  return (
    <Container type={message.type} hasDescription={!!message.description}>
      {icons[message.type || 'info']}
      <div>
        <strong>{message.title}</strong>
        {message.description && <p>{message.description}</p>}
      </div>
      <button onClick={() => removeToast(message.id)} type="button">
        <FiXCircle size={18} />
      </button>
    </Container>
  );
}
