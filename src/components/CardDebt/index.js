import React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome5';
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
        <ButtonDebt>
          <TextButtonDebt>Negociar agora</TextButtonDebt>
        </ButtonDebt>
      </ButtonDebtContainer>
    </Container>
  ) : (
    <></>
  );
}
