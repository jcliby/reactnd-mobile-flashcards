import React, { Component } from 'react';
import { Text, StyleSheet, View, TouchableWithoutFeedback } from 'react-native';

import { blue, beige } from '../utils/colors';

class QuizCard extends Component {
  state = {
    showAnswer: false
  };

  revealAnswer = () => {
    this.setState(prevState => ({
      showAnswer: !prevState.showAnswer
    }));
  };

  render() {
    const { showAnswer } = this.state;
    return (
      <TouchableWithoutFeedback onPress={this.revealAnswer}>
        <View style={styles.container}>
          <View style={styles.subContainer}>
            <Text style={styles.questionText}>
              Q: Where do you make Ajax requests in React?
            </Text>
          </View>
          <View style={styles.subContainer}>
            {showAnswer ? (
              <Text style={styles.answerText}>
                A: The combination of a function and the lexical environment
                within which The combination of a function and the lexical
                environment within which that function was declared.
              </Text>
            ) : null}
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

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
