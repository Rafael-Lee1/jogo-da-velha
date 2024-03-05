let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];
let currentPlayer = 'X';
let gameOver = false;

function makeMove(row, col) {
    if (!gameOver && board[row][col] === '') {
        board[row][col] = currentPlayer;
        document.getElementsByClassName('cell')[row * 3 + col].textContent = currentPlayer;
        checkWinner();
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

function checkWinner() {
    const winningConditions = [
        // Linhas
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        // Colunas
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        // Diagonais
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let condition of winningConditions) {
        const [a, b, c] = condition;
        if (board[a/3][a%3] && board[a/3][a%3] === board[b/3][b%3] && board[a/3][a%3] === board[c/3][c%3]) {
            document.getElementById('status').textContent = `Vitória do jogador ${currentPlayer}!`;
            gameOver = true;
            break;
        }
    }

    if (!gameOver && board.every(row => row.every(cell => cell !== ''))) {
        document.getElementById('status').textContent = 'Empate!';
        gameOver = true;
    }
}
