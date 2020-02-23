import React from 'react';

import {Container, TextPoint, Bar} from './styles';

export default function PointsDescription({desc, colorStart, colorEnd}) {
  return (
    <Container>
      <TextPoint>{desc}</TextPoint>
      <Bar colors={[colorStart, colorEnd]} />
    </Container>
  );
}
