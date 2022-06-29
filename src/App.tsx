import { useState } from 'react';
import {
  checkWin,
  randomChoice,
  ChoiceType
} from './utils';


import Header from './components/Header';
import GameResult from './components/GameResult';
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
    
    if (checkWin(choice as ChoiceType, computerChoice) === 'win') {
      setScore((score) => score + 1);
    }
  }
  
  function playAgain() {
    // Reset states
    setPlayerChoice(null);
    setComputerChoice(null);
  }
  
  const showResult = playerChoice && computerChoice;

  return (
    <div className="app">
      <Header score={score} />
      {showResult ? 
        <GameResult
          playerChoice={playerChoice}
          computerChoice={computerChoice}
          playAgain={playAgain}
        /> :

        <ChoiceButtons handleChoice={handleChoice} />
      }
    </div>
  );
}

export default App;
