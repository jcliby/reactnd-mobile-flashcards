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

import { addDeck } from '../actions';
import { saveDeck } from '../utils/api';
import { orange, yellow, blue, purple, green, white } from '../utils/colors';
import { createUUID } from '../utils/helpers';
import BigButton from './BigButton';

class CreateDeck extends Component {
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
          <View style={styles.center}>
            <TextInput
              style={styles.textInput}
              defaultValue={'New Deck'}
              onChangeText={value => this.setState({ deckTitle: value })}
            />
          </View>
          <View style={styles.bottom}>
            <BigButton onPress={this.submit} color={blue} text={'Create'} />
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
    backgroundColor: yellow
  },
  textInput: {
    width: '85%',
    fontFamily: 'Futura',
    fontSize: 40,
    borderBottomWidth: 5,
    borderColor: orange,
    marginTop: 250
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end'
  }
});

export default connect()(CreateDeck);
