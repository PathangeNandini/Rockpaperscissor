const choices =["rock", "paper", "scissors"];
const pd =document.getElementById("playerdisplay");
const cd =document.getElementById("computerdisplay");
const rd=document.getElementById("resultdisplay");
const psd=document.getElementById("playersd");
const csd=document.getElementById("comsd");
const winSound = new Audio("./win.mp3");
const loseSound = new Audio("./lose.mp3");
const tiesound = new Audio("./tie.mp3");

let ps=0;
let cs=0;

function reeset(){
    ps = 0;
    cs = 0;

    psd.textContent = 0;
    csd.textContent = 0;

    pd.textContent = "Player:";
    cd.textContent = "Computer:";
    rd.textContent = "";

    rd.classList.remove("greentext", "redtext");

    winSound.pause();
    loseSound.pause();
    tiesound.pause();

    winSound.currentTime = 0;
    loseSound.currentTime = 0;
    tiesound.currentTime = 0;

}

function playSoundForOneSecond(sound){
    sound.pause();
    sound.currentTime = 0;
    sound.play();

    setTimeout(() => {
        sound.pause();
        sound.currentTime = 0;
    }, 1500);
}

function playgame(playerchoice){
    const cc=choices[Math.floor(Math.random()*3)];
    let result="";

    if(playerchoice === cc){
        result="IT'S A TIE!";
    }
    else{
        switch(playerchoice){
            case "rock":
                result = (cc === "scissors") ? "YOU WIN!😍" : "YOU LOSE!😥";
                break;
            case "paper":
                result = (cc === "rock") ? "YOU WIN!😍" : "YOU LOSE!😥";
                break;
            case "scissors":
                result = (cc === "paper") ? "YOU WIN!😍" : "YOU LOSE!😥";
                break;
            
        }
    }
    pd.textContent = `Player: ${playerchoice}`;
    cd.textContent = `Computer: ${cc}`;
    rd.textContent=result; 

    rd.classList.remove("greentext","redtext");
    
    switch(result){
        case "YOU WIN!😍":
            rd.classList.add("greentext");
            playSoundForOneSecond(winSound);
            ps++;
            psd.textContent=ps;
            break;
        case "YOU LOSE!😥":
            rd.classList.add("redtext");
            playSoundForOneSecond(loseSound);
            cs++;
            csd.textContent=cs;
            break;
        case "IT'S A TIE!":
            playSoundForOneSecond(tiesound);
    }
}