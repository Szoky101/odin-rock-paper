function getRandomInt(max){
    return Math.floor(Math.random() * max)
}

function getComputerChoise(){
    let random_szam = getRandomInt(3);
    if (random_szam === 0)
    {
        return "rock";
    }
    else if(random_szam === 1)
    {
        return "scissors";
    }
    else
    {
        return "paper";
    }
}

function getPlayerChoise(){

}

function oneRoundGame(playerSelection, computerSelection){

}

console.log(getComputerChoise())
