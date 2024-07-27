/**
 * Create a player object.
 *
 * @param {string} name the name of the player.
 * @param {string} symbol should be "X" or "O".
 * @returns a player object with essential info.
 */
function createPlayer(name, symbol) {
  const getName = () => name || "";
  const getSymbol = () => (symbol.match(/(X|O)/i) ? symbol.toUpperCase() : "");

  return { getName, getSymbol };
}
