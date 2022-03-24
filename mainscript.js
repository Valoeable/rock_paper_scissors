
//Function for generating a computer choice
function computerPlay(){
    let number=Math.floor(Math.random()*3)+1;
    return (number===1)?"Rock":(number===2)?"Paper":"Scissors";
}

//Function for deciding the winner of the round
function playRound(human,ai){
    let conclusion, newHuman;
    human=human.toLowerCase();
    newHuman=human.charAt(0).toUpperCase() + human.slice(1);
    return ((newHuman==="Rock" && ai==="Rock")||(newHuman==="Paper" && ai==="Paper")||(newHuman==="Scissors" && ai==="Scissors"))?0: //Draw
    ((newHuman==="Rock" && ai==="Paper")||(newHuman==="Scissors" && ai==="Rock")||(newHuman==="Paper" && ai==="Scissors"))?1: //Computer wins
    2; //Human wins
}
//Function for the whole game
function game(){
    let human,ai;
    let aiScore=0,humanScore=0,result=0;

    for(let i=0;i<5;i++){
        human=prompt("Choose your fighter:");
        ai=computerPlay();
        console.log(human);
        console.log(ai);
        result=playRound(human,ai);
        if(result===1){
            console.log("Point for the AI.");
            aiScore++;
        }
        else if(result===2){
            console.log("Point for you.");
            humanScore++;
        }
        result=0;
    }

    return (aiScore<humanScore)?"You are the total winner, congratulations!":
    (aiScore>humanScore)?"Computer is the total winner, unlucky!":
    "Draw, noone wins!";

}


console.log(game());
