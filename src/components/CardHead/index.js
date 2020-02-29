import React from 'react';
import ProgressCircle from 'react-native-progress-circle';
import {Container, UserPhoto, UserName} from './styles';

export default function CardHead({
  userData,
  initialColor,
  finalColor,
  borderColor,
}) {
  return (
    <Container colors={[initialColor, finalColor]}>
      <ProgressCircle
        borderWidth={5}
        percent={100 - userData.score}
        shadowColor={borderColor}
        radius={70}
        color="#fff">
        <UserPhoto source={userData.userPhoto} testID="userphoto" />
      </ProgressCircle>
      <UserName testID="username">{userData.userName}</UserName>
    </Container>
  );
}
