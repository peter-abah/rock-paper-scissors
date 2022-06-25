import { useState, MouseEvent } from 'react';
import {
  checkWinner,
  randomChoice,
  getGameMessage,
  ChoiceType
} from './utils';
import './App.css';

function App() {
  const [score, setScore] = useState(0);
  const [playerChoice, setPlayerChoice] = useState<ChoiceType | null>(null);
  const [computerChoice, setComputerChoice] = useState<ChoiceType | null>(null);

  // Makes player choice and computer choice and get winner
  function handleClick(e: MouseEvent<HTMLButtonElement>) {
    let choice = e.currentTarget.dataset.choice as ChoiceType;
    setPlayerChoice(choice);
    
    let computerChoice = randomChoice();
    setComputerChoice(computerChoice);
    
    if (checkWinner(choice, computerChoice) === 'win') {
      setScore((score) => score + 1);
    }
  }
  
  function playAgain() {
    // Reset states
    setPlayerChoice(null);
    setComputerChoice(null);
  }
  
  const gameState = playerChoice && computerChoice ?
    checkWinner(playerChoice, computerChoice) :
    null;
  const message = gameState ? getGameMessage(gameState) : '';
  return (
    <div className="App">
      <header>
        <h1> Rock paper scissors </h1>
        <h2>Score: {score}</h2>
      </header>
      
      {gameState ? 
        <div>
          <p>You picked: {playerChoice}</p>
          <p>The house picked: {computerChoice}</p>
          <p>{message}</p>
          <button onClick={playAgain}>Play again</button>
        </div> :

        <div>
          <button onClick={handleClick} data-choice='rock'>Rock</button>
          <button onClick={handleClick} data-choice='paper'>Paper</button>
          <button onClick={handleClick} data-choice='scissors'>Scissors</button>
        </div>
      }
    </div>
  );
}

export default App;
