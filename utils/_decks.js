import { AsyncStorage } from 'react-native';

export const FLASHCARDS_STORAGE_KEY = 'udacity:flashcards-rnd';

const dummyData = {
  '60323a94-32fb-4a5b-bd23-1db0cbd894e3': {
    id: '60323a94-32fb-4a5b-bd23-1db0cbd894e3',
    title: 'React',
    cards: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  'a9bd7179-491d-4359-8f24-cd4b220c9d2d': {
    id: 'a9bd7179-491d-4359-8f24-cd4b220c9d2d',
    title: 'JavaScript',
    cards: [
      {
        question: 'What is a closure?',
        answer:
          'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
};

function setDummyData() {
  AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(dummyData));
  return dummyData;
}

export function formatDeckResults(results) {
  return results === null ? setDummyData() : JSON.parse(results);
}
