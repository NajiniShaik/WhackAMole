const cards=document.querySelectorAll(".card");
const mole=document.querySelector(".mole");
const timer=document.querySelector("#timeLeft");
const score=document.querySelector("#score");

let positionId;
let timerId=null;
let countDownTimerId=null;
let result=0;
let currentTime=60;

function randomCard(){
    cards.forEach(eachCard => eachCard.classList.remove("mole"));

    let randomValue=Math.floor(Math.random()*9);

    let randomCard=document.getElementById(randomValue);

    randomCard.classList.add("mole");

    positionId=randomValue;

}

cards.forEach(card =>{
    card.addEventListener("mousedown",()=>{
        if (card.id == positionId){
            result++;
            score.textContent=result;
            positionId=null;
        }
    })
})

function moveMole(){
    timerId=setInterval(randomCard,1000);
}

moveMole();

function resetGame(){
    result=0;
    timerId=null,
    countDownTimerId=null
    moveMole();
}

function countDown(){
    currentTime-=1;
    timer.textContent=currentTime;
    if (currentTime === 0){
        clearInterval(countDownTimerId);
        clearInterval(timerId);
        alert("GAME OVER! Your final score is "+result);
        resetGame();
    }
}

countDownTimerId=setInterval(countDown,1000);