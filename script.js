"use strict";

//player0
const totalScoreP0 = document.querySelector(".totalScoreP0")
const playerCurrScore0 = document.getElementsByClassName(".score0")

//player1
const totalScoreP1  = document.querySelector(".totalScoreP1")
const playerCurrScore1 = document.querySelector(".score1")

const newGame = document.querySelector(".newGame")
const dices = document.querySelector(".dices")
const roll = document.querySelector(".roll")
const hold = document.querySelector(".hold")
const winner = document.querySelector(".winner")


let randomNumber ;
let currentPlayer = 0;
let currentScore = 0 ;
const scores = [0,0]


//1- when the user rools the dices

    //generate a random number
    function randomNum() {
        return Math.floor(Math.random()*6 +1) 
    }

    


    //display the dice roll
    function displayDiceRoll() {
        // if(scores[0] >= 50 || scores[1] >=50 ){
        //     displayWinner()
        // }
        randomNumber = randomNum()
        dices.src = `${randomNumber}.png`
        dices.classList.remove("hidden")
        if(Number(randomNumber) == 1){
            //switch players
            currentScore= 0
            document.querySelector(`.scoreP${currentPlayer}`).textContent = "0"
            switchPlayer(currentPlayer)
            changeBgColor()
        }
        else{
            
            addDicerollCurrScore()
            
        }
    }

    


//2-when the player holds the score 
function holdFnc(){
    addcurrToTotalScore()
    
    if(scores[currentPlayer]>=50){
        displayWinner()
    }
    else{
        switchPlayer(currentPlayer )    }

}

//3-when the player resets the game 
function newgame(){
if(confirm("Are you sure to start a New Game ? ") == true){
        resetAllScore()
    }
    

}    


//all other functions are down here

function addDicerollCurrScore(){
    currentScore += randomNumber
    document.querySelector(`.scoreP${currentPlayer}`).textContent = currentScore
}   

function switchPlayer(currPlayer){
    currentPlayer =  currPlayer ? 0 : 1
}

function changeBgColor(){
    document.querySelector(`.Player${currentPlayer}`).classList.toggle("colorBright")
}

function addcurrToTotalScore(){
    scores[currentPlayer] += currentScore
    document.querySelector(`.totalScoreP${currentPlayer}`).textContent = scores[currentPlayer];
    currentScore = 0
    document.querySelector(`.scoreP${currentPlayer}`).textContent = currentScore


}
function displayWinner(){
    dices.classList.add("hidden")
    winner.classList.remove("hidden")
    document.querySelector(".roolhold").classList.add("hidden")
    winner.innerHTML =  `PLAYER ${currentPlayer + 1} won 🎉🎉🎉`
}

function resetAllScore(){
    
    currentPlayer = 0;
    currentScore = 0 ;
    scores[0] = 0
    scores[1] = 0
    document.querySelector(".roolhold").classList.remove("hidden")
    document.querySelector(".totalScoreP0").textContent = "0"
    document.querySelector(".totalScoreP1").textContent = "0"
    document.querySelector(".scoreP0").textContent = "0"
    document.querySelector(".scoreP1").textContent = "0"
    document.querySelector(".winner").classList.add("hidden")
}