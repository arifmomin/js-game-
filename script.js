// =============Player One ===========
const playerOneInfo = document.querySelector(".playerOneInfo");
const playerOneHead = document.querySelector(".playerOneHead");
const playerOneError = document.querySelector(".playerOneError");
const playerOneInput = document.querySelector("#playerOneInput");
const PlayerOneButton = document.querySelector(".PlayerOneButton")
const playerOneBox = document.querySelector(".playerOneBox");
// =============player Two ===========
const playerTwoBox = document.querySelector(".playerTwoBox");
const playerTwoHead = document.querySelector(".playerTwoHead");
const playerTwoError = document.querySelector(".playerTwoError");
const playerTwoInput = document.querySelector("#playerTwoInput");
const PlayerTwoButton = document.querySelector(".PlayerTwoButton");
const tryAgain = document.querySelector (".PlayerTwoTryAgain")
//   let playerOneNumber
let playerOneNumber = null;
let chance = 3;
PlayerOneButton.addEventListener("click" ,()=>{
    const playerOneValue =playerOneInput.value;
    if(isNaN(playerOneValue)){
        playerOneError.innerHTML = "This Is invalid input try to give a number"
        playerOneError.style.textTransform = "capitalize";
        playerOneError.style.color = "red";
    }
    else if (playerOneValue < 0 || playerOneValue > 10){
        playerOneError.innerHTML = "input must be 1-10"
        playerOneError.style.textTransform = "capitalize";
        playerOneError.style.color = "red";

    }else{
        playerOneError.innerHTML = "Well done you giveing a right input"
        playerOneError.style.textTransform = "capitalize";
        playerOneError.style.color = "green";
        playerOneNumber = playerOneValue;
        playerOneInfo.style.display = "none"
        playerTwoBox.style.display = "flex"
        playerOneBox.style.display = 'none'
    }
});

PlayerTwoButton.addEventListener("click", ()=>{
    const playerTwoValue = playerTwoInput.value;
    if(isNaN(playerTwoValue)){
        playerTwoError.innerHTML = "This Is invalid input try to give a number"
        playerTwoError.style.textTransform = "capitalize";
        playerTwoError.style.color = "red";
    }
    else if (playerTwoValue < 0 || playerTwoValue > 10){
        playerTwoError.innerHTML = "input must be 1-10"
        playerTwoError.style.textTransform = "capitalize";
        playerTwoError.style.color = "red";
    }else{
        chance--;
      if(playerTwoValue == playerOneNumber){
        playerTwoHead.innerHTML = "Congraluation You Win"
        playerTwoHead.style.color = "green"
        playerTwoInput.style.display = "none";
        PlayerTwoButton.style.display = "none";
        tryAgain.style.display = "block";
        tryAgain.innerHTML = "Play Again";

      }else{
        playerTwoHead.innerHTML = `you have only ${chance} Chance`;
        if (chance === 0) {
            playerTwoInput.style.display = "none";
            PlayerTwoButton.style.display = "none";
            playerTwoHead.innerHTML = `The Correct Ans was ${playerOneNumber}`
            playerTwoHead.style.color = "red"
            tryAgain.style.display = "block";
        }

      }
    }
})
tryAgain.addEventListener('click', ()=>{
    window.location.reload();
});

