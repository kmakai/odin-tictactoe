const myGameBoard = (function () {
    const board = ['', '', '', '', '', '', '', '', ''];
    return { board }
})();
const b = myGameBoard.board;

const playerFactory = (name, mark) => {
    return { name, mark };
}





const displayController = (function () {
    const tile = document.querySelectorAll(".tile")
    function setboard() {
        for (let index = 0; index < b.length; index++) {
            tile[index].textContent = b[index];
        };
    };
    return { setboard }
})();




function game() {

    const playerOne = playerFactory("Kenji", "X");
    const playerTwo = playerFactory("Schmo", "O");
    function isGameOver() {
        const board = myGameBoard.board;
        if ((board[0] === 'X' && board[4] === 'X' && board[8] === 'X') ||
            (board[2] === 'X' && board[4] === 'X' && board[6] === 'X') ||
            (board[0] === 'X' && board[1] === 'X' && board[2] === 'X') ||
            (board[3] === 'X' && board[4] === 'X' && board[5] === 'X') ||
            (board[6] === 'X' && board[7] === 'X' && board[8] === 'X') ||
            (board[0] === 'X' && board[3] === 'X' && board[6] === 'X') ||
            (board[1] === 'X' && board[4] === 'X' && board[7] === 'X') ||
            (board[2] === 'X' && board[5] === 'X' && board[8] === 'X')) {
            console.log(` ${playerOne.name} Wins`)
            player = '';
        } else if ((board[0] === 'O' && board[4] === 'O' && board[8] === 'O') ||
            (board[2] === 'O' && board[4] === 'O' && board[6] === 'O') ||
            (board[0] === 'O' && board[1] === 'O' && board[2] === 'O') ||
            (board[3] === 'O' && board[4] === 'O' && board[5] === 'O') ||
            (board[6] === 'O' && board[7] === 'O' && board[8] === 'O') ||
            (board[0] === 'O' && board[3] === 'O' && board[6] === 'O') ||
            (board[1] === 'O' && board[4] === 'O' && board[7] === 'O') ||
            (board[2] === 'O' && board[5] === 'O' && board[8] === 'O')) {
            console.log(` ${playerTwo.name} Wins`)
            player = '';
        }
        
    }
    player = playerOne;
    const tile = document.querySelectorAll(".tile");
    tile.forEach(element => {
        element.addEventListener('click', () => {
            if (player === playerOne && b[element.id] === '') {
                b[element.id] = playerOne.mark;
                player = playerTwo;
            } else if (player === playerTwo && b[element.id] === '') {
                b[element.id] = playerTwo.mark;
                player = playerOne;
            } else {
                return
            };
            displayController.setboard();
            isGameOver();
        })
    });
}

game();