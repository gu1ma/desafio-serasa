import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: -50px;
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
  align-items: center;
`;

export const TextPoints = styled.Text`
  font-size: 42px;
  color: #5c5e5c;
  font-weight: bold;
  padding: 15px;
`;

export const TextPointsDescription = styled.Text`
  font-size: 16px;
  color: #232423;
`;

export const HorizontalLine = styled.View`
  height: 3px;
  color: #ccc;
  background: #ccc;
  width: 90%;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const ButtonKnowMore = styled.TouchableOpacity``;

export const TextKnowMore = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #723696;
`;

export const ContainerPointsDescription = styled.View`
  flex-direction: row;
`;
