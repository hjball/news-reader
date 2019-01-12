import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

// import { createStore } from 'redux';
// import { Provider } from 'react-redux';

import { StatusBar } from 'react-native';
import ListScreen from './screens/ListScreen';
import ArticleDetail from './screens/ArticleDetail';
// import Reducer from './data/reducer';

StatusBar.setBarStyle('light-content');

// const store = createStore(
//   reducer,
//   initial,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
// )

const MainStack = createAppContainer(createStackNavigator(
    {
      List: ListScreen,
      Details: ArticleDetail,
    }, {
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#d35400'
      },
      headerTintColor: '#ffffff'
      } 
    },
));

// export default () => (
//   <Provider store={ store }>
//     <MainStack />
//   </Provider>
// )

export default MainStack;
