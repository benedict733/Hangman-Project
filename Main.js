// import React, { useState } from "react";
import React from "react"
import '../index.css';
import main_man from "../Img/main_man.svg";
// import main_text from "../Img/main_text.png"

// import Popup from "./Popup";
import {useState} from "react";
import cry from "../Img/cry.svg"
import win from "../Img/win.svg"

import {Modal,Button,CloseButton,ButtonGroup} from 'react-bootstrap'  
export default function Main() {
    // const [buttonPopup,setButtonPopup] = useState(true);
  //lose modal
  const [showLose, setLoseShow] = useState(false);
  const loseClose = () => setLoseShow(false);
  const loseShow = () => setLoseShow(true);

  //win model
  const [showWin, setWinShow] = useState(false);

  const winClose = () => setWinShow(false);
  const winShow = () => setWinShow(true);

  //instruction modal
  const [instruction, setInstruction] = useState(false);

  const instructionClose = () => setInstruction(false);
  const instructionShow = () => setInstruction(true);

    //start modal
    const [showStart, setStart] = useState(false);

    const startClose = () => setStart(false);
    const startShow = () => setStart(true);

    return (
        <div>
        <main>
            <div class="container">
                <img src={main_man} class="manImg"/>
                <div id="hometxt">
                <h1 class="center">HANG MAN</h1>
                <button class="homeBtn" onClick={startShow}>Start</button>
                <button class="homeBtn" onClick={instructionShow}>How To Play</button>
                {
                /* <button onclick={()=>setButtonPopup(true)}>
                    open popup win</button> */}
                  <Button variant="primary" onClick={loseShow}>
                  Launch lose model
                 </Button>

                 <Button variant="primary" onClick={winShow}>
                  Launch win model
                 </Button>
                 </div> 
                 <Modal show={showLose} onHide={loseClose}>
                    {/* <Modal.Header>
                    <CloseButton variant="white" onClick={instructionClose} />
                  <Modal.Title>Modal heading</Modal.Title> 
                     </Modal.Header> */}
                  <Modal.Body>
                    <div>
                    <img src={cry} className="loseWin"/>
                    <div class="gameOver">Game Over</div>
                
                    <Button  onClick={loseClose} className="tryPlayAgainBtn">Try again
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
                    <img src={win} className="loseWin"/>
                    <div class="gameOver">You Win</div>
                
                    <Button  onClick={winClose} className="tryPlayAgainBtn">Play again
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
              
                <Modal show={instruction} onHide={instructionClose}>
                  {/* <Modal.Header>
                  <CloseButton variant="white" onClick={instructionClose}/>
                  <Modal.Title>Modal heading</Modal.Title> 
                  </Modal.Header> */}
                  <Modal.Body>
                  {/* <img src={cry}/> */}
                  <div class="instructionTxt">
                  1. Guess the letter of the word.
                  <br></br>
                  <br></br>
                  2. Click the letter on the keyboard shown on the screen to select the letter you have guessed.
                  <br></br>
                  <br></br>
                  3. A body part will be added if wrong letter was guessed.
                  <br></br>
                  <br></br>
                  4. Letters which are correctly guessed will be shown on the screen.
                  <br></br>
                  <br></br>
                  5. If all the body parts are shown, the game ends.
                  </div>
              
                  <Button  onClick={instructionClose} className="tryPlayAgainBtn">Close
                    </Button>

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

                <Modal show={showStart} onHide={startClose}>
                    <Modal.Header>
                    <CloseButton variant="white" onClick={startClose} />
                  {/* <Modal.Title>Modal heading</Modal.Title>  */}
                     </Modal.Header>
                  <Modal.Body>
                    <div>
 
                  <ButtonGroup vertical size="lg" className="mb-2">
                    <Button variant="outline-success" id="easy">Easy</Button>
                    <Button variant="outline-warning" id="medium">Medium</Button>
                    <Button variant="outline-danger" id="hard">Hard</Button>
                  </ButtonGroup>
                  <Button className="popupStartBtn">Start</Button>
                    <br />
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
        

        
        </main>
{/*         
    <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
    <img src={cry}/>
        <div class="gameOverWin">Game Over</div>
        <button class="homeBtn">Try again</button>
    </Popup> */}
    </div>
      ) 
}