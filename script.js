const board = document.getElementById('game-board');
const resetButton = document.getElementById('reset-btn');
let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];

function createBoard() {
    board.innerHTML = '';
    gameBoard.forEach((cell, index) => {
        const cellElement = document.createElement('div');
        cellElement.textContent = cell;
        cellElement.addEventListener('click', () => handleClick(index));
        board.appendChild(cellElement);
    });
}

function handleClick(index) {
    if (gameBoard[index] === '') {
        gameBoard[index] = currentPlayer;
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        createBoard();
        checkWinner();
    }
}

function checkWinner() {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let combo of winningCombinations) {
        const [a, b, c] = combo;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            alert(`${gameBoard[a]} wins!`);
            resetGame();
            return;
        }
    }

    if (!gameBoard.includes('')) {
        alert('It\'s a draw!');
        resetGame();
    }
}

function resetGame() {
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    createBoard();
}

resetButton.addEventListener('click', resetGame);

createBoard();
