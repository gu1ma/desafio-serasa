import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {StatusBar} from 'react-native';
import Loader from 'react-native-modal-loader';
import {Container} from './styles';

import CardHead from '~/components/CardHead';
import CardScore from '~/components/CardScore';
import CardDebt from '~/components/CardDebt';
import CardCredit from '~/components/CardCredit';
import CardProtectionPlain from '~/components/CardProtectionPlain';

import colors from '~/styles/colors';

import {getUserDataRequest} from '~/store/modules/main/actions';

export function MainNavigationOptions({navigation}) {
  return {
    headerStyle: {
      backgroundColor: navigation.getParam(
        'toolbarColor',
        colors.status.danger.dark
      ),
      shadowColor: 'transparent',
      shadowOpacity: 0,
      shadowOffset: {
        height: 0,
      },
      elevation: 0,
    },
  };
}

export default function Main({navigation}) {
  const {loading, userData, error} = useSelector(state => state.main);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserDataRequest());
  }, []);

  useEffect(() => {
    if (error) {
      navigation.navigate('Error');
    }
  }, [error]);

  const [borderColor, setBorderColor] = useState(colors.status.danger.dark);
  const [initialColor, setInitialColor] = useState(colors.status.danger.dark);
  const [finalColor, setFinalColor] = useState(colors.status.danger.light);

  useEffect(() => {
    if (userData !== null) {
      if (userData.scoreLevel === 0) {
        setBorderColor(colors.status.danger.dark);
        navigation.setParams({toolbarColor: colors.status.danger.dark});
        setInitialColor(colors.status.danger.dark);
        setFinalColor(colors.status.danger.light);
      }
      if (userData.scoreLevel === 1) {
        setBorderColor(colors.status.medium.dark);
        navigation.setParams({toolbarColor: colors.status.medium.dark});
        setInitialColor(colors.status.medium.dark);
        setFinalColor(colors.status.medium.light);
      }
      if (userData.scoreLevel === 2) {
        setBorderColor(colors.status.high.dark);
        navigation.setParams({toolbarColor: colors.status.high.dark});
        setInitialColor(colors.status.high.dark);
        setFinalColor(colors.status.high.light);
      }
    }
  }, [userData]);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={borderColor} />
      <Loader loading={loading} color={initialColor} />
      {userData && (
        <Container>
          <CardHead
            userData={userData}
            initialColor={initialColor}
            finalColor={finalColor}
            borderColor={borderColor}
          />
          <CardScore userData={userData} />

          {userData.debtData.map(debt => (
            <CardDebt debtData={debt} key={debt.id} />
          ))}

          {userData.creditData.map(credit => (
            <CardCredit creditData={credit} key={credit.id} />
          ))}

          {userData.protectionPlainData.map(plain => (
            <CardProtectionPlain protectionPlainData={plain} key={plain.id} />
          ))}
        </Container>
      )}
    </>
  );
}
