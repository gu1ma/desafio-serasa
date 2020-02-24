import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Container} from './styles';

import CardHead from '~/components/CardHead';
import CardContainer from '~/components/CardScore';
import CardDebt from '~/components/CardDebt';
import CardCredit from '~/components/CardCredit';

import {getUserDataRequest} from '~/store/modules/main/actions';

export default function Main() {
  const {userData} = useSelector(state => state.main);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserDataRequest());
  }, []);

  return (
    userData && (
      <Container>
        <CardHead userData={userData} />
        <CardContainer />

        {userData.debtData.map(debt => (
          <CardDebt debtData={debt} key={debt.id} />
        ))}

        {userData.creditData.map(credit => (
          <CardCredit creditData={credit} key={credit.id} />
        ))}
      </Container>
    )
  );
}

Main.navigationOptions = {};
