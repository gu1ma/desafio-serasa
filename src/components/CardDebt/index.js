import React from 'react';
import {Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/FontAwesome5';
import {payDebtRequest} from '~/store/modules/main/actions';

import {
  Container,
  CardTitle,
  TextDebtDescription,
  ValuesDebtContainer,
  ImageDebt,
  TextValuesContainer,
  TextDebtOldValue,
  TextDebtNewValue,
  ButtonDebtContainer,
  ButtonDebt,
  TextButtonDebt,
} from './styles';

import colors from '~/styles/colors';

import HorizontalLine from '~/components/HorizontalLine';

export default function CardDebt({debtData}) {
  const dispatch = useDispatch();

  const score = useSelector(state => state.main.userData.score);

  function handlePayDebt() {
    Alert.alert(
      'Quase lá!',
      'Clique em confirmar para efetuar o pagamento da sua conta!',
      [
        {
          text: 'CANCELAR',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'CONFIRMAR',
          onPress: () => dispatch(payDebtRequest(score, debtData.id)),
        },
      ]
    );
  }

  return debtData ? (
    <Container>
      <CardTitle>
        <Icon name="file-alt" color={colors.debt} size={18} /> Negocie suas
        dívidas
      </CardTitle>
      <HorizontalLine />
      <TextDebtDescription>Você possuí uma pendência com</TextDebtDescription>
      <ValuesDebtContainer>
        <ImageDebt source={debtData.uriImgDebt} />
        <TextValuesContainer>
          <TextDebtOldValue>{debtData.oldValue}</TextDebtOldValue>
          <TextDebtNewValue>{debtData.newValue}</TextDebtNewValue>
        </TextValuesContainer>
      </ValuesDebtContainer>
      <ButtonDebtContainer>
        <ButtonDebt onPress={handlePayDebt}>
          <TextButtonDebt>Negociar agora</TextButtonDebt>
        </ButtonDebt>
      </ButtonDebtContainer>
    </Container>
  ) : (
    <></>
  );
}

CardDebt.propTypes = {
  debtData: PropTypes.object,
};
