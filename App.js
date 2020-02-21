import React, { Component } from 'react';
import { View, SafeAreaView } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import reducer from './reducers';
import DeckList from './components/DeckList';
import CreateDeck from './components/CreateDeck';
import CreateCard from './components/CreateCard';
import DeckDetails from './components/DeckDetails';
import Quiz from './components/Quiz';

export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <NavigationContainer>
          <SafeAreaView style={{ flex: 1, backgroundColor: '#000000' }}>
            <Quiz />
          </SafeAreaView>
        </NavigationContainer>
      </Provider>
    );
  }
}
