/**
 * Instantiate a game board with 3x3 cell and provide
 * essential API to manage the game.
 *
 * @param {string} firstPlayer name of the first player.
 * @param {string} secondPlayer name of the second player.
 * @returns a gameBoard object with associated functions
 */
function createGameBoard(firstPlayer, secondPlayer) {
  let isFirstPlayerTurn = true;
  const gameBoard = [];
  gameBoard.length = 9;
  gameBoard.fill(null);

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

  const isGameCompleted = () => {
    return gameBoard.includes(null);
  };

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

  return { getWinner, fillCell };
}
