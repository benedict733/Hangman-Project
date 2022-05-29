import React, { useState, useEffect, useCallback } from "react";
import { randomWord } from "./Words";
import "./Hangman.css";
import { Helmet } from "react-helmet";
// import Keyboard from "./keyboard/createKeyboard.js"

// import hangman images here:
import initial_state from "../assets/initial_state.svg";
import state1 from "../assets/state1.svg";
import state2 from "../assets/state2.svg";
import state3 from "../assets/state3.svg";
import state4 from "../assets/state4.svg";
import state5 from "../assets/state5.svg";
import state6 from "../assets/state6.svg";

// List of images
const imageList = [
  initial_state,
  state1,
  state2,
  state3,
  state4,
  state5,
  state6,
];

const Hangman = () => {
  const [chosenWord, setChosenWord] = useState("");
  const [keyedLetter, setKeyedLetter] = useState("");
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [alphabet, setAlphabet] = useState("");
  const [imageID, setImageID] = useState(0);

  // Randomly choose a word, resets the correct letters and wrong letters
  const chooseWord = () => {
    setChosenWord((chosenWord) => randomWord());
    setCorrectLetters((correctLetters) => []);
    setWrongLetters((wrongLetters) => []);
  };

  // Sets the current image frame to the next image frame
  const nextImage = () => {
    setImageID((currentID) => currentID + 1);
  };

  // On screen start, choose a word
  useEffect(() => {
    chooseWord();
  }, []);

  // Checks the current letters
  const checkLetters = useCallback(
    (letter) => {
      if (correctLetters.includes(letter) || wrongLetters.includes(letter)) {
        // letter repeated
      }
      if (
        chosenWord.split("").includes(letter) &&
        !correctLetters.includes(letter)
      ) {
        // letter is correct
        setCorrectLetters((correctLetters) => [...correctLetters, letter]);
      }
      if (
        !chosenWord.split("").includes(letter) &&
        !wrongLetters.includes(letter)
      ) {
        // letter is wrong
        setWrongLetters((wrongLetters) => [...wrongLetters, letter]);
        nextImage();
      }

      // winning decision
      if (correctLetters.length === chosenWord.length) {
        alert("you win");
      }

      // losing decision
      if (imageID === 5) {
        alert("you lose");
      }
    },
    [chosenWord, correctLetters, imageID, wrongLetters]
  );

  // Handles the effect when an alphabet button is pressed
  const alphabetButtonHandler = (i) => {
    setAlphabet((alphabet) => i);
    checkLetters(i);
  };

  return (
    <div>
      <div className="header">
        <h1> Hangman </h1>
      </div>
      <div className="hangman-image">
        <img id="image" src={imageList[imageID]} alt="hangman" />
      </div>
      <div className="letters-container">
        {[
          ...chosenWord.split("").map((letter) => {
            return correctLetters.includes(letter) ? letter : "";
          }),
        ].map((letter, index) => (
          <div className="letters" key={index}>
            {letter}
          </div>
        ))}
      </div>
      <br />
      <div id="keyboard">
        <Helmet>
          <script src="/keyboard/script.js" type="text/javascript" />
        </Helmet>
      </div>
    </div>
  );
};

export default Hangman;
