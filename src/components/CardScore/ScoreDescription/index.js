import React from 'react';

import PropTypes from 'prop-types';
import {Container, TextPoint, Bar} from './styles';

export default function ScoreDescription({desc, colorStart, colorEnd}) {
  return (
    <Container>
      <TextPoint>{desc}</TextPoint>
      <Bar colors={[colorStart, colorEnd]} />
    </Container>
  );
}

ScoreDescription.propTypes = {
  desc: PropTypes.string,
  colorStart: PropTypes.string,
  colorEnd: PropTypes.string,
};
