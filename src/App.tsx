import { useState } from 'react';
import {
  checkWinner,
  randomChoice,
  getGameMessage,
  ChoiceType
} from './utils';


import Header from './components/Header';
import ChoiceButtons from './components/ChoiceButtons';
import './App.css';

function App() {
  const [score, setScore] = useState(0);
  const [playerChoice, setPlayerChoice] = useState<ChoiceType | null>(null);
  const [computerChoice, setComputerChoice] = useState<ChoiceType | null>(null);

  // Makes player choice and computer choice and get winner
  function handleChoice(choice: string) {
    // Ensures choice is either rolc, paper or scissors;
    if (!['rock', 'paper', 'scissors'].includes(choice)) return;
    
    // Telling typescript that choice contains only rock or paper or scissor
    setPlayerChoice(choice as ChoiceType);
    
    let computerChoice = randomChoice();
    setComputerChoice(computerChoice);
    
    if (checkWinner(choice as ChoiceType, computerChoice) === 'win') {
      setScore((score) => score + 1);
    }
  }
  
  function playAgain() {
    // Reset states
    setPlayerChoice(null);
    setComputerChoice(null);
  }
  
  let gameState = playerChoice && computerChoice ?
    checkWinner(playerChoice, computerChoice) :
    null;
  let message = gameState ? getGameMessage(gameState) : '';

  return (
    <div className="app">
      <Header score={score} />
      {gameState ? 
        <div role='alert'>
          <p>You picked: {playerChoice}</p>
          <p>The house picked: {computerChoice}</p>
          <p>{message}</p>
          <button onClick={playAgain}>Play again</button>
        </div> :

        <ChoiceButtons handleChoice={handleChoice} />
      }
    </div>
  );
}

export default App;
