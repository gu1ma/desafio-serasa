import React from 'react';
import {Alert} from 'react-native';

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

import HorizontalLine from '~/components/HorizontalLine';

export default function CardCredit({creditData}) {
  function handleCredit() {
    Alert.alert(
      'Olá!',
      'Encontramos uma nova proposta de credito pra você! Clique em confirmar para aceitar.',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'CONFIRMAR',
          onPress: () => console.log('Confirmar presssed'),
        },
      ],
      {cancelable: true}
    );
  }

  return creditData ? (
    <Container>
      <CardTitle>
        <Icon name="credit-card" color={colors.credit} size={18} /> Propostas de
        crédito
      </CardTitle>
      <HorizontalLine />
      <TextCreditDescription>
        Encontramos uma oferta de cartão de crédito
      </TextCreditDescription>
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
