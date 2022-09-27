import { IToastMessage, useToast } from '../../hooks/toast';

import { Toast } from './Toast';

import { Container } from './styles';

interface IToastConteinerProps {
  messages: IToastMessage[];
}

export function ToastContainer({ messages }: IToastConteinerProps) {
  return (
    <Container>
      {messages.map((message) => (
        <Toast key={message.id} message={message} />
      ))}
    </Container>
  );
}
