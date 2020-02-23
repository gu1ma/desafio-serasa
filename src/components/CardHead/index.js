import React from 'react';

import {Container, UserPhoto, UserName} from './styles';

export default function CardHead() {
  return (
    <Container>
      <UserPhoto
        source={{
          uri:
            'https://lh3.googleusercontent.com/proxy/D1JxSESkKTdvobcGj8p-1yhdYI00IuQ26v7gRaej7-kifgZ8qzxqB0PIng5CyJuVMYJCqRplp2aV4Y4rQzTdrobHfmOOq8S2_kZJAQBm-Q1Sgh1qBcTJw04Ygb4555HNSA',
        }}
      />
      <UserName>Rick Sanchez</UserName>
    </Container>
  );
}
