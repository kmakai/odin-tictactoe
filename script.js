const myGameBoard = (function () {
    const board = ['', '', '', '', '', '', '', '', ''];
    return { board }
})();
let b = myGameBoard.board;

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

    const playerOne = playerFactory(document.querySelector("#playerX").value , "X");
    const playerTwo = playerFactory(document.querySelector("#playerO").value, "O");
    const pTurn = document.querySelector('#turn');
    function isGameOver() {
        //const board = myGameBoard.board;
        const winDisplay = document.querySelector('#winner');
        winDisplay.textContent = "";
        if ((b[0] === 'X' && b[4] === 'X' && b[8] === 'X') ||
            (b[2] === 'X' && b[4] === 'X' && b[6] === 'X') ||
            (b[0] === 'X' && b[1] === 'X' && b[2] === 'X') ||
            (b[3] === 'X' && b[4] === 'X' && b[5] === 'X') ||
            (b[6] === 'X' && b[7] === 'X' && b[8] === 'X') ||
            (b[0] === 'X' && b[3] === 'X' && b[6] === 'X') ||
            (b[1] === 'X' && b[4] === 'X' && b[7] === 'X') ||
            (b[2] === 'X' && b[5] === 'X' && b[8] === 'X')) {
            winDisplay.textContent = `The winner is ${playerOne.name}! CONGRATULATIONS!`;
            pTurn.textContent = "GAME OVER!";
            player = '';
        } else if ((b[0] === 'O' && b[4] === 'O' && b[8] === 'O') ||
            (b[2] === 'O' && b[4] === 'O' && b[6] === 'O') ||
            (b[0] === 'O' && b[1] === 'O' && b[2] === 'O') ||
            (b[3] === 'O' && b[4] === 'O' && b[5] === 'O') ||
            (b[6] === 'O' && b[7] === 'O' && b[8] === 'O') ||
            (b[0] === 'O' && b[3] === 'O' && b[6] === 'O') ||
            (b[1] === 'O' && b[4] === 'O' && b[7] === 'O') ||
            (b[2] === 'O' && b[5] === 'O' && b[8] === 'O')) {
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


function clearBoard(){
    b = ['','','','','','','','','']
    displayController.setboard();
    document.querySelector("#winner").textContent = "";
}

const startReset = document.querySelector("#start-reset");

startReset.addEventListener("click",()=>{
    game();
    startReset.textContent = "reset";
    startReset.addEventListener("click",(e)=>{
        clearBoard();
        game();
        e.stopPropagation();
    })
})