import React, { useState, useEffect, useCallback } from "react";
import { randomWord } from "./Words";
import "./Hangman.css";

import cry from "../assets/cry.svg";
import win from "../assets/win.svg";

import { Modal, Button } from "react-bootstrap";

// import hangman frames
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

const alphabets = [
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "z",
  "x",
  "c",
  "v",
  "b",
  "n",
  "m",
];

const Hangman = (difficulty) => {
  const [chosenWord, setChosenWord] = useState("");
  const [keyedLetter, setKeyedLetter] = useState("");
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [alphabet, setAlphabet] = useState("");
  const [imageID, setImageID] = useState(0);

  const [showLose, setLoseShow] = useState(false);
  const loseClose = () => {
    setLoseShow(false);
    window.location.reload();
  };
  const loseShow = () => setLoseShow(true);

  //win model
  const [showWin, setWinShow] = useState(false);
  const winClose = () => {
    setWinShow(false);
    window.location.reload();
  };
  const winShow = () => setWinShow(true);

  // Randomly choose a word, resets the correct letters and wrong letters
  const chooseWord = () => {
    setChosenWord((chosenWord) => randomWord(difficulty));
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
        // letter repeated, do nothing
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
        winShow();
      }

      // losing decision
      if (imageID === 5) {
        loseShow();
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
        Guess The Word
      </div>
      <div className="hangman-image">
        <img id="image" src={imageList[imageID]} alt="hangman" />
      </div>
      <div className="letterContainer">
        <div className="inside-letter-container">

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
      </div>
      <br />
      <div id="keyboard">
        {alphabets.map((i, k) => (
          <button
            onClick={() => alphabetButtonHandler(i)}
            key={k}
            className={`alphabet  ${
              correctLetters.includes(i)
                ? "correct"
                : wrongLetters.includes(i)
                ? "wrong"
                : ""
            }`}
          >
            {i}
          </button>
        ))}
      </div>
      <div>
        <Modal show={showLose} onHide={loseClose}>
          {/* <Modal.Header>
                  <CloseButton variant="white" onClick={instructionClose} />
                <Modal.Title>Modal heading</Modal.Title> 
                   </Modal.Header> */}
          <Modal.Body>
            <div>
              <img src={cry} className="loseWin" />
              <div class="gameOver">Game Over</div>

              <Button onClick={loseClose} className="tryPlayAgainBtn">
                Try again
              </Button>
            </div>
          </Modal.Body>
          {/* <Modal.Footer>
                  <Button variant="secondary" onClick={loseClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={loseClose}>
                    Save Changes
                  </Button>
                </Modal.Footer> */}
        </Modal>

        <Modal show={showWin} onHide={winClose}>
          {/* <Modal.Header>
                  <CloseButton variant="white" onClick={instructionClose} />
                <Modal.Title>Modal heading</Modal.Title> 
                   </Modal.Header> */}
          <Modal.Body>
            <div>
              <img src={win} className="loseWin" />
              <div class="gameOver">You Win</div>

              <Button onClick={winClose} className="tryPlayAgainBtn">
                Play again
              </Button>
            </div>
          </Modal.Body>
          {/* <Modal.Footer>
                  <Button variant="secondary" onClick={loseClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={loseClose}>
                    Save Changes
                  </Button>
                </Modal.Footer> */}
        </Modal>
      </div>
    </div>
  );
};

export default Hangman;