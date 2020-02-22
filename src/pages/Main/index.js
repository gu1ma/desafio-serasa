import React from 'react';

import {Container, Title} from './styles';

export default function Main() {
  return (
    <Container>
      <Title>MAIN PAGE</Title>
    </Container>
  );
}

Main.navigationOptions = {
  header: null,
};
