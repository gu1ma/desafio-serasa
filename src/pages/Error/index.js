import React, {useEffect} from 'react';

import {useDispatch, useSelector} from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {getUserDataRequest} from '~/store/modules/main/actions';

import {
  Container,
  ErrorText,
  ButtonErrorContainer,
  ButtonError,
  TextButtonError,
} from './styles';
import colors from '~/styles/colors';

export function ErrorNavigationOptions({navigation}) {
  return {
    headerStyle: {
      backgroundColor: navigation.getParam('toolbarColor', colors.debt),
      shadowColor: 'transparent',
      shadowOpacity: 0,
      shadowOffset: {
        height: 0,
      },
      elevation: 0,
    },
  };
}

const Error = ({navigation}) => {
  const dispatch = useDispatch();
  const {error} = useSelector(state => state.main);

  function refresh() {
    dispatch(getUserDataRequest());
  }

  useEffect(() => {
    if (!error) {
      navigation.navigate('Main');
    }
  }, [error]);

  return (
    <Container>
      <ErrorText>Ops, algo deu errado.</ErrorText>
      <Icon name="error-outline" color="white" size={120} />
      <ButtonErrorContainer>
        <ButtonError onPress={refresh}>
          <TextButtonError>Recarregar</TextButtonError>
        </ButtonError>
      </ButtonErrorContainer>
    </Container>
  );
};

export default Error;
