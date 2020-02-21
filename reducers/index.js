import { ADD_DECK, ADD_CARD, RECEIVE_DECKS } from '../actions';

export default function decks(state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks
      };
    case ADD_DECK:
      return {
        ...state,
        [action.deck.id]: action.deck
      };
    case ADD_CARD:
      console.log('herro', action);
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          cards: [
            ...state[action.id].cards,
            { question: action.card.question, answer: action.card.answer }
          ]
        }
      };
    default:
      return state;
  }
}
