/**
 * Instantiate a game board with 3x3 cell and provide
 * essential API to manage the game.
 *
 * @param {string} firstPlayer name of the first player.
 * @param {string} secondPlayer name of the second player.
 * @returns a gameBoard object with associated functions
 */
function createGameBoard() {
  let firstPlayer = null;
  let secondPlayer = null;
  let isFirstPlayerTurn = true;
  const gameBoard = [];
  gameBoard.length = 9;
  gameBoard.fill(null);

  /**
   * Display a modal to retrieve the name of the players.
   */
  const getPlayersName = () => {
    const body = document.querySelector("body");

    const background = document.createElement("div");
    background.id = "modal-background";
    const modal = document.createElement("form");
    const gameTitle = document.createElement("h2");
    gameTitle.textContent = "Tic-Tac-Toe 🎮"

    const firstPlayerContainer = document.createElement("div");
    firstPlayerContainer.className = "player_container";
    const firstPlayerInput = document.createElement("input");
    firstPlayerInput.type = "text";
    firstPlayerInput.id = "first-player";
    const firstPlayerLabel = document.createElement("label");
    firstPlayerLabel.textContent = "Player X name:";
    firstPlayerLabel.htmlFor = "first-player";

    const secondPlayerContainer = document.createElement("div");
    secondPlayerContainer.className = "player_container";
    const secondPlayerInput = document.createElement("input");
    secondPlayerInput.type = "text";
    secondPlayerInput.id = "second-player";
    const secondPlayerLabel = document.createElement("label");
    secondPlayerLabel.textContent = "Player O name:";
    secondPlayerLabel.htmlFor = "second-player";

    const playBtn = document.createElement("button");
    playBtn.textContent = "Play";

    firstPlayerContainer.appendChild(firstPlayerLabel);
    firstPlayerContainer.appendChild(firstPlayerInput);
    secondPlayerContainer.appendChild(secondPlayerLabel);
    secondPlayerContainer.appendChild(secondPlayerInput);
    modal.appendChild(firstPlayerContainer);
    modal.appendChild(secondPlayerContainer);
    modal.appendChild(playBtn);
    background.appendChild(gameTitle);
    background.appendChild(modal);
    body.appendChild(background);

    playBtn.addEventListener("click", (btn) => {
      btn.preventDefault();
      if (firstPlayerInput.value && secondPlayerInput.value) {
        firstPlayer = firstPlayerInput.value;
        secondPlayer = secondPlayerInput.value;
        body.removeChild(background);
      }
    });
  };

  /**
   * Fill a required cell in the game board, automatically
   * manage the turns of the players
   *
   * @param {number} an index to identify the cell to fill.
   */
  const fillCell = (cell) => {
    if (!gameBoard[cell]) {
      if (isFirstPlayerTurn) {
        gameBoard[cell] = "X";
        isFirstPlayerTurn = !isFirstPlayerTurn;
      } else {
        gameBoard[cell] = "O";
        isFirstPlayerTurn = !isFirstPlayerTurn;
      }
    }
  };

  /**
   * Query if all the cells from the gameboard are filled.
   * @returns a bolean
   */
  const isGameCompleted = () => {
    return gameBoard.includes(null);
  };

  /**
   * Detect when the game is drawn or a player wins according
   * to the game logic.
   * @returns a string containing the game result.
   */
  const getWinner = () => {
    if (isGameCompleted) {
      return "drawn";
    } else {
      let winner;
      if (
        (gameBoard[0] === gameBoard[1] && gameBoard[0] === gameBoard[2]) ||
        (gameBoard[0] === gameBoard[3] && gameBoard[0] === gameBoard[6]) ||
        (gameBoard[0] === gameBoard[4] && gameBoard[0] === gameBoard[8])
      ) {
        winner = gameBoard[0];
      } else if (
        gameBoard[1] === gameBoard[4] &&
        gameBoard[1] === gameBoard[7]
      ) {
        winner = gameBoard[1];
      } else if (
        (gameBoard[2] === gameBoard[5] && gameBoard[2] === gameBoard[8]) ||
        (gameBoard[2] === gameBoard[4] && gameBoard[2] === gameBoard[6])
      ) {
        winner = gameBoard[2];
      } else if (
        gameBoard[3] === gameBoard[4] &&
        gameBoard[3] === gameBoard[5]
      ) {
        winner = gameBoard[3];
      } else if (
        gameBoard[6] === gameBoard[7] &&
        gameBoard[6] === gameBoard[8]
      ) {
        winner = gameBoard[6];
      }

      if (winner === "X") {
        winner = firstPlayer;
      } else if (winner === "O") {
        winner = secondPlayer;
      }

      return winner || "";
    }
  };
  return { getWinner, fillCell, getPlayersName };
}

const gameBoard = createGameBoard();
gameBoard.getPlayersName();
