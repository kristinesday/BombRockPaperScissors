
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || 'bomb') {
    return userInput;
  } else {
    console.log('Error! Please type rock, paper or scissors!'); 
  }
}

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3)
  switch (randomNumber) {
    case 0: 
    return 'rock' ;
    case 1: 
    return 'paper';
    case 2: 
    return 'scissors';
  }
}

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
  return 'It is a tie!';
  }
  if (userChoice === 'rock' ) {
    if (computerChoice === 'paper') {
      return 'Sorry, computer won!';
    } else {
      return 'Woohoo! You won!';
    }
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'Sorry, computer won!';
    } else {
      return 'Woohoo! You won!'
    }
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Sorry, computer won!';
    } else {
      return 'Woohoo! You won!'
    }
  }
  if (userChoice === 'bomb') {
      return 'You won! Because humans are better!'
    }
}; 


const playGame = () => {
  const  userChoice = getUserChoice('bomb');
  const  computerChoice = getComputerChoice();
  console.log('You threw: '+ userChoice);
  console.log('Computer threw: '+ computerChoice);
  
  console.log(determineWinner(userChoice, computerChoice));  
}; 

playGame ()
