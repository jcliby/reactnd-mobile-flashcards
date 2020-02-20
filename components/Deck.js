import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';

import { white } from '../utils/colors';

class Deck extends Component {
  render() {
    const { deck, color } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity style={[styles.deck, { backgroundColor: color }]}>
          <Text style={styles.deckTitle}>{deck.title}</Text>
          <Text style={styles.cardTotal}>{deck.cards.length} Cards</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch'
  },
  deck: {
    height: 110,
    alignItems: 'center',
    justifyContent: 'center'
  },
  deckTitle: {
    fontFamily: 'Futura',
    fontSize: 40,
    color: white
  },
  cardTotal: {
    fontFamily: 'Futura',
    color: white
  }
});

export default Deck;
