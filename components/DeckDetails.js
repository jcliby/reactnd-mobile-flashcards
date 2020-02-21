import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';

import { yellow, blue, pink } from '../utils/colors';
import BigButton from './BigButton';

const DeckDetails = ({ id, title, cardTotal, navigation }) => {
  handleCreateCard = () => {
    navigation.navigate('CreateCard', { id: id });
  };

  handleStartQuiz = () => {
    navigation.navigate('Quiz', { id: id });
  };

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <BigButton
          onPress={() => handleCreateCard()}
          color={blue}
          text={'Create Card'}
        />
      </View>
      <View style={styles.center}>
        <Text style={styles.deckTitle}>{title}</Text>
        <Text style={styles.cardTotal}>{`${cardTotal} Cards`}</Text>
      </View>
      <View style={styles.bottom}>
        <BigButton
          onPress={() => handleStartQuiz()}
          color={yellow}
          text={'Start Quiz'}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: pink
  },
  deckTitle: {
    fontFamily: Platform.OS === 'ios' ? 'Futura' : 'sans-serif',
    fontSize: 35,
    letterSpacing: 10
  },
  cardTotal: {
    fontFamily: Platform.OS === 'ios' ? 'Futura-MediumItalic' : 'sans-serif',
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

function mapStateToProps(decks, { route }) {
  const { id } = route.params;
  return {
    id,
    title: decks[id].title,
    cardTotal: decks[id].cards.length
  };
}

export default connect(mapStateToProps)(DeckDetails);
