let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

const genCompchoice = () => {
    let options = ["rock", "paper", "scissors"];
    // Generate computer choice
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const playGame = (userChoice) => {
    const compChoice = genCompchoice();

    if (userChoice === compChoice) {
        msg.textContent = "Game was draw. Play again";
        msg.style.backgroundColor = "#081b31";
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "scissors" ? true : false;
        } else if (userChoice === "paper") {
            userWin = compChoice === "rock" ? true : false;
        } else {
            userWin = compChoice === "paper" ? true : false;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        msg.textContent = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        document.querySelector("#user-score").textContent = ++userScore; // Update user score

    } else {
        msg.textContent = `You lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
        document.querySelector("#comp-score").textContent = ++compScore; // update computer score
    }
}