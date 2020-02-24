import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Main from '~/pages/Main';

export default createAppContainer(
  createStackNavigator(
    {
      Main,
    },
    {
      initialRouteName: 'Main',
      defaultNavigationOptions: {
        headerTitle: '',
        headerStyle: {
          backgroundColor: '#f77800',
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
