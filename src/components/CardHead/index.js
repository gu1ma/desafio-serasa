import React from 'react';
import PropTypes from 'prop-types';
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
        <UserPhoto source={userData.userPhoto} />
      </ProgressCircle>
      <UserName>{userData.userName}</UserName>
    </Container>
  );
}

CardHead.propTypes = {
  userData: PropTypes.object,
  initialColor: PropTypes.string,
  finalColor: PropTypes.string,
  borderColor: PropTypes.string,
};
