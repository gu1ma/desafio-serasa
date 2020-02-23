import React from 'react';
import {Container} from './styles';

import CardHead from '~/components/CardHead';
import CardContainer from '~/components/CardContainer';

export default function Main() {
  return (
    <Container>
      <CardHead />
      <CardContainer />
    </Container>
  );
}

Main.navigationOptions = {};
