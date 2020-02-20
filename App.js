import React, { Component } from 'react';
import { View, SafeAreaView } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import DeckList from './components/DeckList';
import reducer from './reducers';
import CreateDeck from './components/CreateDeck';
import CreateCard from './components/CreateCard';
import DeckDetails from './components/DeckDetails';

export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <NavigationContainer>
          <SafeAreaView style={{ flex: 1 }}>
            <DeckDetails />
          </SafeAreaView>
        </NavigationContainer>
      </Provider>
    );
  }
}
