import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';

import { beige } from '../utils/colors';
import ScoreButtons from './ScoreButtons';
import QuizCard from './QuizCard';
import ScoreCard from './ScoreCard';
import BigButton from './BigButton';

class Quiz extends Component {
  state = {
    correct: 0,
    incorrect: 0,
    qIndex: 0,
    showAnswer: false
  };

  handleAnswer = result => {
    if (result === 'correct') {
      this.setState(prevState => ({
        correct: prevState.correct + 1,
        qIndex: prevState.qIndex + 1
      }));
    }

    if (result === 'incorrect') {
      this.setState(prevState => ({
        incorrect: prevState.incorrect + 1,
        qIndex: prevState.qIndex + 1
      }));
    }
  };

  revealAnswer = () => {
    this.setState(prevState => ({
      showAnswer: !prevState.showAnswer
    }));
  };

  restart = () => {
    this.setState({
      correct: 0,
      incorrect: 0,
      qIndex: 0,
      showAnswer: false
    });
  };

  render() {
    const { correct, incorrect, qIndex, showAnswer } = this.state;
    const { deck, cardTotal } = this.props;

    const inProgress = qIndex < cardTotal ? true : false;

    console.log(deck);

    if (inProgress !== true) {
      return (
        <View style={styles.container}>
          <ScoreCard
            deckTitle={deck.title}
            correct={correct}
            cardTotal={cardTotal}
          />
          <BigButton text={'Restart'} color={beige} onPress={this.restart} />
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <QuizCard
            deck={deck}
            qIndex={qIndex}
            showAnswer={showAnswer}
            onPress={this.revealAnswer}
          />
          <View style={styles.bottom}>
            <ScoreButtons
              onPress={this.handleAnswer}
              score={{ correct, incorrect, cardTotal }}
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

function mapStateToProps(decks, { route }) {
  const { id } = route.params;
  return {
    deck: decks[id],
    cardTotal: decks[id].cards.length
  };
}

export default connect(mapStateToProps)(Quiz);
