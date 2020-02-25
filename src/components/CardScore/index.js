import React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome5';

import ScoreDescription from './ScoreDescription';

import colors from '~/styles/colors';

import HorizontalLine from '~/components/HorizontalLine';

import {
  Container,
  TextPoints,
  TextPointsDescription,
  ButtonKnowMore,
  TextKnowMore,
  ContainerPointsDescription,
} from './styles';

export default function CardScore({userData}) {
  return (
    userData && (
      <Container>
        <TextPoints value={userData.score} countBy={1}>
          {userData.score}
        </TextPoints>
        <TextPointsDescription>
          {userData.scoreDescription}
        </TextPointsDescription>
        <HorizontalLine />
        <ButtonKnowMore>
          <TextKnowMore>
            Saiba mais{' '}
            <Icon name="chevron-up" color={colors.buttons.purple} size={14} />
          </TextKnowMore>
        </ButtonKnowMore>
        <ContainerPointsDescription>
          <ScoreDescription
            desc="0 a 30"
            colorStart="#e6602c"
            colorEnd="#b0b009"
          />
          <ScoreDescription
            desc="31 a 60"
            colorStart="#b0b009"
            colorEnd="#24bfc7"
          />
          <ScoreDescription
            desc="61 a 100"
            colorStart="#24bfc7"
            colorEnd="#0261a1"
          />
        </ContainerPointsDescription>
      </Container>
    )
  );
}
