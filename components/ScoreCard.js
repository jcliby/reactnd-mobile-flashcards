import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';

import { grey } from '../utils/colors';

const ScoreCard = ({ deckTitle, correct, deckTotal, onPress }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.deckTitle}>Javascript</Text>
      <Text style={styles.cardTotal}>00 %</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: grey
  },
  deckTitle: {
    fontFamily: Platform.OS === 'ios' ? 'Futura' : 'sans-serif',
    fontSize: 40,
    letterSpacing: 15
  },
  cardTotal: {
    fontFamily: Platform.OS === 'ios' ? 'Futura-MediumItalic' : 'sans-serif',
    fontSize: 20
  }
});

export default ScoreCard;
