function game(){
    function getRandomInt(max){
        return Math.floor(Math.random() * max)
    }

    function getComputerChoise(){
     let random_num = getRandomInt(3);sss
        if (random_num === 0)
        {
            return "rock";
        }
        else if(random_num === 1)
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
            return "The game is draw";
        }
        else if ((computerSelection == "scissors" && playerSelection == "rock") ||
                (computerSelection == "rock" && playerSelection == "paper") ||
                (computerSelection == "paper" && playerSelection == "scissors")
                                                                )
        {   
            return "You win";
        }
        else if ((computerSelection == "rock" && playerSelection == "scissors") ||
                (computerSelection == "paper" && playerSelection == "rock") ||
                (computerSelection == "scissors" && playerSelection == "paper")
                                                                  )
        {
            return "You lose";
        }
    }
    let playerChoise = prompt("Choose a sign");
    return oneRoundGame(playerChoise, getComputerChoise());

}

function gameloop(){
    let i = 0;
    while (i < 5)
    {
    let result = game();
    console.log(result)
    i++;
    }

}

gameloop();