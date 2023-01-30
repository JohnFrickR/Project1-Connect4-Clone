const column1 = ["box8","box15","box22","box29","box36","box43"]
const column2 = ["box9","box16","box23","box30","box37","box44"]
const column3 = ["box10","box17","box24","box31","box38","box45"]
const column4 = ["box11","box18","box25","box32","box39","box46"]
const column5 = ["box12","box19","box26","box33","box40","box47"]
const column6 = ["box13","box20","box27","box34","box41","box48"]
const column7 = ["box14","box21","box28","box35","box42","box49"]

let player1 = {
    name: "",
    color: ""
}
let player2 = {
    name: "",
    color: null
}

player1.color = document.getElementById('color1').innerHTML
player1.name = document.getElementById('color1')
// document.getElementById("box8").style.backgroundColor = "red"

// document.getElementById(column1[1]).style.backgroundColor = "red" either of these methods work to change the color



function move1(){
    if(document.getElementById(column1[5]).style.backgroundColor != null)
    document.getElementById(column1[5]).style.backgroundColor = player1.color
    } 

    document.getElementById('move1').addEventListener('click',move1)