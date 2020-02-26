import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient)`
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
  padding: 5px;
`;

export const UserName = styled.Text`
  font-size: 26px;
  color: white;
  font-weight: bold;
  margin-top: 15px;
`;
