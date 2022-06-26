import './Header.css';

interface Props {
  score: number;
};
function Header({ score }: Props) {
  return (
    <header className='header'>
      <h1>
        <span>ROCK</span>
        <span>PAPER</span>
        <span>SCISSORS</span>
      </h1>
      
      <div className='score-wrapper'>
        <h2>SCORE</h2>
        <span className='score'>{score}</span>
      </div>
    </header>  
  );
}

export default Header;