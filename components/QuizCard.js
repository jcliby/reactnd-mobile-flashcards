import React, { Component } from 'react';
import { Text, StyleSheet, View, TouchableWithoutFeedback } from 'react-native';

import { blue, beige } from '../utils/colors';

const QuizCard = ({ deck, qIndex, showAnswer, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <Text style={styles.questionText}>
            {`Q: ${deck.cards[qIndex].question}`}
          </Text>
        </View>
        <View style={styles.subContainer}>
          {showAnswer ? (
            <Text style={styles.answerText}>
              {`A: ${deck.cards[qIndex].answer}`}
            </Text>
          ) : null}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: beige
  },
  questionText: {
    fontFamily: Platform.OS === 'ios' ? 'Futura' : 'sans-serif',
    fontSize: 30,
    textAlign: 'left'
  },
  answerText: {
    fontFamily: Platform.OS === 'ios' ? 'Futura' : 'sans-serif',
    fontSize: 25,
    textAlign: 'right',
    color: blue
  },
  subContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 5,
    paddingRight: 5
  }
});

export default QuizCard;
