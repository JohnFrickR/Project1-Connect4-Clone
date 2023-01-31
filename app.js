const column1 = ["box8","box15","box22","box29","box36","box43"]
const column2 = ["box9","box16","box23","box30","box37","box44"]
const column3 = ["box10","box17","box24","box31","box38","box45"]
const column4 = ["box11","box18","box25","box32","box39","box46"]
const column5 = ["box12","box19","box26","box33","box40","box47"]
const column6 = ["box13","box20","box27","box34","box41","box48"]
const column7 = ["box14","box21","box28","box35","box42","box49"]

let player1 = {
    name: "",
    color: "yellow"
} 
let player2 = {
    name: "",
    color: "red"
}

player1.color = document.getElementById('color1').innerHTML
player1.name = document.getElementById('color1')
// document.getElementById("box8").style.backgroundColor = "red"

// document.getElementById(column1[1]).style.backgroundColor = "red" either of these methods work to change the color


function move1(){
    if(document.getElementById(column1[5]).style.backgroundColor != null)
    document.getElementById(column1[5]).style.backgroundColor = player1.color
    } 
// function name1(){
//     if(document.getElementById('name1') != null){
//        let name = document.getElementById('name1').innerText
//         document.getElementById('label1').innerHTML === name
//     } else return 
// } 
let playerName1;
let playerColor1;
document.getElementById('submit1').onclick = function(){
    if (document.getElementById('name1') != null){
        playerName1 = document.getElementById('name1').value
            document.getElementById('label1').innerHTML = ("Player 1: " + playerName1)
                document.getElementById('name1').remove()
                    player1.name = playerName1

        playerColor1 = document.getElementById('color1').value 
            document.getElementById('label3').innerHTML = ("Player 1 Color: " + playerColor1)
                    document.getElementById('color1').remove()
                    document.getElementById('submit1').remove()
                        player2.color = playerColor1
                                    console.log(player1)
    } else return 
}

let playerName2;
let playerColor2;
document.getElementById('submit2').onclick = function(){
    if (document.getElementById('name2') != null){
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



    document.getElementById('move1').addEventListener('click',move1)
    