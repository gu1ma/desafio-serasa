import React from 'react';
import {Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  Container,
  CardTitle,
  TextCreditDescription,
  ValuesCreditContainer,
  ImageCredit,
  TextValuesContainer,
  TextCreditDesciption,
  TextCreditValue,
  ButtonCreditContainer,
  ButtonCredit,
  TextButtonCredit,
} from './styles';

import colors from '~/styles/colors';

import {acceptCreditRequest} from '~/store/modules/main/actions';

import HorizontalLine from '~/components/HorizontalLine';

export default function CardCredit({creditData}) {
  const dispatch = useDispatch();

  const score = useSelector(state => state.main.userData.score);

  function handleCredit() {
    Alert.alert(
      'Olá!',
      'Encontramos uma nova proposta de credito pra você! Clique em confirmar para aceitar.',
      [
        {
          text: 'CANCELAR',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'CONFIRMAR',
          onPress: () => dispatch(acceptCreditRequest(score, creditData.id)),
        },
      ]
    );
  }

  return creditData ? (
    <Container>
      <CardTitle>
        <Icon name="credit-card" color={colors.credit} size={18} />{' '}
        {creditData.cardTitle}
      </CardTitle>
      <HorizontalLine />
      <TextCreditDescription>{creditData.creditTitle}</TextCreditDescription>
      <ValuesCreditContainer>
        <ImageCredit source={creditData.uriImgCredit} />
        <TextValuesContainer>
          <TextCreditDesciption>{creditData.creditDesc}</TextCreditDesciption>
          <TextCreditValue>{creditData.creditValue}</TextCreditValue>
        </TextValuesContainer>
      </ValuesCreditContainer>
      <ButtonCreditContainer>
        <ButtonCredit onPress={handleCredit}>
          <TextButtonCredit>Ver oferta</TextButtonCredit>
        </ButtonCredit>
      </ButtonCreditContainer>
    </Container>
  ) : (
    <></>
  );
}
