import React from 'react';

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
          <TextCreditDesciption>Anuidade Grátis</TextCreditDesciption>
          <TextCreditValue>Limite de R$2.000,00</TextCreditValue>
        </TextValuesContainer>
      </ValuesCreditContainer>
      <ButtonCreditContainer>
        <ButtonCredit>
          <TextButtonCredit>Ver oferta</TextButtonCredit>
        </ButtonCredit>
      </ButtonCreditContainer>
    </Container>
  ) : (
    <></>
  );
}
