import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';

import { yellow, blue, pink } from '../utils/colors';
import BigButton from './BigButton';

class DeckDetails extends Component {
  submitAddCard = () => {};

  submitStartQuiz = () => {};

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <BigButton
            onPress={this.submitAddCard}
            color={blue}
            text={'Create Card'}
          />
        </View>
        <View style={styles.center}>
          <Text style={styles.deckTitle}>Title</Text>
          <Text style={styles.cardTotal}>0 Cards</Text>
        </View>
        <View style={styles.bottom}>
          <BigButton
            onPress={this.submitStartQuiz}
            color={yellow}
            text={'Start Quiz'}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: pink
  },
  deckTitle: {
    fontFamily: 'Futura',
    fontSize: 80,
    letterSpacing: 15
  },
  cardTotal: {
    fontFamily: 'Futura-MediumItalic',
    fontSize: 20
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bottom: {
    justifyContent: 'flex-end'
  },
  top: {
    justifyContent: 'flex-start'
  }
});

export default connect()(DeckDetails);
