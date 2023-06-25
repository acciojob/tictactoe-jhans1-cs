//your JS code here. If required.
// Get the elements
const player1Input = document.getElementById("player-1");
const player2Input = document.getElementById("player-2");
const submitButton = document.getElementById("submit");
const messageDiv = document.querySelector(".message");
const cells = document.querySelectorAll(".cell");

let currentPlayer = 1;
let player1Name = "";
let player2Name = "";

// Add event listener to the submit button
submitButton.addEventListener("click", function() {
  player1Name = player1Input.value;
  player2Name = player2Input.value;
  // Display player's turn message
  messageDiv.textContent = player1Name + ", you're up!";
});

// Add event listener to the cells
cells.forEach(cell => {
  cell.addEventListener("click", function() {
    if (this.textContent === "") {
      if (currentPlayer === 1) {
        this.textContent = "X";
        messageDiv.textContent = player2Name + ", you're up!";
        currentPlayer = 2;
      } else {
        this.textContent = "O";
        messageDiv.textContent = player1Name + ", you're up!";
        currentPlayer = 1;
      }
    }
  });
});