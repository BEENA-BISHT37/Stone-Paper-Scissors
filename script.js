let userScore =0;
let compScore =0;

let choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");

const genCompChoice = () =>{

    const options = ["rock", "scissors", "paper"];
    let randInd = Math.floor(Math.random() * 3);
    return options[randInd];
}

const gameDraw = () =>{
    msg.innerText = "Game was draw Plese try again"
    msg.style.backgroundColor = "#040714";
}

const showWinner = (userWin) =>{
    if(userWin)
    {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = "You Win";
        msg.style.backgroundColor = "green";
    }
    else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = "You Lost"
        msg.style.backgroundColor = "red";
    }
}
const playGame = (userChoice) =>{

    console.log("user choice", userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice", compChoice);
    
    if(userChoice === compChoice)
    {
        gameDraw();
    } 
    else {
        let userWin = true; 
        if(userChoice === "rock")
        {
            // paper, scissors
            userWin = compChoice === "paper"? false : true;
        } else if(userChoice === "paper")
        {
            userWin = compChoice === "rock"? true : false;
        } 
        else {
            userWin = compChoice === "paper" ? true : false;
        }

        showWinner(userWin);
    }

}
choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
     const userChoice = choice.getAttribute("id");
     playGame(userChoice);
    })
});
