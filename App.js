import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { StatusBar } from 'react-native';
import ListScreen from './screens/ListScreen';
import ArticleDetail from './screens/ArticleDetail';

StatusBar.setBarStyle('light-content');

const MainStack = createStackNavigator(
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
);

export default createAppContainer(MainStack);
