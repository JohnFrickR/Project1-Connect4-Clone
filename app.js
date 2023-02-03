const column1 = ["box8", "box15", "box22", "box29", "box36", "box43"]
const column2 = ["box9", "box16", "box23", "box30", "box37", "box44"]
const column3 = ["box10", "box17", "box24", "box31", "box38", "box45"]
const column4 = ["box11", "box18", "box25", "box32", "box39", "box46"]
const column5 = ["box12", "box19", "box26", "box33", "box40", "box47"]
const column6 = ["box13", "box20", "box27", "box34", "box41", "box48"]
const column7 = ["box14", "box21", "box28", "box35", "box42", "box49"]

let player1 = {
    name: "",
    color: ""
}
let player2 = {
    name: "",
    color: ""
}

let currentPlayer = player1;
document.getElementById('currentPlayer').innerHTML = currentPlayer.name

player1.color = document.getElementById('color1').innerHTML
player1.name = document.getElementById('color1')
// document.getElementById("box8").style.backgroundColor = "red"

// document.getElementById(column1[1]).style.backgroundColor = "red" either of these methods work to change the color
// function currentPlayer(){

// } 
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
        document.getElementById(column1[5]).style.backgroundColor = (currentPlayer.color)
    } else if (document.getElementById(column1[4]).style.backgroundColor != player1.color && document.getElementById(column1[4]).style.backgroundColor != player2.color) {
        document.getElementById(column1[4]).style.backgroundColor = (currentPlayer.color)
    } else if (document.getElementById(column1[3]).style.backgroundColor != player1.color && document.getElementById(column1[3]).style.backgroundColor != player2.color) {
        document.getElementById(column1[3]).style.backgroundColor = (currentPlayer.color)
    } else if (document.getElementById(column1[2]).style.backgroundColor != player1.color && document.getElementById(column1[2]).style.backgroundColor != player2.color) {
        document.getElementById(column1[2]).style.backgroundColor = (currentPlayer.color)
    } else if (document.getElementById(column1[1]).style.backgroundColor != player1.color && document.getElementById(column1[1]).style.backgroundColor != player2.color) {
        document.getElementById(column1[1]).style.backgroundColor = (currentPlayer.color)
    } else if (document.getElementById(column1[0]).style.backgroundColor != player1.color && document.getElementById(column1[0]).style.backgroundColor != player2.color) {
        document.getElementById(column1[0]).style.backgroundColor = (currentPlayer.color)
    } else alert("No more moves can be made on this column.")
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
