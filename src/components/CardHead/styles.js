import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

import colors from '~/styles/colors';

export const Container = styled(LinearGradient).attrs({
  colors: [colors.status.danger.dark, colors.status.danger.light],
})`
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  padding-right: 30px;
  padding-left: 30px;
  padding-bottom: 80px;
`;

export const UserPhoto = styled.Image`
  height: 140px;
  width: 140px;
  border-radius: 70px;
  border: white solid 5px;
  padding: 5px;
`;

export const UserName = styled.Text`
  font-size: 18px;
  color: white;
  font-weight: bold;
  margin-top: 15px;
`;
