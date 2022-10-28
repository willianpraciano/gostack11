import { TextInputProps, View } from 'react-native';

import { Container, TextInput, Icon } from './styles';

interface IInputProps extends TextInputProps {
  name: string;
  icon: string;
}

export function Input({ name, icon, ...rest }: IInputProps) {
  return (
    <Container>
      <View>
        <Icon name={icon} size={20} color="#666360" />
      </View>

      <TextInput
        keyboarAppearance="dark"
        placeholderTextColor="#666360"
        {...rest}
      />
    </Container>
  );
}
