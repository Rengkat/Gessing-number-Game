"use strict";
const restart = document.getElementById("restart");
const seceretNumberPrint = document.querySelector(".seceret-number");
const inputGuess = document.querySelector("#input");
const checkBtn = document.querySelector("#check");
let resultDeclearation = document.querySelector("#declearation");
const score = document.querySelector("#score");
const highScore = document.querySelector("#highScore");
let counter = 20;
let highScor = 20;

//eventlisteners
checkBtn.addEventListener("click", () => {
  let secretNum = Math.floor(Math.random() * 20) + 1;
  if (inputGuess.value === "" || inputGuess === null) {
    resultDeclearation.innerHTML = "GUESS A NUMBER";
    document.querySelector("body").style.backgroundColor = "red";
    console.log("empty");
  } else if (Number(inputGuess.value) === secretNum) {
    counter--;
    highScor--;
    seceretNumberPrint.innerHTML = `<h1>${secretNum}</h1>`;
    seceretNumberPrint.style.padding = "0rem 7rem";
    // resultDeclearation.innerHTML = "CORRECT GUESS";
    document.querySelector("body").style.backgroundColor = "green";
    resultDeclearation.innerHTML = "CORRECT GUESS";
    score.innerHTML = `Score<span>: ${counter}</span>`;
    if (counter > highScor) {
      highScore.innerHTML = `HIGH SCORE<span>: ${highScor}</span>`;
    }
  } else {
    counter--;
    resultDeclearation.innerHTML = `GUESS LEFT <span>${counter}</span>`;
    if (counter === 0) {
      resultDeclearation.textContent = "YOU LOOSE! TRY AGAIN";
      document.querySelector("body").style.backgroundColor = "red";
    }
  }
});

//re start
restart.addEventListener("click", function () {
  window.location.reload();
});
