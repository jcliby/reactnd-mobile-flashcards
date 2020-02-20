import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

import { white } from '../utils/colors';

const BigButton = ({ onPress, text, color }) => {
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: color }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 110,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontFamily: 'Futura',
    fontSize: 40,
    color: white
  }
});

export default BigButton;
