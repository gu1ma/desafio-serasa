import React from 'react';
import {Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  CardTitle,
  TextCardProtectionDescription,
  ValuesCardProtectionContainer,
  ImageCardProtection,
  TextValuesContainer,
  TextCardProtectionOldValue,
  TextCardProtectionNewValue,
  ButtonCardProtectionContainer,
  ButtonCardProtection,
  TextButtonCardProtection,
} from './styles';

import colors from '~/styles/colors';

import {acceptProtectionPlainRequest} from '~/store/modules/main/actions';

import HorizontalLine from '~/components/HorizontalLine';

export default function CardProtectionPlain({protectionPlainData}) {
  const dispatch = useDispatch();

  const score = useSelector(state => state.main.userData.score);

  function handleProtectionData() {
    Alert.alert(
      'Quase lá!',
      'Clique em confirmar para solicitar seu plano de proteção de RG!',
      [
        {
          text: 'CANCELAR',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'CONFIRMAR',
          onPress: () =>
            dispatch(
              acceptProtectionPlainRequest(score, protectionPlainData.id)
            ),
        },
      ]
    );
  }

  return protectionPlainData ? (
    <Container>
      <CardTitle>
        <Icon name="security" color={colors.protectPlain} size={18} />
        {` ${protectionPlainData.cardTitle}`}
      </CardTitle>
      <HorizontalLine />
      <TextCardProtectionDescription>
        {protectionPlainData.cardDescription}
      </TextCardProtectionDescription>
      <ValuesCardProtectionContainer>
        <ImageCardProtection
          source={protectionPlainData.uriImgCardProtection}
        />
        <TextValuesContainer>
          <TextCardProtectionOldValue>
            {protectionPlainData.oldValue}
          </TextCardProtectionOldValue>
          <TextCardProtectionNewValue>
            {protectionPlainData.newValue}
          </TextCardProtectionNewValue>
        </TextValuesContainer>
      </ValuesCardProtectionContainer>
      <ButtonCardProtectionContainer>
        <ButtonCardProtection onPress={handleProtectionData}>
          <TextButtonCardProtection>Solicitar agora</TextButtonCardProtection>
        </ButtonCardProtection>
      </ButtonCardProtectionContainer>
    </Container>
  ) : (
    <></>
  );
}
