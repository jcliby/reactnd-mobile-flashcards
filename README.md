# Mobile Flashcards - Udacity React ND
This is a mobile flashcards application built using React Native + Expo. This project was part of the Udacity React NanoDegree.

## App Functionality
This mobile application (Android / iOS) allows users to study collections of flashcards. 
The app will allow users to create different categories of flashcards called "decks", add flashcards to those decks, then take quizzes on those decks.

---

The primary view, seen when the app loads, is a list of created decks. 
Each deck includes a Title and # of total cards.
Pressing on a deck— app should route to an individual deck view.

![iOS Home Gif](https://media.giphy.com/media/MdLKAmI2oBHQW73DDF/giphy.gif)

The individual deck view includes: the deck title, number of cards in the deck, option to start a quiz for that deck, option to add a new question to the deck.
Pressing the 'Start Quiz' or 'Create Card' button properly routes to the correct views for those activities.

![iOS Create Card gif](https://media.giphy.com/media/cP4xZr2HWaHsHPecLE/giphy.gif)

The Quiz view starts with a question from the selected deck. 
The question is displayed— **tapping the background will toggle on/off the answer**. 
Buttons are included to allow the student to mark their guess as 'Correct' or 'Incorrect' as well as track progress.
When the last question is answered, a score is displayed. 
Users can with restart the quiz or 'swipe' to naigate back to the deck view.

![iOS Quiz Gif](https://media.giphy.com/media/U1U6mGQ6FtlxUHi2xI/giphy.gif)

The user has the ability to create new Decks.
They are routed to the deck view after creating a new deck.

![iOS Create Deck gif](https://media.giphy.com/media/L4fspSa5qViLBUTXMD/giphy.gif)

## Getting Started
To run this app locally— clone this repository and run these commands:

`npm install`

`expo start` or `npm start`

Because this project was built using React Native an iOS or Android simulator or mobile device will need to be configured.
For more info see this [Expo](https://docs.expo.io/versions/v36.0.0/get-started/installation/#2-mobile-app-expo-client-for-ios) guide.

### Notes
This app was built and tested using an Apple iPhone Xs Max and Motorola Moto G4.
