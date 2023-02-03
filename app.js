const column1 = ["box8", "box15", "box22", "box29", "box36", "box43"]
const column2 = ["box9", "box16", "box23", "box30", "box37", "box44"]
const column3 = ["box10", "box17", "box24", "box31", "box38", "box45"]
const column4 = ["box11", "box18", "box25", "box32", "box39", "box46"]
const column5 = ["box12", "box19", "box26", "box33", "box40", "box47"]
const column6 = ["box13", "box20", "box27", "box34", "box41", "box48"]
const column7 = ["box14", "box21", "box28", "box35", "box42", "box49"]
const columns = [column1, column2, column3, column4, column5, column6, column7]
console.log(columns)

const row1 = ["box8", "box9", "box10", "box11", "box12", "box13", "box14"];
const row2 = ["box15", "box16", "box17", "box18", "box19", "box20", "box21"];
const row3 = ["box22", "box23", "box24", "box25", "box26", "box27", "box28"];
const row4 = ["box29", "box30", "box31", "box32", "box33", "box34", "box35"];
const row5 = ["box36", "box37", "box38", "box39", "box40", "box41", "box42"];
const row6 = ["box43", "box44", "box45", "box46", "box47", "box48", "box49"];
const rows = [row1,row2,row3,row4,row5,row6]
console.log(rows)

const diag1 = ["box49", "box41", "box33", "box25"];
const diag2 = ["box41", "box33", "box25", "box17"];
const diag3 = ["box33", "box25", "box17", "box9"];
const diag4 = ["box48", "box40", "box32", "box24"];
const diag5 = ["box40", "box32", "box24", "box16"];
const diag6 = ["box32", "box24", "box16", "box8"];
const diag7 = ["box47", "box39", "box31", "box23"];
const diag8 = ["box39", "box31", "box23","box15"];
const diag9 = ["box46", "box38", "box30","box22"];
const diag10 = ["box46", "box40", "box34","box28"];
const diag11 = ["box45", "box39", "box33","box27"];
const diag12 = ["box39", "box33", "box27","box21"];
const diag13 = ["box44", "box38", "box32","box26"];
const diag14 = ["box38", "box32", "box26","box20"];
const diag15 = ["box32", "box26","box20",'box14'];
const diag16 = ["box43", "box37","box31",'box25'];
const diag17 = ["box37", "box31","box25",'box19'];
const diag18 = ["box31","box25",'box19','box13'];
const diag19 = ["box36","box30",'box24','box18'];
const diag20 = ["box30",'box24','box18','box12'];
const diag21 = ["box42",'box34','box26','box18'];
const diag22 = ['box34','box26','box18','box10'];
const diag23 = ['box29','box23','box17','box11'];
const diag24 = ['box35','box27','box19','box11'];
const diagonals = [diag1, diag2,diag3,diag4,diag5,diag6,diag7,diag8,diag9,diag10,diag11,diag12,diag13,diag14,diag15,diag16,diag17,diag18,diag19,diag20,diag21,diag22,diag23,diag24]

let player1 = {
    name: "",
    color: "",
    score: 0
}
let player2 = {
    name: "",
    color: "",
    score: 0
}

let currentPlayer = player1;
document.getElementById('currentPlayer').innerHTML = currentPlayer.name

// player1.color = document.getElementById('color1').innerHTML
// player1.name = document.getElementById('color1')
// I'm not sure why I had this code here.. I think it was to test some things. 

// document.getElementById("box8").style.backgroundColor = "red"

// document.getElementById(column1[1]).style.backgroundColor = "red" either of these methods work to change the color

// function checkForWinVertical(){

//         if(
//             document.getElementById(column1[5]).style.backgroundColor == currentPlayer.color &&
//             document.getElementById(column1[4]).style.backgroundColor == currentPlayer.color &&
//             document.getElementById(column1[3]).style.backgroundColor == currentPlayer.color &&
//             document.getElementById(column1[2]).style.backgroundColor == currentPlayer.color 
//         ){
//             currentPlayer.score++
//             alert(currentPlayer.name + " has won!")
//         } else if (
//             document.getElementById(column1[4]).style.backgroundColor == currentPlayer.color &&
//             document.getElementById(column1[3]).style.backgroundColor == currentPlayer.color &&
//             document.getElementById(column1[2]).style.backgroundColor == currentPlayer.color &&
//             document.getElementById(column1[1]).style.backgroundColor == currentPlayer.color
//         ){
//             currentPlayer.score++
//             alert(currentPlayer.name + " has won!")
//         } else if (
//             document.getElementById(column1[3]).style.backgroundColor == currentPlayer.color &&
//             document.getElementById(column1[2]).style.backgroundColor == currentPlayer.color &&
//             document.getElementById(column1[1]).style.backgroundColor == currentPlayer.color &&
//             document.getElementById(column1[0]).style.backgroundColor == currentPlayer.color
//         ){
//             currentPlayer.score++
//             alert(currentPlayer.name + " has won!")
//         }  else if (
//             document.getElementById(column2[5]).style.backgroundColor == currentPlayer.color &&
//             document.getElementById(column2[4]).style.backgroundColor == currentPlayer.color &&
//             document.getElementById(column2[3]).style.backgroundColor == currentPlayer.color &&
//             document.getElementById(column2[2]).style.backgroundColor == currentPlayer.color
//         ){
//             currentPlayer.score++
//             alert(currentPlayer.name + " has won!")
//         }   else if (
//             document.getElementById(column2[4]).style.backgroundColor == currentPlayer.color &&
//             document.getElementById(column2[3]).style.backgroundColor == currentPlayer.color &&
//             document.getElementById(column2[2]).style.backgroundColor == currentPlayer.color &&
//             document.getElementById(column2[1]).style.backgroundColor == currentPlayer.color
//         ){
//             currentPlayer.score++
//             alert(currentPlayer.name + " has won!")
//         }   else if (
//             document.getElementById(column2[3]).style.backgroundColor == currentPlayer.color &&
//             document.getElementById(column2[2]).style.backgroundColor == currentPlayer.color &&
//             document.getElementById(column2[1]).style.backgroundColor == currentPlayer.color &&
//             document.getElementById(column2[0]).style.backgroundColor == currentPlayer.color
//         ){
//             currentPlayer.score++
//             alert(currentPlayer.name + " has won!")
//         }   
//         else if (
//             document.getElementById(column3[5]).style.backgroundColor == currentPlayer.color &&
//             document.getElementById(column3[4]).style.backgroundColor == currentPlayer.color &&
//             document.getElementById(column3[3]).style.backgroundColor == currentPlayer.color &&
//             document.getElementById(column3[2]).style.backgroundColor == currentPlayer.color
//         ){
//             currentPlayer.score++
//             alert(currentPlayer.name + " has won!")
//         }   else if (
//             document.getElementById(column3[4]).style.backgroundColor == currentPlayer.color &&
//             document.getElementById(column3[3]).style.backgroundColor == currentPlayer.color &&
//             document.getElementById(column3[2]).style.backgroundColor == currentPlayer.color &&
//             document.getElementById(column3[1]).style.backgroundColor == currentPlayer.color
//         ){
//             currentPlayer.score++
//             alert(currentPlayer.name + " has won!")
//         }   else if (
//             document.getElementById(column3[3]).style.backgroundColor == currentPlayer.color &&
//             document.getElementById(column3[2]).style.backgroundColor == currentPlayer.color &&
//             document.getElementById(column3[1]).style.backgroundColor == currentPlayer.color &&
//             document.getElementById(column3[0]).style.backgroundColor == currentPlayer.color
//         ){
//             currentPlayer.score++
//             alert(currentPlayer.name + " has won!")
//         }    
//         else if (
//             document.getElementById(column4[5]).style.backgroundColor == currentPlayer.color &&
//             document.getElementById(column4[4]).style.backgroundColor == currentPlayer.color &&
//             document.getElementById(column4[3]).style.backgroundColor == currentPlayer.color &&
//             document.getElementById(column4[2]).style.backgroundColor == currentPlayer.color
//         ){
//             currentPlayer.score++
//             alert(currentPlayer.name + " has won!")
//         }   else if (
//             document.getElementById(column4[4]).style.backgroundColor == currentPlayer.color &&
//             document.getElementById(column4[3]).style.backgroundColor == currentPlayer.color &&
//             document.getElementById(column4[2]).style.backgroundColor == currentPlayer.color &&
//             document.getElementById(column4[1]).style.backgroundColor == currentPlayer.color
//         ){
//             currentPlayer.score++
//             alert(currentPlayer.name + " has won!")
//         }   else if (
//             document.getElementById(column4[3]).style.backgroundColor == currentPlayer.color &&
//             document.getElementById(column4[2]).style.backgroundColor == currentPlayer.color &&
//             document.getElementById(column4[1]).style.backgroundColor == currentPlayer.color &&
//             document.getElementById(column4[0]).style.backgroundColor == currentPlayer.color
//         ){
//             currentPlayer.score++
//             alert(currentPlayer.name + " has won!")
//         }    
//         else if (
//             document.getElementById(column5[5]).style.backgroundColor == currentPlayer.color &&
//             document.getElementById(column5[4]).style.backgroundColor == currentPlayer.color &&
//             document.getElementById(column5[3]).style.backgroundColor == currentPlayer.color &&
//             document.getElementById(column5[2]).style.backgroundColor == currentPlayer.color
//         ){
//             currentPlayer.score++
//             alert(currentPlayer.name + " has won!")
//         }   else if (
//             document.getElementById(column5[4]).style.backgroundColor == currentPlayer.color &&
//             document.getElementById(column5[3]).style.backgroundColor == currentPlayer.color &&
//             document.getElementById(column5[2]).style.backgroundColor == currentPlayer.color &&
//             document.getElementById(column5[1]).style.backgroundColor == currentPlayer.color
//         ){
//             currentPlayer.score++
//             alert(currentPlayer.name + " has won!")
//         }   else if (
//             document.getElementById(column5[3]).style.backgroundColor == currentPlayer.color &&
//             document.getElementById(column5[2]).style.backgroundColor == currentPlayer.color &&
//             document.getElementById(column5[1]).style.backgroundColor == currentPlayer.color &&
//             document.getElementById(column5[0]).style.backgroundColor == currentPlayer.color
//         ){
//             currentPlayer.score++
//             alert(currentPlayer.name + " has won!")
//         }    
//         else if (
//             document.getElementById(column6[5]).style.backgroundColor == currentPlayer.color &&
//             document.getElementById(column6[4]).style.backgroundColor == currentPlayer.color &&
//             document.getElementById(column6[3]).style.backgroundColor == currentPlayer.color &&
//             document.getElementById(column6[2]).style.backgroundColor == currentPlayer.color
//         ){
//             currentPlayer.score++
//             alert(currentPlayer.name + " has won!")
//         }   else if (
//             document.getElementById(column6[4]).style.backgroundColor == currentPlayer.color &&
//             document.getElementById(column6[3]).style.backgroundColor == currentPlayer.color &&
//             document.getElementById(column6[2]).style.backgroundColor == currentPlayer.color &&
//             document.getElementById(column6[1]).style.backgroundColor == currentPlayer.color
//         ){
//             currentPlayer.score++
//             alert(currentPlayer.name + " has won!")
//         }   else if (
//             document.getElementById(column6[3]).style.backgroundColor == currentPlayer.color &&
//             document.getElementById(column6[2]).style.backgroundColor == currentPlayer.color &&
//             document.getElementById(column6[1]).style.backgroundColor == currentPlayer.color &&
//             document.getElementById(column6[0]).style.backgroundColor == currentPlayer.color
//         ){
//             currentPlayer.score++
//             alert(currentPlayer.name + " has won!")
//         }    
//         else if (
//             document.getElementById(column7[5]).style.backgroundColor == currentPlayer.color &&
//             document.getElementById(column7[4]).style.backgroundColor == currentPlayer.color &&
//             document.getElementById(column7[3]).style.backgroundColor == currentPlayer.color &&
//             document.getElementById(column7[2]).style.backgroundColor == currentPlayer.color
//         ){
//             currentPlayer.score++
//             alert(currentPlayer.name + " has won!")
//         }   else if (
//             document.getElementById(column7[4]).style.backgroundColor == currentPlayer.color &&
//             document.getElementById(column7[3]).style.backgroundColor == currentPlayer.color &&
//             document.getElementById(column7[2]).style.backgroundColor == currentPlayer.color &&
//             document.getElementById(column7[1]).style.backgroundColor == currentPlayer.color
//         ){
//             currentPlayer.score++
//             alert(currentPlayer.name + " has won!")
//         }   else if (
//             document.getElementById(column7[3]).style.backgroundColor == currentPlayer.color &&
//             document.getElementById(column7[2]).style.backgroundColor == currentPlayer.color &&
//             document.getElementById(column7[1]).style.backgroundColor == currentPlayer.color &&
//             document.getElementById(column7[0]).style.backgroundColor == currentPlayer.color
//         ){
//             currentPlayer.score++
//             alert(currentPlayer.name + " has won!")
//         }  else return 
     
// }
// The above code beginning on Line 38 is the old horizontal solution...
function checkForWinDiagonal(){
    for (let i = 0; i < diagonals.length; i++) {
        const space1 = diagonals[i][0];
        const space2 = diagonals[i][1];
        const space3 = diagonals[i][2];
        const space4 = diagonals[i][3];
        // console.log(space1)
        // console.log(space2)
        // console.log(space3)
        // console.log(space4)
        // console.log(space5)
        // console.log(space6)
        // console.log(space7)
        if (document.getElementById(space1).style.backgroundColor == currentPlayer.color &&
            document.getElementById(space2).style.backgroundColor == currentPlayer.color &&
            document.getElementById(space3).style.backgroundColor == currentPlayer.color &&
            document.getElementById(space4).style.backgroundColor == currentPlayer.color) 
            {
            alert(currentPlayer.name + " has won!")
        }  
    }
}
function checkForWinVertical(){
    for (let i = 0; i < rows.length; i++) {
        const space1 = rows[i][0];
        const space2 = rows[i][1];
        const space3 = rows[i][2];
        const space4 = rows[i][3];
        const space5 = rows[i][4];
        const space6 = rows[i][5];
        const space7 = rows[i][6]
        // console.log(space1)
        // console.log(space2)
        // console.log(space3)
        // console.log(space4)
        // console.log(space5)
        // console.log(space6)
        // console.log(space7)
        if (document.getElementById(space1).style.backgroundColor == currentPlayer.color &&
            document.getElementById(space2).style.backgroundColor == currentPlayer.color &&
            document.getElementById(space3).style.backgroundColor == currentPlayer.color &&
            document.getElementById(space4).style.backgroundColor == currentPlayer.color) 
            {
            alert(currentPlayer.name + " has won!")
        } else if (
            document.getElementById(space2).style.backgroundColor == currentPlayer.color &&
            document.getElementById(space3).style.backgroundColor == currentPlayer.color &&
            document.getElementById(space4).style.backgroundColor == currentPlayer.color &&
            document.getElementById(space5).style.backgroundColor == currentPlayer.color) 
            {
            alert(currentPlayer.name + " has won")
        }  else if (
            document.getElementById(space3).style.backgroundColor == currentPlayer.color &&
            document.getElementById(space4).style.backgroundColor == currentPlayer.color &&
            document.getElementById(space5).style.backgroundColor == currentPlayer.color &&
            document.getElementById(space6).style.backgroundColor == currentPlayer.color) 
            {
            alert(currentPlayer.name + " has won")
        }  else if (
            document.getElementById(space4).style.backgroundColor == currentPlayer.color &&
            document.getElementById(space5).style.backgroundColor == currentPlayer.color &&
            document.getElementById(space6).style.backgroundColor == currentPlayer.color &&
            document.getElementById(space7).style.backgroundColor == currentPlayer.color) 
            {
            alert(currentPlayer.name + " has won")
        }  
    }
}

function checkForWinHorizontal() {
    for (let i = 0; i < columns.length; i++) {
                const space1 = columns[i][0];
                const space2 = columns[i][1];
                const space3 = columns[i][2];
                const space4 = columns[i][3];
                const space5 = columns[i][4];
                const space6 = columns[i][5];
                // console.log(space1)
                // console.log(space2)
                // console.log(space3)
                // console.log(space4)
                // console.log(space5)
                // console.log(space6)
                if (document.getElementById(space1).style.backgroundColor == currentPlayer.color &&
                    document.getElementById(space2).style.backgroundColor == currentPlayer.color &&
                    document.getElementById(space3).style.backgroundColor == currentPlayer.color &&
                    document.getElementById(space4).style.backgroundColor == currentPlayer.color) 
                    {
                    alert(currentPlayer.name + " has won!")
                } else if (
                    document.getElementById(space2).style.backgroundColor == currentPlayer.color &&
                    document.getElementById(space3).style.backgroundColor == currentPlayer.color &&
                    document.getElementById(space4).style.backgroundColor == currentPlayer.color &&
                    document.getElementById(space5).style.backgroundColor == currentPlayer.color) 
                    {
                    alert(currentPlayer.name + " has won")
                } else if 
                    (document.getElementById(space3).style.backgroundColor == currentPlayer.color &&
                    document.getElementById(space4).style.backgroundColor == currentPlayer.color &&
                    document.getElementById(space5).style.backgroundColor == currentPlayer.color &&
                    document.getElementById(space6).style.backgroundColor == currentPlayer.color) 
                    {
                    alert(currentPlayer.name + " has won")
                } 
            }
}

function changeTurns() {
    if (currentPlayer === player1) {
        currentPlayer = player2;
        document.getElementById('currentPlayer').innerHTML = currentPlayer.name;
        alert("It is now " + currentPlayer.name + " turn!")
    } else if (currentPlayer === player2) {
        currentPlayer = player1;
        document.getElementById('currentPlayer').innerHTML = currentPlayer.name;
        alert("It is now " + currentPlayer.name + " turn!")
    }
}

function move1() {

    if (document.getElementById(column1[5]).style.backgroundColor != player1.color && document.getElementById(column1[5]).style.backgroundColor != player2.color) {
        document.getElementById(column1[5]).style.backgroundColor = (currentPlayer.color);
        
    } else if (document.getElementById(column1[4]).style.backgroundColor != player1.color && document.getElementById(column1[4]).style.backgroundColor != player2.color) {
        document.getElementById(column1[4]).style.backgroundColor = (currentPlayer.color);
        
    } else if (document.getElementById(column1[3]).style.backgroundColor != player1.color && document.getElementById(column1[3]).style.backgroundColor != player2.color) {
        document.getElementById(column1[3]).style.backgroundColor = (currentPlayer.color);
       
    } else if (document.getElementById(column1[2]).style.backgroundColor != player1.color && document.getElementById(column1[2]).style.backgroundColor != player2.color) {
        document.getElementById(column1[2]).style.backgroundColor = (currentPlayer.color);
       
    } else if (document.getElementById(column1[1]).style.backgroundColor != player1.color && document.getElementById(column1[1]).style.backgroundColor != player2.color) {
        document.getElementById(column1[1]).style.backgroundColor = (currentPlayer.color);
        
    } else if (document.getElementById(column1[0]).style.backgroundColor != player1.color && document.getElementById(column1[0]).style.backgroundColor != player2.color) {
        document.getElementById(column1[0]).style.backgroundColor = (currentPlayer.color);
         
    } else alert("No more moves can be made on this column.")
    checkForWinVertical();
    checkForWinHorizontal();
    checkForWinDiagonal();
    return changeTurns();
}
function move2() {

    if (document.getElementById(column2[5]).style.backgroundColor != player1.color && document.getElementById(column2[5]).style.backgroundColor != player2.color) {
        document.getElementById(column2[5]).style.backgroundColor = (currentPlayer.color)
    } else if (document.getElementById(column2[4]).style.backgroundColor != player1.color && document.getElementById(column2[4]).style.backgroundColor != player2.color) {
        document.getElementById(column2[4]).style.backgroundColor = (currentPlayer.color)
    } else if (document.getElementById(column2[3]).style.backgroundColor != player1.color && document.getElementById(column2[3]).style.backgroundColor != player2.color) {
        document.getElementById(column2[3]).style.backgroundColor = (currentPlayer.color)
    } else if (document.getElementById(column2[2]).style.backgroundColor != player1.color && document.getElementById(column2[2]).style.backgroundColor != player2.color) {
        document.getElementById(column2[2]).style.backgroundColor = (currentPlayer.color)
    } else if (document.getElementById(column2[1]).style.backgroundColor != player1.color && document.getElementById(column2[1]).style.backgroundColor != player2.color) {
        document.getElementById(column2[1]).style.backgroundColor = (currentPlayer.color)
    } else if (document.getElementById(column2[0]).style.backgroundColor != player1.color && document.getElementById(column2[0]).style.backgroundColor != player2.color) {
        document.getElementById(column2[0]).style.backgroundColor = (currentPlayer.color)
    } else alert("No more moves can be made on this column.")
    checkForWinVertical();
    checkForWinHorizontal();
    checkForWinDiagonal();
    return changeTurns();
}
function move3() {

    if (document.getElementById(column3[5]).style.backgroundColor != player1.color && document.getElementById(column3[5]).style.backgroundColor != player2.color) {
        document.getElementById(column3[5]).style.backgroundColor = (currentPlayer.color)
    } else if (document.getElementById(column3[4]).style.backgroundColor != player1.color && document.getElementById(column3[4]).style.backgroundColor != player2.color) {
        document.getElementById(column3[4]).style.backgroundColor = (currentPlayer.color)
    } else if (document.getElementById(column3[3]).style.backgroundColor != player1.color && document.getElementById(column3[3]).style.backgroundColor != player2.color) {
        document.getElementById(column3[3]).style.backgroundColor = (currentPlayer.color)
    } else if (document.getElementById(column3[2]).style.backgroundColor != player1.color && document.getElementById(column3[2]).style.backgroundColor != player2.color) {
        document.getElementById(column3[2]).style.backgroundColor = (currentPlayer.color)
    } else if (document.getElementById(column3[1]).style.backgroundColor != player1.color && document.getElementById(column3[1]).style.backgroundColor != player2.color) {
        document.getElementById(column3[1]).style.backgroundColor = (currentPlayer.color)
    } else if (document.getElementById(column3[0]).style.backgroundColor != player1.color && document.getElementById(column3[0]).style.backgroundColor != player2.color) {
        document.getElementById(column3[0]).style.backgroundColor = (currentPlayer.color)
    } else alert("No more moves can be made on this column.")
    checkForWinVertical();
    checkForWinHorizontal();
    checkForWinDiagonal();
    return changeTurns();
}
function move4() {

    if (document.getElementById(column4[5]).style.backgroundColor != player1.color && document.getElementById(column4[5]).style.backgroundColor != player2.color) {
        document.getElementById(column4[5]).style.backgroundColor = (currentPlayer.color)
    } else if (document.getElementById(column4[4]).style.backgroundColor != player1.color && document.getElementById(column4[4]).style.backgroundColor != player2.color) {
        document.getElementById(column4[4]).style.backgroundColor = (currentPlayer.color)
    } else if (document.getElementById(column4[3]).style.backgroundColor != player1.color && document.getElementById(column4[3]).style.backgroundColor != player2.color) {
        document.getElementById(column4[3]).style.backgroundColor = (currentPlayer.color)
    } else if (document.getElementById(column4[2]).style.backgroundColor != player1.color && document.getElementById(column4[2]).style.backgroundColor != player2.color) {
        document.getElementById(column4[2]).style.backgroundColor = (currentPlayer.color)
    } else if (document.getElementById(column4[1]).style.backgroundColor != player1.color && document.getElementById(column4[1]).style.backgroundColor != player2.color) {
        document.getElementById(column4[1]).style.backgroundColor = (currentPlayer.color)
    } else if (document.getElementById(column4[0]).style.backgroundColor != player1.color && document.getElementById(column4[0]).style.backgroundColor != player2.color) {
        document.getElementById(column4[0]).style.backgroundColor = (currentPlayer.color)
    } else alert("No more moves can be made on this column.")
    checkForWinVertical();
    checkForWinHorizontal();
    checkForWinDiagonal();
    return changeTurns();
}
function move5() {

    if (document.getElementById(column5[5]).style.backgroundColor != player1.color && document.getElementById(column5[5]).style.backgroundColor != player2.color) {
        document.getElementById(column5[5]).style.backgroundColor = (currentPlayer.color)
    } else if (document.getElementById(column5[4]).style.backgroundColor != player1.color && document.getElementById(column5[4]).style.backgroundColor != player2.color) {
        document.getElementById(column5[4]).style.backgroundColor = (currentPlayer.color)
    } else if (document.getElementById(column5[3]).style.backgroundColor != player1.color && document.getElementById(column5[3]).style.backgroundColor != player2.color) {
        document.getElementById(column5[3]).style.backgroundColor = (currentPlayer.color)
    } else if (document.getElementById(column5[2]).style.backgroundColor != player1.color && document.getElementById(column5[2]).style.backgroundColor != player2.color) {
        document.getElementById(column5[2]).style.backgroundColor = (currentPlayer.color)
    } else if (document.getElementById(column5[1]).style.backgroundColor != player1.color && document.getElementById(column5[1]).style.backgroundColor != player2.color) {
        document.getElementById(column5[1]).style.backgroundColor = (currentPlayer.color)
    } else if (document.getElementById(column5[0]).style.backgroundColor != player1.color && document.getElementById(column5[0]).style.backgroundColor != player2.color) {
        document.getElementById(column5[0]).style.backgroundColor = (currentPlayer.color)
    } else alert("No more moves can be made on this column.")
    checkForWinVertical();
    checkForWinHorizontal();
    checkForWinDiagonal();
    return changeTurns();
}
function move6() {

    if (document.getElementById(column6[5]).style.backgroundColor != player1.color && document.getElementById(column6[5]).style.backgroundColor != player2.color) {
        document.getElementById(column6[5]).style.backgroundColor = (currentPlayer.color)
    } else if (document.getElementById(column6[4]).style.backgroundColor != player1.color && document.getElementById(column6[4]).style.backgroundColor != player2.color) {
        document.getElementById(column6[4]).style.backgroundColor = (currentPlayer.color)
    } else if (document.getElementById(column6[3]).style.backgroundColor != player1.color && document.getElementById(column6[3]).style.backgroundColor != player2.color) {
        document.getElementById(column6[3]).style.backgroundColor = (currentPlayer.color)
    } else if (document.getElementById(column6[2]).style.backgroundColor != player1.color && document.getElementById(column6[2]).style.backgroundColor != player2.color) {
        document.getElementById(column6[2]).style.backgroundColor = (currentPlayer.color)
    } else if (document.getElementById(column6[1]).style.backgroundColor != player1.color && document.getElementById(column6[1]).style.backgroundColor != player2.color) {
        document.getElementById(column6[1]).style.backgroundColor = (currentPlayer.color)
    } else if (document.getElementById(column6[0]).style.backgroundColor != player1.color && document.getElementById(column6[0]).style.backgroundColor != player2.color) {
        document.getElementById(column6[0]).style.backgroundColor = (currentPlayer.color)
    } else alert("No more moves can be made on this column.")
    checkForWinVertical();
    checkForWinHorizontal();
    checkForWinDiagonal();
    return changeTurns();
}
function move7() {

    if (document.getElementById(column7[5]).style.backgroundColor != player1.color && document.getElementById(column7[5]).style.backgroundColor != player2.color) {
        document.getElementById(column7[5]).style.backgroundColor = (currentPlayer.color)
    } else if (document.getElementById(column7[4]).style.backgroundColor != player1.color && document.getElementById(column7[4]).style.backgroundColor != player2.color) {
        document.getElementById(column7[4]).style.backgroundColor = (currentPlayer.color)
    } else if (document.getElementById(column7[3]).style.backgroundColor != player1.color && document.getElementById(column7[3]).style.backgroundColor != player2.color) {
        document.getElementById(column7[3]).style.backgroundColor = (currentPlayer.color)
    } else if (document.getElementById(column7[2]).style.backgroundColor != player1.color && document.getElementById(column7[2]).style.backgroundColor != player2.color) {
        document.getElementById(column7[2]).style.backgroundColor = (currentPlayer.color)
    } else if (document.getElementById(column7[1]).style.backgroundColor != player1.color && document.getElementById(column7[1]).style.backgroundColor != player2.color) {
        document.getElementById(column7[1]).style.backgroundColor = (currentPlayer.color)
    } else if (document.getElementById(column7[0]).style.backgroundColor != player1.color && document.getElementById(column7[0]).style.backgroundColor != player2.color) {
        document.getElementById(column7[0]).style.backgroundColor = (currentPlayer.color)
        alert("No more moves can be made on this column!")
    } else alert("No more moves can be made on this column.")
    checkForWinVertical();
    checkForWinHorizontal();
    checkForWinDiagonal();
    return changeTurns();
}

let playerName1;
let playerColor1;
// This function takes input from the user to get their name and color
document.getElementById('submit1').onclick = function () {
    if (document.getElementById('name1') != null) {
        playerName1 = document.getElementById('name1').value
        document.getElementById('label1').innerHTML = ("Player 1: " + playerName1)
        document.getElementById('name1').remove()
        player1.name = playerName1

        playerColor1 = document.getElementById('color1').value
        document.getElementById('label3').innerHTML = ("Player 1 Color: " + playerColor1)
        document.getElementById('color1').remove()
        document.getElementById('submit1').remove()
        player1.color = playerColor1
        console.log(player1)
    } else return
}

let playerName2;
let playerColor2;
// This function takes input from the user to get their name and color
document.getElementById('submit2').onclick = function () {
    if (document.getElementById('name2') != null) {
        playerName2 = document.getElementById('name2').value
        document.getElementById('label2').innerHTML = ("Player 2: " + playerName2)
        document.getElementById('name2').remove()
        player2.name = playerName2

        playerColor2 = document.getElementById('color2').value
        document.getElementById('label4').innerHTML = ("Player 2 Color: " + playerColor2)
        document.getElementById('color2').remove()
        document.getElementById('submit2').remove()
        player2.color = playerColor2
        console.log(player2)

    } else return
}




document.getElementById('move1').addEventListener('click', move1)
document.getElementById('move2').addEventListener('click', move2)
document.getElementById('move3').addEventListener('click', move3)
document.getElementById('move4').addEventListener('click', move4)
document.getElementById('move5').addEventListener('click', move5)
document.getElementById('move6').addEventListener('click', move6)
document.getElementById('move7').addEventListener('click', move7)
