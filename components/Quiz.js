import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import { beige } from '../utils/colors';
import ScoreButtons from './ScoreButtons';
import QuizCard from './QuizCard';
import ScoreCard from './ScoreCard';
import BigButton from './BigButton';

class Quiz extends Component {
  state = {
    inProgress: true,
    correct: 0,
    incorrect: 0
  };

  handleAnswer = result => {
    if (result === 'correct') {
      this.setState(prevState => ({
        correct: prevState.correct + 1
      }));
    }

    if (result === 'incorrect') {
      this.setState(prevState => ({
        incorrect: prevState.incorrect + 1
      }));
    }
  };

  render() {
    const { inProgress, correct, incorrect } = this.state;
    const deckSize = 10;

    if (inProgress === true) {
      return (
        <View style={styles.container}>
          <ScoreCard />
          <BigButton text={'Restart'} color={beige} />
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <QuizCard />
          <View style={styles.bottom}>
            <ScoreButtons
              onPress={this.handleAnswer}
              score={{ correct, incorrect, deckSize }}
            />
          </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: beige
  },
  bottom: {
    justifyContent: 'flex-end'
  }
});

export default Quiz;
