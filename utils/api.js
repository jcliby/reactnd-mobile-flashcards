import { AsyncStorage } from 'react-native';

import { formatDeckResults, FLASHCARDS_STORAGE_KEY } from './_decks';

export function getDecks() {
  AsyncStorage.clear();
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY).then(formatDeckResults);
}

export function saveDeck(deck) {
  return AsyncStorage.mergeItem(
    FLASHCARDS_STORAGE_KEY,
    JSON.stringify({ [deck.id]: deck })
  );
}

export function saveCard(key, card) {
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY).then(results => {
    const decks = JSON.parse(results);
    decks[key].cards.push(card);
    AsyncStorage.mergeItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(decks));
  });
}
