import React from 'react';
import {Container, UserPhoto, UserName, OutlineCircle} from './styles';

export default function CardHead({
  userData,
  initialColor,
  finalColor,
  borderColor,
}) {
  return (
    <Container colors={[initialColor, finalColor]}>
      <UserPhoto source={userData.userPhoto} />
      <OutlineCircle
        userLevel={userData.scoreLevel}
        colorBorder={borderColor}
      />
      <UserName>{userData.userName}</UserName>
    </Container>
  );
}
