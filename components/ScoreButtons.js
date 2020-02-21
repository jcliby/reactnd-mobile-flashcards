import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';

import { white, green, pink } from '../utils/colors';

const ScoreButtons = ({ onPress, score }) => {
  handleCorrect = () => {
    onPress('correct');
  };

  handleIncorrect = () => {
    onPress('incorrect');
  };

  const { correct, incorrect, deckSize } = score;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.subContainer, { backgroundColor: green }]}
        onPress={handleCorrect}
      >
        <Text style={styles.text}>Correct</Text>
        <Text style={styles.scoreText}>{`${correct} / ${deckSize}`}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.subContainer, { backgroundColor: pink }]}
        onPress={handleIncorrect}
      >
        <Text style={styles.text}>Incorrect</Text>
        <Text style={styles.scoreText}>{`${incorrect}`}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  subContainer: {
    flex: 1,
    height: 110,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontFamily: 'Futura',
    fontSize: 40,
    color: white
  },
  scoreText: {
    fontFamily: 'Futura-MediumItalic',
    fontSize: 10,
    color: white
  }
});

export default ScoreButtons;
