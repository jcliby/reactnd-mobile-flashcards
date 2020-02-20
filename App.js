import React, { Component } from 'react';
import { View, SafeAreaView } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import DeckList from './components/DeckList';
import reducer from './reducers';
import CreateDeck from './components/CreateDeck';

export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <SafeAreaView style={{ flex: 1 }}>
          <CreateDeck />
        </SafeAreaView>
      </Provider>
    );
  }
}
