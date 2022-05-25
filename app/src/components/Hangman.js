import React, { useState, useEffect, useCallback } from "react";

// import hangman images here:
import image1 from "../assets/1.png"
import image2 from "../assets/2.png"
import image3 from "../assets/3.png"
import image4 from "../assets/3.png"


const alphabetList = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
const wordList = ['apple', 'banana', 'cherry', 'durian']

const imageList = [image1, image2, image3, image4]

const Hangman = () => {

  const [chosenWord, setChosenWord] = useState("");
  const [keyedLetter, setKeyedLetter] = useState("");
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [imageID, setImageID] = useState(0);

  // Randomly choose a word, resets the correct letters and wrong letters
  const chooseWord = () => {
    setChosenWord(
      (chosenWord) => wordList[Math.floor(Math.random() * wordList.length)]
    );
    setCorrectLetters((correctLetters) => []);
    setWrongLetters((wrongLetters) => []);
  }

  const nextImage = () => { 
    setImageID((currentID) => currentID + 1); 
  };

  // On screen start, choose a word
  useEffect(() => { chooseWord(); }, []);

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
      alert("you win")
    } 

    // losing decision
    if (imageID === 5) {
      alert("you lose")
    }

  }, [chosenWord, correctLetters, imageID, wrongLetters]);

  return (
    <div>
      <div className="header">
        <h1> Hangman </h1>
      </div>
      <div className="hangman-image">
        <img src={imageList[imageID]} alt="hangman" />
      </div>
      <div className="letters-container">
        {/* stores the letters (blanks) here */}
      </div>
      <div className="alphabets-container">
        {/* stores the alphabets here */}
      </div>
    </div>
  );
};

export default Hangman;
