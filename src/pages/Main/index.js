import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {StatusBar} from 'react-native';
import {Container} from './styles';

import CardHead from '~/components/CardHead';
import CardScore from '~/components/CardScore';
import CardDebt from '~/components/CardDebt';
import CardCredit from '~/components/CardCredit';
import CardProtectionPlain from '~/components/CardProtectionPlain';

import {getUserDataRequest} from '~/store/modules/main/actions';

import colors from '~/styles/colors';

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
  const {userData} = useSelector(state => state.main);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserDataRequest());
  }, []);

  const [borderColor, setBorderColor] = useState('#fff');
  const [initialColor, setInitialColor] = useState('#fff');
  const [finalColor, setFinalColor] = useState('#fff');

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
    userData && (
      <>
        <StatusBar barStyle="light-content" backgroundColor={borderColor} />
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
      </>
    )
  );
}
