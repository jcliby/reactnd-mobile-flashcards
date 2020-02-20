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
  },
  '6ea239a2-baeb-48a9-804f-b7de80bbfd5a': {
    id: '6ea239a2-baeb-48a9-804f-b7de80bbfd5a',
    title: 'Java',
    cards: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      },
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
  '115274c2-bf11-41fb-b3a6-5cef5df63a27': {
    id: '115274c2-bf11-41fb-b3a6-5cef5df63a27',
    title: 'Node.js',
    cards: [
      {
        question: 'What is a closure?',
        answer:
          'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  },
  '71e21a7e-fbca-4740-b3e1-a1efd383e2f7': {
    id: '71e21a7e-fbca-4740-b3e1-a1efd383e2f7',
    title: 'Python',
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
  'bf0528ba-703e-4099-a9e6-8a48bb5b3ecd': {
    id: 'bf0528ba-703e-4099-a9e6-8a48bb5b3ecd',
    title: 'React Native',
    cards: [
      {
        question: 'What is a closure?',
        answer:
          'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  },
  '0157efdd-99f5-462f-a841-aaba50708b7d': {
    id: '0157efdd-99f5-462f-a841-aaba50708b7d',
    title: 'Google Cloud',
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
