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
        if (board[0], board[4], board[8] ||
            board[2], board[4], board[6] ||
            board[0], board[1], board[2] ||
            board[3], board[4], board[5] ||
            board[6], board[7], board[8] ||
            board[0], board[3], board[6] ||
            board[1], board[4], board[7] ||
            board[2], board[5], board[8] === 'X') {
            console.log(` ${playerOne.name} Wins`)
        } else if(board[0], board[4], board[8] ||
            board[2], board[4], board[6] ||
            board[0], board[1], board[2] ||
            board[3], board[4], board[5] ||
            board[6], board[7], board[8] ||
            board[0], board[3], board[6] ||
            board[1], board[4], board[7] ||
            board[2], board[5], board[8] === 'O'){
            console.log(` ${playerTwo.name} Wins`)
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