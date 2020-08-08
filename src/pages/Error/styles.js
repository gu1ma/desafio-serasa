import styled from 'styled-components/native';

import colors from '~/styles/colors';

export const Container = styled.View`
  background: ${colors.debt};
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ErrorText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 10px;
`;

export const ButtonErrorContainer = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 25px;
  margin-bottom: 15px;
`;

export const ButtonError = styled.TouchableOpacity``;

export const TextButtonError = styled.Text`
  color: white;
  font-weight: bold;
`;
