
// winning conditions for rock paper scissors
// The key beats the value
const winningConditions = {
  rock: 'scissors',
  scissors: 'paper',
  paper: 'rock'
}

// Types for choices i.e rock | paper | scissors
export type ChoiceType = keyof typeof winningConditions;

// Checks for winner or tie in rock paper scissors
export function checkWinner(choice1: ChoiceType, choice2: ChoiceType) {
  if (winningConditions[choice1] === choice2) {
    return { winner: choice1 };
  } else if (winningConditions[choice2] === choice1) {
    return { winner: choice2 };
  }
  
  return { tie: true };
}

// Get random choice between rock paper and scissors
export function randomChoice(): ChoiceType {
  let choices = ['rock', 'paper', 'scissors'];
  let index = Math.floor(Math.random() * 3);
  return choices[index] as ChoiceType;
}