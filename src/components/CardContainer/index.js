import React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome5';

import PointDescription from './PointsDescription';

import {
  Container,
  TextPoints,
  TextPointsDescription,
  HorizontalLine,
  ButtonKnowMore,
  TextKnowMore,
  ContainerPointsDescription,
} from './styles';

export default function CardContainer() {
  return (
    <Container>
      <TextPoints>26</TextPoints>
      <TextPointsDescription>Sua pontuação é baixa</TextPointsDescription>
      <HorizontalLine />
      <ButtonKnowMore>
        <TextKnowMore>
          Saiba mais <Icon name="chevron-up" color="#723696" size={14} />
        </TextKnowMore>
      </ButtonKnowMore>
      <ContainerPointsDescription>
        <PointDescription
          desc="0 a 30"
          colorStart="#e6602c"
          colorEnd="#b0b009"
        />
        <PointDescription
          desc="31 a 60"
          colorStart="#b0b009"
          colorEnd="#24bfc7"
        />
        <PointDescription
          desc="61 a 100"
          colorStart="#24bfc7"
          colorEnd="#0261a1"
        />
      </ContainerPointsDescription>
    </Container>
  );
}
