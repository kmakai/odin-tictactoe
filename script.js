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
    player = playerOne;
    const tile = document.querySelectorAll(".tile");
    tile.forEach(element => {
        element.addEventListener('click', () => {
            if (player === playerOne && b[element.id] === '') {
                b[element.id] = playerOne.mark;
                player = playerTwo;
            } else if(player === playerTwo && b[element.id] === ''){
                b[element.id] = playerTwo.mark;
                player = playerOne;
            }else{
                return
            };
            displayController.setboard();
        })
    });
}

game();