function game(){
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

    function oneRoundGame(playerSelection, computerSelection){
        if (computerSelection == playerSelection)
        {
            return "The game is draw"
        }
        else if ((computerSelection == "scissors" && playerSelection == "rock") ||
                (computerSelection == "rock" && playerSelection == "paper") ||
                (computerSelection == "paper" && playerSelection == "scissors")
                                                                )
        {   
            return "you win";
        }
        else if ((computerSelection == "rock" && playerSelection == "scissors") ||
                (computerSelection == "paper" && playerSelection == "rock") ||
                (computerSelection == "scissors" && playerSelection == "paper")
                                                                  )
        {
            return "You lose";
        }
    }
    let playerChoise = prompt("Choose a sign")
    return oneRoundGame(playerChoise, getComputerChoise());

}

function gameloop(){
    let i = 0;
    while (i < 5)
    {
    let eredmeny = game();
    console.log(eredmeny)
    i++;
    }

}

gameloop();