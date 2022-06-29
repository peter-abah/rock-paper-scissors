
// winning conditions for rock paper scissors
// The key beats the value
const winningConditions = {
  rock: 'scissors',
  scissors: 'paper',
  paper: 'rock'
}

// Types for choices i.e rock | paper | scissors
export type ChoiceType = keyof typeof winningConditions;

// Checks if player wins, loses or ties in rock paper scissors
export function checkWin(playerChoice: ChoiceType, computerChoice: ChoiceType) {
  if (winningConditions[playerChoice] === computerChoice) {
    return 'win';
  }
  if (winningConditions[computerChoice] === playerChoice) {
    return 'lose';
  }
  
  return 'tie';
}

// Get random choice between rock paper and scissors
export function randomChoice(): ChoiceType {
  let choices = ['rock', 'paper', 'scissors'];
  let index = Math.floor(Math.random() * 3);
  return choices[index] as ChoiceType;
}

// Returns message for user based on game state
export function getGameMessage(state: string) {
  if (state === 'win') {
    return 'You Win';
  } else if (state === 'lose') {
    return 'You Lose'
  }
  
  return 'Tie';
}

// Returns the string in titleCase
// Will convert first character to upper case and 
// the rest to lowercase
export function titleCase(s: string) {
  if (s.length < 1) return s;
  
  return s[0].toUpperCase() + s.substring(1).toLowerCase();
}