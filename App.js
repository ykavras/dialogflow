import React from 'react';
import {createAppContainer} from 'react-navigation';
import AppNavigator from './src/container/AppNavigator';

import NavigationService from './src/lib/NavigatorService';

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return (
      <AppContainer
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    );
  }
}
console.disableYellowBox = true;
