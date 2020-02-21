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

import { addCard } from '../actions';
import { saveCard } from '../utils/api';
import { orange, yellow, blue, purple } from '../utils/colors';
import BigButton from './BigButton';

class CreateCard extends Component {
  state = {
    question: '',
    answer: ''
  };

  submit = () => {
    const { question, answer } = this.state;
    const { dispatch, route } = this.props;

    if (question === '' || answer === '') {
      alert('Please provide a Question and Answer!');
      return;
    }

    const newCard = {
      question: question,
      answer: answer
    };

    dispatch(addCard(route.params.id, newCard));

    this.setState(() => ({
      question: '',
      answer: ''
    }));

    this.navigateToCard();

    saveCard(route.params.id, newCard);
  };

  navigateToCard = () => {
    const { navigation, route } = this.props;
    navigation.navigate('DeckDetails', { id: route.params.id });
  };

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView style={styles.container}>
          <View style={styles.center}>
            <TextInput
              style={[styles.textInput, { borderColor: blue }]}
              defaultValue={'Question'}
              onChangeText={value => this.setState({ question: value })}
            />
            <TextInput
              style={[styles.textInput, { borderColor: yellow }]}
              defaultValue={'Answer'}
              onChangeText={value => this.setState({ answer: value })}
            />
          </View>
          <View style={styles.bottom}>
            <BigButton onPress={this.submit} color={purple} text={'Create'} />
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
    backgroundColor: orange
  },
  textInput: {
    width: '85%',
    fontFamily: Platform.OS === 'ios' ? 'Futura' : 'sans-serif',
    fontSize: 40,
    borderBottomWidth: 5,
    marginTop: 50
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 80
  },
  bottom: {
    justifyContent: 'flex-end'
  }
});

export default connect()(CreateCard);
