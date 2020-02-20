import React, { Component } from 'react';
import {
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  StyleSheet,
  View,
  Keyboard,
  TouchableWithoutFeedback
} from 'react-native';
import { connect } from 'react-redux';

import { orange, yellow, blue, purple, green, white } from '../utils/colors';
import BigButton from './BigButton';

class DeckDetails extends Component {
  state = {
    deckTitle: ''
  };

  submit = () => {
    const { deckTitle } = this.state;
    const { dispatch } = this.props;
    const id = createUUID();

    if (deckTitle === '') {
      alert('Give your deck a name!');
      return;
    }

    const newDeck = {
      id,
      title: deckTitle.trim(),
      cards: []
    };

    dispatch(addDeck({ [id]: newDeck }));

    this.setState(() => ({
      deckTitle: ''
    }));

    saveDeck(id, newDeck);
  };

  render() {
    const { deckTitle } = this.state;

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView style={styles.container}>
          <View style={styles.top}>
            <BigButton onPress={this.submit} color={green} text={'Add Card'} />
          </View>
          <View style={styles.center}>
            <Text style={styles.deckTitle}>Title</Text>
            <Text style={styles.cardTotal}>Cards</Text>
          </View>
          <View style={styles.bottom}>
            <BigButton
              onPress={this.submit}
              color={orange}
              text={'Start Quiz'}
            />
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: purple
  },
  deckTitle: {
    fontFamily: 'Futura',
    fontSize: 60
  },
  cardTotal: {
    fontFamily: 'Futura'
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  top: {
    flex: 1,
    justifyContent: 'flex-start'
  }
});

export default connect()(DeckDetails);
