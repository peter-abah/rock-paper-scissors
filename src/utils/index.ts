
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
export function checkWinner(playerChoice: ChoiceType, computerChoice: ChoiceType) {
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