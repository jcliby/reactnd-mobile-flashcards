import React, { Component } from 'react';
import { View, SafeAreaView } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import reducer from './reducers';
import DeckList from './components/DeckList';
import CreateDeck from './components/CreateDeck';
import CreateCard from './components/CreateCard';
import DeckDetails from './components/DeckDetails';
import Quiz from './components/Quiz';

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <NavigationContainer>
          <SafeAreaView
            style={{
              flex: 1,
              backgroundColor: '#000000',
              paddingTop: Platform.OS === 'ios' ? 0 : 25
            }}
          >
            <Stack.Navigator headerMode="none">
              <Stack.Screen name="Home" component={DeckList} />
              <Stack.Screen name="CreateDeck" component={CreateDeck} />
              <Stack.Screen name="DeckDetails" component={DeckDetails} />
              <Stack.Screen name="CreateCard" component={CreateCard} />
              <Stack.Screen name="Quiz" component={Quiz} />
            </Stack.Navigator>
          </SafeAreaView>
        </NavigationContainer>
      </Provider>
    );
  }
}
