// Set up initial scores for both players
let playerScore = 0;
let computerScore = 0;

// Set up the game function to be called
function playGame() {
  // Loop until one player reaches 5 points
  while (playerScore < 5 && computerScore < 5) {
    // Ask the player to choose rock, paper, or scissors
    let playerSelection = prompt("Choose rock, paper, or scissors");

    // Make the player's selection lowercase
    playerSelection = playerSelection.toLowerCase();

    // Generate the computer's random selection
    let computerSelection = Math.random();

    // Determine the computer's choice based on the random number
    if (computerSelection < 0.34) {
      computerSelection = "rock";
    } else if (computerSelection <= 0.67) {
      computerSelection = "paper";
    } else {
      computerSelection = "scissors";
    }

    // Compare the player's selection with the computer's selection
    if (playerSelection === computerSelection) {
      alert("It's a tie!");
    } else if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "paper")
    ) {
      playerScore++;
      alert(`You win this round! Your score: ${playerScore} Computer score: ${computerScore}`);
    } else {
      computerScore++;
      alert(`Computer wins this round! Your score: ${playerScore} Computer score: ${computerScore}`);
    }
  }

  // Determine the winner of the game based on the scores
  if (playerScore > computerScore) {
    alert("Congratulations! You win the game!");
  } else {
    alert("Sorry, you lost the game. Better luck next time!");
  }
}

// Call the game function to start playing
playGame();
