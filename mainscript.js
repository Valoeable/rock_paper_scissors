function computerPlay(){
    let number=Math.floor(Math.random()*3)+1;
    return (number===1)?console.log("Rock"):(number===2)?console.log("Paper"):console.log("Scissors");
}

computerPlay();