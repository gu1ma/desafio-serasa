import React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  Container,
  CardTitle,
  TextDebtDescription,
  ValuesDebtContainer,
  ImageDebt,
  TextValuesContainer,
  TextCreditDesciption,
  TextCreditValue,
  ButtonDebtContainer,
  ButtonDebt,
  TextButtonDebt,
} from './styles';

import colors from '~/styles/colors';

import HorizontalLine from '~/components/HorizontalLine';

export default function CardCredit() {
  return (
    <Container>
      <CardTitle>
        <Icon name="credit-card" color={colors.credit} size={18} /> Propostas de
        crédito
      </CardTitle>
      <HorizontalLine />
      <TextDebtDescription>
        Encontramos uma oferta de cartão de crédito
      </TextDebtDescription>
      <ValuesDebtContainer>
        <ImageDebt
          source={{
            uri:
              'https://vignette.wikia.nocookie.net/yugioh/images/6/68/Face_Down_Defense_Position.png/revision/latest?cb=20100726091546',
          }}
        />
        <TextValuesContainer>
          <TextCreditDesciption>Anuidade Grátis</TextCreditDesciption>
          <TextCreditValue>Limite de R$2.000,00</TextCreditValue>
        </TextValuesContainer>
      </ValuesDebtContainer>
      <ButtonDebtContainer>
        <ButtonDebt>
          <TextButtonDebt>Ver oferta</TextButtonDebt>
        </ButtonDebt>
      </ButtonDebtContainer>
    </Container>
  );
}
