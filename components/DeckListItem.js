import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const DeckListItem = ({ deck, color, onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.deck, { backgroundColor: color }]}
        onPress={() => onPress(deck.id)}
      >
        <Text style={styles.deckTitle}>{deck.title}</Text>
        <Text style={styles.cardTotal}>{deck.cards.length} Cards</Text>
      </TouchableOpacity>
    </View>
  );
};

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
    fontFamily: Platform.OS === 'ios' ? 'Futura' : 'sans-serif',
    letterSpacing: 7,
    fontSize: 35
  },
  cardTotal: {
    fontFamily: Platform.OS === 'ios' ? 'Futura-MediumItalic' : 'sans-serif',
    fontSize: 10
  }
});

export default DeckListItem;
