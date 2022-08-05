let player1Score = 0
let player2Score = 0
let player1Turn = true

const player1Dice = document.getElementById("player1Dice")
const player2Dice = document.getElementById("player2Dice")
const player1Scoreboard = document.getElementById("player1Scoreboard")
const player2Scoreboard = document.getElementById("player2Scoreboard")
const message = document.getElementById("message")
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")

function displayButton() {
    rollBtn.style.display = "none"
    resetBtn.style.display = "block" 
}





rollBtn.addEventListener("click", function() {

        const randomNumber = Math.floor(Math.random() * 6) + 1
    
    
    
    
    if (player1Turn) {
        player2Dice.classList.remove("shake")
        player1Dice.classList.add("shake")
        setTimeout (function(){
            player1Dice.innerHTML =+ randomNumber
            player1Dice.classList.remove("active")
            player2Dice.classList.add("active")
            player1Scoreboard.innerHTML =  player1Score += randomNumber 
            message.innerHTML ="Player 2 Turn"
        },1000)
        
        
     

    } else {
        player1Dice.classList.remove("shake")
        player2Dice.classList.add("shake")
        setTimeout(function(){
            player2Dice.innerHTML =+ randomNumber
            player2Dice.classList.remove("active")
            player1Dice.classList.remove("shake")
            player1Dice.classList.add("active")
            player2Scoreboard.innerHTML = player2Score += randomNumber
            message.innerHTML ="Player 1 Turn"
        },1000)
       
        

    }
    if (player1Score >= 20) { 
        message.textContent = "Player 1 has won"
        displayButton()
        
        } else if (player2Score >= 20) {
        message.textContent = "player 2 has won!"
        displayButton()
        }

    // if  (player1Score && player2Score >= 20) {
    //     rollBtn.style.display = "none"
    //     resetBtn.style.display = "block" 
    // }   


    player1Turn = !player1Turn 
    


})

resetBtn.addEventListener("click", function(){
    rollBtn.style.display = "block"
    resetBtn.style.display = "none"
    message.textContent = "player 1 Turn"
    player1Scoreboard.textContent = player1Score = 0
    player2Scoreboard.textContent = player2Score = 0
    player1Dice.textContent = "-"
    player2Dice.textContent = "-"
    player1Turn = true
    player2Dice.classList.remove("active")
    player1Dice.classList.add("active")
})

