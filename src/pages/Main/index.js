import React from 'react';
import {Container} from './styles';

import CardHead from '~/components/CardHead';
import CardContainer from '~/components/CardScore';
import CardDebt from '~/components/CardDebt';
import CardCredit from '~/components/CardCredit';

export default function Main() {
  return (
    <Container>
      <CardHead />
      <CardContainer />
      <CardDebt />
      <CardCredit />
    </Container>
  );
}

Main.navigationOptions = {};
