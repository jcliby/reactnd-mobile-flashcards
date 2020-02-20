import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

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
    letterSpacing: 7,
    fontSize: 35
  },
  cardTotal: {
    fontFamily: 'Futura-MediumItalic',
    fontSize: 10
  }
});

export default Deck;
