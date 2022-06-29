import { checkWin, getGameMessage, ChoiceType } from '../../utils';
import ChoiceBtn from '../ChoiceBtn';
import './GameResult.css';

interface Props {
  playerChoice: ChoiceType;
  computerChoice: ChoiceType;
  playAgain: () => void;
}

function GameResult({ playerChoice, computerChoice, playAgain}: Props) {
  const result = checkWin(playerChoice, computerChoice);
  const msg = getGameMessage(result).toUpperCase();
  return (
    <div className='game-result' role='alert'>
      <div className='game-result-choice'>
        <ChoiceBtn
          choice={playerChoice}
          isWinner={result === 'win'}
        />
        <p>YOU PICKED</p>
      </div>
      
      <div className='game-result-choice'>
        <ChoiceBtn
          choice={computerChoice}
          isWinner={result === 'lose'}
        />
        <p>THE HOUSE PICKED</p>
      </div>
      
      <div className='play-again-wrapper'>
        <p>{msg}</p>
        <button onClick={playAgain}>PLAY AGAIN</button>
      </div>
    </div>
  );
}

export default GameResult;