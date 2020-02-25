import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Main from '~/pages/Main';

import colors from '~/styles/colors';

export default createAppContainer(
  createStackNavigator(
    {
      Main: {
        screen: Main,
      },
    },
    {
      initialRouteName: 'Main',
      defaultNavigationOptions: {
        header: false,
        headerTitle: '',
        headerStyle: {
          backgroundColor: colors.status.danger.dark,
          shadowColor: 'transparent',
          shadowOpacity: 0,
          shadowOffset: {
            height: 0,
          },
          elevation: 0,
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'normal',
        },
        headerBackTitle: null,
      },
      mode: 'card',
      headerTitleAlign: 'center',
    }
  )
);
