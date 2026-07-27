// Player
// -------
// name
// symbol
// score

// GameBoard
// ----------
// board
// placeMarker()
// clearBoard()

// Game Controller
// ---------------
// currentPlayer
// switchTurn()
// checkWinner()
// restart()



function start(name, name2){
    // object where i can keep everything from start.
   let gameBoard = {
        arr: [
            [null, null, null],
            [null, null, null],
            [null, 7, null]
        ],
        player1: {name: name, score: 2, symbol: "X"},
        player2: {name: name2, score: 4, symbol: "O" },
        totalScore: 0
   };

   console.log("ye arr k 7 position pa ha", gameBoard.arr[2][1]);

  let currentPlayer = gameBoard.player1;

//  console.log(4%3);
//  console.log(8%3);
//  console.log(7/2);
//  console.log(7%2);
  console.log(7%3); // 1
  console.log(8%3); // 2


  // Each player score print  (Perfect)
  function getEachPlayerScore(){
       let scoreFirstPlayer = gameBoard.player1.score;
       let scoreSecondPlayer = gameBoard.player2.score;
   return {scoreFirstPlayer, scoreSecondPlayer}
 };
console.log(getEachPlayerScore());


 // score count function 
 


// access turns 



// increment score



// loook player  player which can take lead
function playerToStart(){
    
     let symbol = "";
    if(currentPlayer === gameBoard.player1){
       symbol += gameBoard.player1.symbol;
       console.log(symbol);

    } else {
        symbol += gameBoard.player2.symbol;
        console.log(symbol);

    }
return symbol;
    
};
// console.log(playerToStart());

// find position of row and col
function positionOfRowNCol(e){
    console.log("function is running")
 let id = e.target.id //Number(e.target.id);
    
  let row = Math.floor(id / 3);
  let col = (id % 3);
   console.log("yaha row aagaya ", row);
   console.log("yaha col aagaya ", col);
   return {row, col};

}

// click square 
function handleClick(e){
    console.log("handle click start");
    console.log("button id where click which button click");
   
   let {row, col} = positionOfRowNCol(e);
  let symbol = playerToStart();
   let moveSuccessful = placeMarker(0, 0, "X");
   if(moveSuccessful){
    switchPlayer();
   }
};
handleClick({
    target: {
       id: "2",
    }
});
 console.log(gameBoard.arr);
function placeMarker(row, col, symbol){
   
       console.log("tum q nahi a rahe", symbol);
       console.log("placemaker k ander Row: ", row);
       console.log("placemekr func k ander ", col);
    if(gameBoard.arr[row][col] === null){
       gameBoard.arr[row][col] = symbol;
       console.log("board k ander symbal konsa a gaya", gameBoard.arr[row][col]);
       return true;
    } else {
        return false;
    }
};

// Switch Player
function switchPlayer(){
    if(currentPlayer === gameBoard.player1){
    currentPlayer = gameBoard.player2;
    } else {
        currentPlayer = gameBoard.player1;
    }
};

// reset game 


 return {handleClick, getEachPlayerScore}

}

let init = start("umair", "hamza");
// init.getTotalScore();




