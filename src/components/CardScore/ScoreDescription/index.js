import React from 'react';

import {Container, TextPoint, Bar} from './styles';

export default function ScoreDescription({desc, colorStart, colorEnd}) {
  return (
    <Container>
      <TextPoint>{desc}</TextPoint>
      <Bar colors={[colorStart, colorEnd]} />
    </Container>
  );
}
