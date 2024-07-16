const diceImages = [
   "dice/zer1.jpg",
   "dice/zer2.webp",
   "dice/zer3.webp",
   "dice/zer4.webp",
   "dice/zer5.png",
   "dice/zer6.webp"
 ];
btn.onclick = function diceGame() {
    let dice1 = Math.floor(Math.random() * 6)
    let dice2 = Math.floor(Math.random() * 6)
    document.getElementById("dice1").style.backgroundImage = `url("${diceImages[dice1]}")`
    document.getElementById("dice2").style.backgroundImage = `url("${diceImages[dice2]}")`
   
    let sound = document.getElementById("sound")
     if (dice1 > dice2) {
        let a = document.getElementById("win")
        a.textContent = "PLAYER-1 WINS!"
        sound.play()
    }
    else if(dice1 < dice2) {
        let a = document.getElementById("win")
        a.textContent = "PLAYER-2 WINS!"
        sound.play()
    }else {
         let a = document.getElementById("win")
        a.textContent = "Try Agains"
    }
}
btn2.onclick = function playerNames() {
let playerName1 = prompt("player Name 1")
let player1 = document.getElementById("play-1")
player1.textContent = "Player-1: " + playerName1

let playerName2 = prompt("player Name 2")
let player2 = document.getElementById("play-2")
player2.textContent = "Player-2: " + playerName2
}