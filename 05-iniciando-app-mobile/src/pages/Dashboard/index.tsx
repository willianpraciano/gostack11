import { View, Button } from 'react-native';

import { useAuth } from '../../hooks/auth';

import { Container } from './styles';

export function Dashboard() {
  const { signOut } = useAuth();

  return (
    <Container>
      <Button title="Sair" onPress={signOut} color="#ff9000" />
    </Container>
  );
}
