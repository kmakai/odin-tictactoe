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
    const pTurn = document.querySelector('#turn');
    function isGameOver() {
        const board = myGameBoard.board;
        const winDisplay = document.querySelector('#winner');
        if ((board[0] === 'X' && board[4] === 'X' && board[8] === 'X') ||
            (board[2] === 'X' && board[4] === 'X' && board[6] === 'X') ||
            (board[0] === 'X' && board[1] === 'X' && board[2] === 'X') ||
            (board[3] === 'X' && board[4] === 'X' && board[5] === 'X') ||
            (board[6] === 'X' && board[7] === 'X' && board[8] === 'X') ||
            (board[0] === 'X' && board[3] === 'X' && board[6] === 'X') ||
            (board[1] === 'X' && board[4] === 'X' && board[7] === 'X') ||
            (board[2] === 'X' && board[5] === 'X' && board[8] === 'X')) {
            console.log(` ${playerOne.name} Wins`);
            winDisplay.style.border = "3px solid blue";
            winDisplay.textContent = `The winner is ${playerOne.name}! CONGRATULATIONS!`;
            pTurn.textContent = "GAME OVER!";
            player = '';
        } else if ((board[0] === 'O' && board[4] === 'O' && board[8] === 'O') ||
            (board[2] === 'O' && board[4] === 'O' && board[6] === 'O') ||
            (board[0] === 'O' && board[1] === 'O' && board[2] === 'O') ||
            (board[3] === 'O' && board[4] === 'O' && board[5] === 'O') ||
            (board[6] === 'O' && board[7] === 'O' && board[8] === 'O') ||
            (board[0] === 'O' && board[3] === 'O' && board[6] === 'O') ||
            (board[1] === 'O' && board[4] === 'O' && board[7] === 'O') ||
            (board[2] === 'O' && board[5] === 'O' && board[8] === 'O')) {
            console.log(` ${playerTwo.name} Wins`);
            winDisplay.style.border = "3px solid blue";
            winDisplay.textContent = `The winner is ${playerTwo.name}! CONGRATULATIONS!`;
            pTurn.textContent = "GAME OVER!";
            player = '';
        }

    }
    player = playerOne;
    pTurn.textContent = `It is ${player.name}'s turn!`;
    const tile = document.querySelectorAll(".tile");
    tile.forEach(element => {
        element.addEventListener('click', () => {
            if (player === playerOne && b[element.id] === '') {
                b[element.id] = playerOne.mark;
                player = playerTwo;
               pTurn.textContent = `It is ${playerTwo.name}'s turn!`; 
            } else if (player === playerTwo && b[element.id] === '') {
                b[element.id] = playerTwo.mark;
                player = playerOne;
                pTurn.textContent = `It is ${playerOne.name}'s turn!`;
            } else {
                return
            };
            displayController.setboard();
            isGameOver();
        })
    });
}

game();