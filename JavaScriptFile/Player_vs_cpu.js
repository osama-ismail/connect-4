let easy,
    normal,
    hard,
    level = 'normal';

let table = document.getElementById("table"),
    div10 = document.getElementById("div10"),
    player_number = document.getElementById("player_number"),
    win1 = document.getElementById("div-win1"),
    win = document.getElementById("div-win");


let first_board,
    humanMove;
let color;

startMain();


// ************************************************ //

// ************************************************ //


function go_to_game()
{
    easy = document.getElementById("Easy").checked;
    normal = document.getElementById("Normal").checked;
    hard = document.getElementById("Hard").checked;

    if(easy)
        level = 'easy';
    else if(normal)
        level = 'normal';
    else if(hard)
        level = 'hard';

    window.location = "PvsR.html";
}
function back_game()
{
    window.open("start.html", "_self");
}
function back_game2()
{
    window.open("easyHard.html", "_self");
    // window.location = "easyHard.html";
}
function startMain(){
    first_board = this.createBoard();
    humanMove = -1;
    this.displayBoard(first_board);

    if (level == "easy"){
        this.start_game(first_board,3,false);
    }
    else if(level == "normal"){
        this.start_game(first_board,5,false);
    }
    else if(level == "hard"){
        this.start_game(first_board,7,false);
    }
}

// ***************************************************************************** //
function createBoard (){
    let board = [["", "", "", "", "", "", ""],
                 ["", "", "", "", "", "", ""],
                 ["", "", "", "", "", "", ""],
                 ["", "", "", "", "", "", ""],
                 ["", "", "", "", "", "", ""],
                 ["", "", "", "", "", "", ""]];
    return board;
}

function displayBoard (board){
    for(let i = 0; i < 6; i++){
        for (let j = 0; j < 7; j++){
            if(board[i][j] == "r"){
                table.rows[i].cells[j].style.backgroundColor = "red";
                table.rows[i].cells[j].setAttribute("value", "1");
                table.rows[i].cells[j].setAttribute("col", "r");
            }
            else if (board[i][j] == "y"){
                // alert(table.rows[i].cells[j].getAttribute("col"));
                table.rows[i].cells[j].style.backgroundColor = "yellow";
                table.rows[i].cells[j].setAttribute("value", "1");
                table.rows[i].cells[j].setAttribute("col", "y");
            }
            else if (board[i][j] == "") {
                table.rows[i].cells[j].style.backgroundColor = "white";
                table.rows[i].cells[j].setAttribute("value", "0");
                table.rows[i].cells[j].setAttribute("col", "a");
            }
        }
    }
    color = "yellow";
    div10.style.backgroundColor = color;

    player_number.innerText="PC";
}

// function clickGame(){
//     for (let i = 0; i < table.rows.length; i++) {
//         for (let j = 0; j < table.rows[i].cells.length; j++) {
//             table.rows[i].cells[j].onclick = function () {
//                 return j;
//             }
//             }
//         }
// }

function isLegalMove(board , row ,column){
    if(board[row][column] == '')
        return true;
    else
        return false;
}

function getEmptyRow (board, col){
    let result = 0;
    for(let i = 5; i >= 0; i--){
        if(board[i][col] == ''){
            result = i;
            break;
        }
    }
    return result;
}

function valid_locations (board){
    let col = [];
    // for(let i = 0; i < 7; i++) {
    //     if (this.isLegalMove(board, this.getEmptyRow(board, i), i))
    //         col.push(i);
    // }
    for(let i = 0; i < 7; i++){
        if(board[0][i] == ""){
            col.push(i);
        }
    }
    col.sort();
    return col;
}

function placeMove (board , column , player){;
        for(let i = 5; i >= 0; i--){
            if(board[i][column] == ""){
                board[i][column] = player;
                if(player == 'y'){
                    color = "red";
                    div10.style.backgroundColor = color;
        
                    player_number.innerText="Player";
                }
                else if(player == 'r'){
                    color = "yellow";
                    div10.style.backgroundColor = color;
        
                    player_number.innerText="PC";
                }
                return board;
            }
        }
    return board;
}

function isDraw (board){
    let draw = true;
    for(let i = 0; i < 7; i++){
        if(board[0][i] == ''){
            draw = false;
            break;
        }
    }
    return draw;
}

function letOpponentMove (board){
    // let col = 100;

    // for (let i = 0; i < 6; i++) {
    //     for (let j = 0; j < 7; j++) {
    //         document.getElementById('table').rows[i].cells[j].onclick = function () {
    //             col = j;
    //         }
    //     }
    // }
    let text = prompt("Please enter number of column you want", "from 1 to 7");
    text = parseInt(text);
    text = text - 1;

    if(text >= 0 && text <= 6){
        if(this.isLegalMove(board,this.getEmptyRow(board , text),text)){
            this.placeMove(board , text , "r")
    }
    else {
            this.letOpponentMove();
        }
    }
}

function CheckWinning (board){
    // checks horizontaly
    for(let i = 0; i < 6; i++){
        for(let j = 0; j < 4; j++){
            if(board[i][j] != '' && board[i][j] == board[i][j + 1] && board[i][j] == board[i][j + 2] && board[i][j] == board[i][j + 3]){
                // table.rows[i].cells[j].style.backgroundColor = "#10c2ef";
                // table.rows[i].cells[j + 1].style.backgroundColor = "#10c2ef";
                // table.rows[i].cells[j + 2].style.backgroundColor = "#10c2ef";
                // table.rows[i].cells[j + 3].style.backgroundColor = "#10c2ef";
                return board[i][j];
            }
        }
    }

    // checks vertically
    for(let j = 0; j < 7; j++){
        for(let i = 0; i < 3; i++){
            if(board[i][j] != '' && board[i][j] == board[i + 1][j] && board[i][j] == board[i + 2][j] && board[i][j] == board[i + 3][j]){
                // table.rows[i].cells[j].style.backgroundColor = "#10c2ef";
                // table.rows[i + 1].cells[j + 1].style.backgroundColor = "#10c2ef";
                // table.rows[i + 2].cells[j + 2].style.backgroundColor = "#10c2ef";
                // table.rows[i + 3].cells[j + 3].style.backgroundColor = "#10c2ef";
                return board[i][j];
            }
        }
    }

    // checks diagonal
    for(let i = 5; i > 2; i--) {
        for (let j = 0; j < 4; j++) {
            if(board[i][j] != '' && board[i][j] == board[i - 1][j + 1] && board[i][j] == board[i - 2][j + 2] && board[i][j] == board[i - 3][j + 3]){
                // table.rows[i].cells[j].style.backgroundColor = "#10c2ef";
                // table.rows[i - 1].cells[j + 1].style.backgroundColor = "#10c2ef";
                // table.rows[i - 2].cells[j + 2].style.backgroundColor = "#10c2ef";
                // table.rows[i - 3].cells[j + 3].style.backgroundColor = "#10c2ef";
                return board[i][j];
            }
        }
    }

    // checks inverse diagonal
    for(let i = 0; i < 3; i++) {
        for (let j = 0; j < 4; j++) {
            if(board[i][j] != '' && board[i][j] == board[i + 1][j + 1] && board[i][j] == board[i + 2][j + 2] && board[i][j] == board[i + 3][j + 3]){
                // table.rows[i].cells[j].style.backgroundColor = "#10c2ef";
                // table.rows[i + 1].cells[j + 1].style.backgroundColor = "#10c2ef";
                // table.rows[i + 2].cells[j + 2].style.backgroundColor = "#10c2ef";
                // table.rows[i + 3].cells[j + 3].style.backgroundColor = "#10c2ef";
                return board[i][j];
            }
        }
    }

    return 0;
}

function calculateScore (aiScore , moreMoves){
    let moveScore = 4 - moreMoves;
    if(aiScore == 0)
        return 0;
    else if(aiScore == 1)
        return 1 * moveScore;
    else if(aiScore == 2)
        return 10 * moveScore;
    else if(aiScore == 3)
        return 10 * moveScore;
    else
        return 1000;
}

function evaluateBoard (board){
    let aiScore = 1;
    let score = 0;

    let blanks = 0;
    let k = 0;
    let moreMoves = 0;

    for (let i = 5; i >= 0; i--){
        for (let j = 0; j < 7; j++){
            if (board[i][j] == "" || board[i][j] == 'r'){
                continue;
            }
            if (j <= 3){
                for(let k = 1; k < 4; k++){
                    if(board[i][j+k] == "y")
                        aiScore += 1;
                    else if(board[i][j+k] == "r"){
                        aiScore = 0;
                        blanks = 0;
                        break;
                    }
                    else
                        blanks += 1;
                }
                moreMoves = 0;
                if (blanks > 0){
                    for (let c = 1; c < 4; c++){
                        let column = j + c;
                        for (let m = i; m < 6; m++){
                            if (board[m][column] == "")
                                moreMoves += 1;
                            else
                                break;
                        }
                    }
                }
                if (moreMoves != 0)
                    score += this.calculateScore (aiScore,moreMoves);
                aiScore = 1;
                blanks = 0;
            }
            if (i >= 3){
                for(let k = 1; k < 4; k++){
                    if (board[i-k][j] == "y")
                        aiScore += 1;
                    else if (board[i-k][j] == "r"){
                        aiScore = 0;
                        break;
                    }
                }
                moreMoves = 0;
                if (aiScore > 0){
                    let column = j;
                    for (let m = i-k+1; m < i; m++){
                        if (board[m][column] == '')
                            moreMoves += 1;
                        else
                            break;
                    }
                }
                if (moreMoves != 0)
                    score += this.calculateScore (aiScore,moreMoves);
                aiScore = 1;
                blanks = 0;
            }
            if (j >= 3){
                for(let k = 1; k < 4; k++){
                    if (board[i][j-k] == "y")
                        aiScore += 1;
                    else if (board[i][j-k] == "r"){
                        aiScore = 0;
                        blanks = 0;
                        break;
                    }
                    else
                        blanks += 1;
                }
                moreMoves = 0;
                if (blanks > 0){
                    for (let c = 1; c < 4; c++){
                        let column = j-c;
                        for (let m = i; m < 6; m++){
                            if (board[m][column] == "")
                                moreMoves += 1;
                            else
                                break;
                        }
                    }
                }
                if (moreMoves != 0)
                    score += this.calculateScore (aiScore,moreMoves);
                aiScore = 1;
                blanks = 0;
            }
            if (j <= 3 && i >= 3){
                for (let k = 1; k < 4; k++){
                    if (board[i-k][j+k] == "y")
                        aiScore += 1;
                    else if (board[i-k][j+k] == "r"){
                        aiScore = 0;
                        blanks = 0;
                        break;
                    }
                    else
                        blanks += 1;
                }
                moreMoves = 0;
                if (blanks > 0){
                    for (let c = 1; c < 4; c++){
                        let column = j+c;
                        let row = i-c;
                        for (let m = row; m < 6; m++){
                            if (board[m][column] == "")
                                moreMoves += 1;
                            else if (board[m][column] == "y"){
                                //pass;
                                console.log("pass");
                            }
                            else
                                break;
                        }
                    }
                    if (moreMoves != 0)
                        score += this.calculateScore(aiScore,moreMoves);
                    aiScore = 1;
                    blanks = 0;
                }
            }
            if (j >= 3 && i >= 3){
                for (let k = 1; k < 4; k++){
                    if (board[i-k][j-k] == "y")
                        aiScore += 1;
                    else if (board[i-k][j-k] == "r"){
                        aiScore = 0;
                        blanks = 0;
                        break;
                    }
                    else
                        blanks += 1;
                }
                moreMoves = 0;
                if (blanks > 0){
                    for (let c = 1; c < 4; c++){
                        let column = j-c;
                        let row = i-c;
                        for (let m = row; m < 6; m++){
                            if (board[m][column] == "")
                                moreMoves += 1;
                            else if (board[m][column] == "y"){
                                //pass;
                                console.log("pass");
                            }
                            else
                                break;
                        }
                    }
                    if (moreMoves != 0)
                        score += this.calculateScore (aiScore,moreMoves);
                    aiScore = 1;
                    blanks = 0;
                }
            }
        }
    }
    return score;
}
function getAIMove(board,level){          ///              here i will change the depth
    let col = alphaBeta(board, 0, true, level),
        score = this.alphaBeta(board, 0, true,level);

    return col;

}

function alphaBeta(board , depth , me ,limit , alpha = -999999 , beta = 999999 ){
    let locations = this.valid_locations(board);
    let game_end;

    if(this.CheckWinning(board) != 0 || locations.length == 0)
        game_end = true;
    else
        game_end = false;

    if (game_end){
        if (this.CheckWinning(board) == "y")
            return [null, 999999];
        else if (this.CheckWinning(board) == "r")
            return [null, -999999];
        else
            return [null, 0];
    }
    else if (depth == limit){
        return [null, this.evaluateBoard(board)];
    }
    else if (me){
        let v = -999999; // initial_score
        let column = locations[Math.floor(Math.random()*locations.length)];

        for(let i = 0; i < locations.length; i++){
            let col = column;

            let board_copy = board;//board;
            board_copy = this.placeMove(board_copy , col , "y");
            column = alphaBeta(board_copy, depth+1, false ,  alpha , beta );
            let new_score = this.alphaBeta(board_copy, depth+1, false , limit ,alpha , beta );

            if (new_score[1] >= v) {
                v = new_score[1];
                column = col;
                if(alpha >= v)
                    alpha = alpha;
                else
                    alpha = v;
                if (alpha >= beta)
                    break;
            }
        }
        return column;
    }
    else{
        let v = 999999;
        let column = locations[Math.floor(Math.random()*locations.length)];

        for(let i = 0; i < locations.length; i++) {
            let col = column;
            let board_copy = board;//board;
            board_copy = this.placeMove(board_copy , col , "r");
            let new_score = this.alphaBeta(board_copy, depth+1, true,limit,  alpha, beta);
            if (new_score[1] <= v){
                v = new_score[1];
                column = col;

                if (beta <= v)
                    beta = beta;
                else
                    beta = v;

                if (alpha >= beta)
                    break;
            }
        }
        return column;
    }
}
function start_game (board,level,player){
    this.displayBoard(board);
    let gameResult = this.CheckWinning(board);
    if (player){
        this.letOpponentMove(board);
        this.displayBoard(board);
    }
    this.placeMove(board,3,"y");
    this.displayBoard(board);
    while(true){
        if (this.isDraw(board) == true){
            win1.innerHTML = "Draw";
            break;
        }
        else {
            this.letOpponentMove(board);
            this.displayBoard(board);
            gameResult = this.CheckWinning(board);
        }

        if (gameResult == "y"){
            win.innerHTML = "wins !";
            win1.innerHTML = "PC yellow";
            break;
        }
        else if(gameResult == "r"){
            win.innerHTML = "wins !";
            win1.innerHTML = "Player red";
            break;
        }
        else{
            let move = this.getAIMove(board,level);
            this.placeMove(board,move,"y");
            this.displayBoard(board);
            gameResult = this.CheckWinning(board1);
        }
        

        if (gameResult == "y"){
            win.innerHTML = "wins !";
            win1.innerHTML = "PC yellow";
            break;
        }
        else if(gameResult == "r"){
            win.innerHTML = "wins !";
            win1.innerHTML = "Player red";
            break;
        }
    }
}

