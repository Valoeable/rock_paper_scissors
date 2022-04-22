
let aiScore=0,humanScore=0,exit=0;

//Function for generating a computer choice
function computerPlay(){
    let number=Math.floor(Math.random()*3)+1;
    return (number===1)?"Rock":(number===2)?"Paper":"Scissors";
}

//Function for deciding the winner of the round
function playRound(human){
    let newHuman;
    human=human.toLowerCase();
    newHuman=human.charAt(0).toUpperCase() + human.slice(1);
    return ((newHuman==="Rock" && ai==="Rock")||(newHuman==="Paper" && ai==="Paper")||(newHuman==="Scissors" && ai==="Scissors"))?1: //Draw
    ((newHuman==="Rock" && ai==="Paper")||(newHuman==="Scissors" && ai==="Rock")||(newHuman==="Paper" && ai==="Scissors"))?2: //Computer wins
    3; //Human wins
}
//Function for one round of the game
function game(human){
    reset.style.opacity = '1';
    reset.style.display = 'inline-block';
    fText.style.opacity = '1';
    fText.style.display = 'block';
    let result=0;
    ai=computerPlay();
        result=playRound(human,ai);
        if(result===1){
            decision(result,human,ai);
        }
        if(result===2){
            decision(result,human,ai);
            aiScore++;
        }
        if(result===3){
            decision(result,human,ai);
            humanScore++;
        }

        updateScore();

        if(human==='Rock' && humanScore<=4 && aiScore<=4){
            rockSound.play();
        }
        if(human==='Paper' && humanScore<=4 && aiScore<=4){
            paperSound.play();
        }
        if(human==='Scissors' && humanScore<=4 && aiScore<=4){
            scissorsSound.play();
        }

        if(aiScore===5 || humanScore===5){
            endGameDecision();
        }
    

}

//UI control

const finalDecision=document.getElementById('decisionText');
const mAudio=document.getElementById("mainSong");
const winSound=document.getElementById('win');
const defeatSound=document.getElementById('defeat');
const youWin=document.getElementById('youWon');
const youLose=document.getElementById("youLost");
const rockSound=document.getElementById('rSound');
const paperSound=document.getElementById('pSound');
const scissorsSound=document.getElementById('sSound');
const musicButton=document.getElementById("msButton");
const rButton=document.getElementById('rockButton');
const pButton=document.getElementById('paperButton');
const sButton=document.getElementById('scissorsButton');
const hScore=document.getElementById('humanScore');
const AIScore=document.getElementById('aiScore');
const fText=document.getElementById('finalVerdict');
const reset=document.getElementById('resetButton');
const resetSound=document.getElementById('resetSound');
const boom1=document.getElementById('boom1');
const boom2=document.getElementById('boom2');

musicButton.addEventListener('click', () => playAudio());
rButton.addEventListener('click', () => game('Rock'));
pButton.addEventListener('click',() => game('Paper'));
sButton.addEventListener('click',() => game('Scissors'));
reset.addEventListener('click',() =>resetGame());


function playAudio(){
    mAudio.volume=0.25;
    mAudio.play();
    youWin.pause();
    youWin.currentTime=0;
    youLose.pause();
    youLose.currentTime=0;
}


function updateScore(){
    hScore.textContent=`Rohan: ${humanScore}`;
    AIScore.textContent=`Ken: ${aiScore}`;
}

function decision(final,h,ai){

    if(final===1){
        if(h==="Scissors"&&ai==="Scissors"){
            finalDecision.textContent=`It's a tie! ${h} draw out ${ai}.`;
        }
        else{finalDecision.textContent=`It's a tie! ${h} draws out ${ai}.`;}
    }

    if(final===2){
        if(ai==="Scissors"){
            finalDecision.textContent=`You lost! ${ai} beat ${h}.`;
        }
        else{finalDecision.textContent=`You lost! ${ai} beats ${h}.`;}
    }

    if(final===3){
        if(h==="Scissors"){
            finalDecision.textContent=`You win! ${h} beat ${ai}.`;
        }
        else{finalDecision.textContent=`You win! ${h} beats ${ai}.`;}
    }



}

function endGameDecision(){
    return humanScore===5?endScreen(1):endScreen(2);
}

function endScreen(whoWon){
    if(whoWon===1){
        mAudio.pause();
        winSound.play();
        youWin.volume=0.8;
        youWin.play();
        fText.style.visibility='visible';
        fText.style.transition='all 2s';
        fText.textContent="You helped Rohan save Morioh! What a chad!";
        rButton.disabled=true;
        pButton.disabled=true;
        sButton.disabled=true;
        reset.style.visibility='visible';
        reset.style.transition='all 2s';
    }

    if(whoWon===2){
        mAudio.pause();
        defeatSound.play();
        youLose.play();
        fText.style.visibility='visible';
        fText.style.transition='all 1.3s';
        fText.textContent="You lost...Now u will suffer the consequences.";
        musicButton.disabled=true;
        rButton.disabled=true;
        pButton.disabled=true;
        sButton.disabled=true;
        reset.style.visibility='visible';
        reset.style.transition='all 2s';
    }

}

function waithide()
{
  reset.style.opacity = '0';
  fText.style.opacity='0';
}



function resetGame(){
    youWin.pause();
    youWin.currentTime=0;
    youLose.pause();
    youLose.currentTime=0;
    resetSound.play();
    waithide();
    setTimeout(function boom(){
        boom1.style.visibility='visible';
        boom2.style.visibility='visible';
    }, 1000);
    setTimeout(function boomhide(){
        boom1.style.visibility='hidden';
        boom2.style.visibility='hidden';
    }, 3500);
    fText.style.visibility='hidden';
    reset.style.visibility='hidden';
    setTimeout(function(){
        humanScore=0;
        aiScore=0;
        hScore.textContent=`Rohan: ${humanScore}`;
        AIScore.textContent=`Ken: ${aiScore}`;
        finalDecision.textContent='Peace of Morioh rests upon your shoulders.';
        rButton.disabled=false;
        pButton.disabled=false;
        sButton.disabled=false;
        musicButton.disabled=false;
        mAudio.currentTime = 0;
        exit=0;
    }, 5000);
}

