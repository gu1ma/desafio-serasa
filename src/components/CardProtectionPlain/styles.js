import styled from 'styled-components/native';

import colors from '~/styles/colors';

export const Container = styled.View`
  margin-top: 20px;
  padding: 10px 20px;
  background: white;
  border-radius: 5px;
  border: #ccc 1px solid;
  margin-left: 10px;
  margin-right: 10px;
  shadow-color: #ccc;
  shadow-radius: 2px;
  shadow-opacity: 1;
  shadow-offset: 0px 3px;

  justify-content: center;
  align-items: flex-start;
`;

export const CardTitle = styled.Text`
  font-size: 14px;
  color: ${colors.protectPlain};
  margin-bottom: 5px;
`;

export const TextCardProtectionDescription = styled.Text`
  margin-top: 15px;
  font-size: 14px;
  color: #5c5e5c;
  margin-left: 5px;
`;

export const ValuesCardProtectionContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding-top: 15px;
  align-items: flex-end;
`;

export const ImageCardProtection = styled.Image`
  height: 50px;
  width: 80px;
  resize-mode: cover;
`;

export const TextValuesContainer = styled.View``;

export const TextCardProtectionOldValue = styled.Text`
  font-size: 12px;
  text-align: right;
  color: #ccc;
  text-decoration-line: line-through;
`;

export const TextCardProtectionNewValue = styled.Text`
  font-size: 18px;
  color: #5c5e5c;
`;

export const ButtonCardProtectionContainer = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 0px;
`;

export const ButtonCardProtection = styled.TouchableOpacity`
  padding: 15px;
`;

export const TextButtonCardProtection = styled.Text`
  color: ${colors.buttons.purple};
  font-weight: bold;
`;
