import {
  useState,
  useCallback,
  useEffect,
  useRef,
  useImperativeHandle,
  Ref,
  forwardRef,
} from 'react';
import { TextInputProps, View } from 'react-native';
import { useField } from '@unform/core';

import { Container, TextInput, Icon } from './styles';

interface IInputProps extends TextInputProps {
  name: string;
  icon: string;
}

interface IInputValueReference {
  value: string;
}

interface IInputRef {
  focus: () => void;
}

export const Input = forwardRef(
  ({ name, icon, ...rest }: IInputProps, ref: Ref<IInputRef>) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);

    /**
     * No unform há a opção de definir o valor de um campo de forma dinâmuica, por
     * exemplo, à partir de alguma ação do usuário.
     * Para essa funcionalidade funcionar é necessário criar uma nova referêcia
     * que está, de fato, associada ao input e não somente ao valor dele.
     */
    const inputElementRef = useRef<any>(null);

    const {
      registerField,
      defaultValue = '',
      fieldName,
      error,
    } = useField(name);

    /**
     * Na WEB, com a DOM, é possível pegar o valor exato do input naquele momento.
     * No mobile não é possível fazer isso. Não é possível ter essa comunicação
     * direta com o elemento para obter o texto que está lá dentro, por isso
     * cria-se um referêcia para armazenar o valor e, em seguida, as funções
     * setValue e clearValue devem ser definidas no registerField
     */
    const inputValueRef = useRef<IInputValueReference>({ value: defaultValue });

    useEffect(() => {
      registerField<string>({
        name: fieldName,
        ref: inputValueRef.current,
        path: 'value',
        setValue(ref: any, value) {
          inputValueRef.current.value = value;

          /**
           * Essa linha é necessária porque o valor do inputValueRef não está
           * diretamente associado ao valor exibido no inputElementRef
           */
          inputElementRef.current.setNativeProps({ text: value });
        },
        clearValue() {
          inputValueRef.current.value = '';
          inputElementRef.current.clear();
        },
      });
    }, [registerField, fieldName]);

    /**
     * Com o useImperativeHandle pode-se acessar uma informação que está no elemento
     * pai pelo elemento filho
     */
    useImperativeHandle(ref, () => ({
      focus() {
        inputElementRef.current.focus();
      },
    }));

    const handleInputFocus = useCallback(() => {
      setIsFocused(true);
    }, []);

    const handleInputBlur = useCallback(() => {
      setIsFocused(false);

      setIsFilled(!!inputValueRef.current.value);
    }, []);

    return (
      <Container isFocused={isFocused}>
        <View>
          <Icon
            name={icon}
            size={20}
            color={isFocused || isFilled ? '#ff9000' : '#666360'}
          />
        </View>

        <TextInput
          ref={inputElementRef}
          keyboarAppearance="dark"
          placeholderTextColor="#666360"
          defaultValue={defaultValue}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          onChangeText={(value: string) => {
            inputValueRef.current.value = value;
          }}
          {...rest}
        />
      </Container>
    );
  },
);
