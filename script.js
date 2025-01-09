let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;
let players = [];
let gameCount = 0;

function createBoard() {
  const board = document.getElementById('game-board');
  board.innerHTML = '';
  gameBoard.forEach((cell, index) => {
    const div = document.createElement('div');
    div.classList.add('cell');
    div.textContent = cell;
    div.addEventListener('click', () => makeMove(index));
    board.appendChild(div);
  });
}

function makeMove(index) {
  if (gameBoard[index] || !gameActive) return;
  gameBoard[index] = currentPlayer;
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  updateGame();
}

function updateGame() {
  createBoard();
  const winner = checkWinner();
  if (winner) {
    document.getElementById('message').textContent = Игрок ${winner} победил!;
    gameActive = false;
    gameCount++;
    updatePlayerList();
  } else if (gameBoard.every(cell => cell)) {
    document.getElementById('message').textContent = 'Ничья!';
    gameActive = false;
  }
}

function checkWinner() {
  const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
