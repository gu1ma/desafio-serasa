import React from 'react';

import {Container, UserPhoto, UserName, OutlineCircle} from './styles';

export default function CardHead({userData}) {
  return (
    <Container>
      <UserPhoto source={userData.userPhoto} />
      <OutlineCircle />
      <UserName>{userData.userName}</UserName>
    </Container>
  );
}
