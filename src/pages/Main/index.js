import React, {useState} from 'react';
import {Container} from './styles';

import CardHead from '~/components/CardHead';
import CardContainer from '~/components/CardScore';
import CardDebt from '~/components/CardDebt';
import CardCredit from '~/components/CardCredit';

export default function Main() {
  const [userData, updateUserData] = useState({
    userName: 'Rick Sanches',
    userPhoto: {
      uri:
        'https://i.pinimg.com/originals/e6/22/d2/e622d2fdccb6fdf31133dd7ab273892a.jpg',
    },
  });

  return (
    <Container>
      <CardHead userData={userData} />
      <CardContainer />
      <CardDebt />
      <CardCredit />
    </Container>
  );
}

Main.navigationOptions = {};
