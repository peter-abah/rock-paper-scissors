import { useState, MouseEvent } from 'react';
import {
  checkWinner,
  randomChoice,
  getGameMessage,
  ChoiceType
} from './utils';


import Header from './components/Header';
import ChoiceBtn from './components/ChoiceBtn';
import './App.css';

function App() {
  const [score, setScore] = useState(0);
  const [playerChoice, setPlayerChoice] = useState<ChoiceType | null>(null);
  const [computerChoice, setComputerChoice] = useState<ChoiceType | null>(null);

  // Makes player choice and computer choice and get winner
  function handleClick(e: MouseEvent<HTMLButtonElement>) {
    let choice = e.currentTarget.dataset.choice as ChoiceType;
    if (choice == null) return;

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
  
  let gameState = playerChoice && computerChoice ?
    checkWinner(playerChoice, computerChoice) :
    null;
  let message = gameState ? getGameMessage(gameState) : '';
  const choices = ['rock', 'paper', 'scissors'];

  return (
    <div className="app">
      <Header score={score} />
      {gameState ? 
        <div>
          <p>You picked: {playerChoice}</p>
          <p>The house picked: {computerChoice}</p>
          <p>{message}</p>
          <button onClick={playAgain}>Play again</button>
        </div> :

        <div>
          {choices.map((choice) => (
            <ChoiceBtn
              key={choice}
              choice={choice}
              onClick={handleClick}
              data-choice={choice}
            />
          ))}
        </div>
      }
    </div>
  );
}

export default App;
