import React, { useState, useEffect, useCallback } from "react";
import { randomWord } from "./Words";

// import hangman images here:
import image1 from "../assets/1.png";
import image2 from "../assets/2.png";
import image3 from "../assets/3.png";
import image4 from "../assets/3.png";

// List of alphabets in the english language
const alphabetList = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

// List of images
const imageList = [image1, image2, image3, image4]

const Hangman = () => {
  const [chosenWord, setChosenWord] = useState("");
  const [keyedLetter, setKeyedLetter] = useState("");
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [alphabet, setAlphabet] = useState('');
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
  const checkLetters = useCallback((letter) => {
    
    if (correctLetters.includes(letter) || wrongLetters.includes(letter)) {
      // letter repeated
    }
    if (chosenWord.split("").includes(letter) && !correctLetters.includes(letter)) {
      // letter is correct
      setCorrectLetters((correctLetters) => [...correctLetters, letter]);
    }
    if (!chosenWord.split("").includes(letter) && !wrongLetters.includes(letter)) {
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
  }

  return (
    <div>
      <div className="header">
        <h1> Hangman </h1>
      </div>
      <div className="hangman-image">
        <img src={imageList[imageID]} alt="hangman" />
      </div>
      <div className="letters-container">
        {[
          ...chosenWord.split("").map((letter) => {
            return correctLetters.includes(letter) ? letter : "";
          })
        ].map((letter, index) => (
          <div className="letters" key={index}>
            {letter}
          </div>
        ))}
      </div>
      <br />
      <div className="alphabets-container">
          {/* TODO: Add alphabets here. Task is just to map the given alphabets */}
      </div>
    </div>
  );
};

export default Hangman;
