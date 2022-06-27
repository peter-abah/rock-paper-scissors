import ChoiceBtn from '../ChoiceBtn';
import './ChoiceButtons.css';

interface Props {
  handleChoice: (choice: string) => void;
}

function ChoiceButtons({handleChoice}: Props) {
  const choices = ['paper', 'scissors', 'rock'];

  return (
    <main className='choice-btns'>
      {choices.map((choice) => (
        <ChoiceBtn
          key={choice}
          choice={choice}
          onClick={() => handleChoice(choice)}
        />
      ))}
    </main>
  );
}

export default ChoiceButtons;