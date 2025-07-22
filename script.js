let Player1 = document.querySelector("#btn1");
let Player2 = document.querySelector("#btn2");
let reset = document.querySelector("#btn3");

let score1 = 0;
let score2 = 0;

Player1.addEventListener('click', () => {
    score1++;
    document.querySelector("#p1").innerHTML = score1;
});

Player2.addEventListener('click', () => {
    score2++;
    document.querySelector("#p2").innerHTML = score2;
});

reset.addEventListener('click', () => {
    score1 = 0;
    score2 = 0;
    
    document.querySelector("#p1").innerHTML = score1;
    document.querySelector("#p2").innerHTML = score2;
});
