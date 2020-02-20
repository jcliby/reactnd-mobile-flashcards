import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList
} from 'react-native';
import { connect } from 'react-redux';

import {
  orange,
  yellow,
  blue,
  purple,
  green,
  white,
  pink,
  grey,
  beige
} from '../utils/colors';
import Deck from './Deck';
import { getDecks } from '../utils/api';
import { receiveDecks } from '../actions';
import BigButton from './BigButton';

const colors = [beige, pink, green, grey, orange, white, yellow];

class DeckList extends Component {
  state = {
    loading: true
  };

  componentDidMount() {
    const { dispatch } = this.props;
    getDecks()
      .then(decks => dispatch(receiveDecks(decks)))
      .then(() => this.setState(() => ({ loading: false })));
  }

  getBackgroundColors = (colors, size) => {
    let newArr = new Array(size);

    for (let i = 0; i < size; i++) {
      newArr[i] = colors[i % colors.length];
    }

    return newArr;
  };

  render() {
    const { decks } = this.props;
    const { loading } = this.state;

    if (loading === true) {
      return <Text>loading</Text>;
    }

    const backgroundColors = this.getBackgroundColors(
      colors,
      Object.keys(decks).length
    );

    return (
      <View style={styles.container}>
        <FlatList
          data={Object.keys(decks).map(id => {
            return { key: id };
          })}
          renderItem={({ item, index }) => (
            <Deck deck={decks[item.key]} color={backgroundColors[index]} />
          )}
          keyExtractor={item => item.key}
        />
        <BigButton color={blue} text={'Create Deck'} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

function mapStateToProps(decks) {
  return {
    decks
  };
}

export default connect(mapStateToProps)(DeckList);
