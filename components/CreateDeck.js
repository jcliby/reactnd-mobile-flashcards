import React, { Component } from 'react';
import {
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  View,
  Keyboard,
  TouchableWithoutFeedback
} from 'react-native';
import { connect } from 'react-redux';

import { addDeck } from '../actions';
import { saveDeck } from '../utils/api';
import { orange, yellow, blue } from '../utils/colors';
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
    fontFamily: Platform.OS === 'ios' ? 'Futura' : 'sans-serif',
    fontSize: 40,
    borderBottomWidth: 5,
    borderColor: orange
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 30
  },
  bottom: {
    justifyContent: 'flex-end'
  }
});

export default connect()(CreateDeck);
