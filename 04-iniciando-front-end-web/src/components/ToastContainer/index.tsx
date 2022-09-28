import { useTransition } from 'react-spring';

import { IToastMessage, useToast } from '../../hooks/toast';

import { Toast } from './Toast';

import { Container } from './styles';

interface IToastConteinerProps {
  messages: IToastMessage[];
}

export function ToastContainer({ messages }: IToastConteinerProps) {
  const messagesWithTransitions = useTransition(messages, {
    from: { right: '-120%', opacity: 0 },
    enter: { right: '0%', opacity: 1 },
    leave: { right: '-120%', opacity: 0 },
  });

  return (
    <Container>
      {messagesWithTransitions(
        (style, item) =>
          item && <Toast key={item.id} style={style} message={item} />,
      )}
    </Container>
  );
}
