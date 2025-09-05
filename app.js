let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompChoice = () => {
    const option = ["Rock", "Paper", "Scissors"];
    const randomIdx = Math.floor(Math.random() * 3);
    return option[randomIdx];

}

const drawGame = () => {
    console.log("Game Was Draw.");
    msg.innerHTML = "Game Was Draw.Play Agin 👻";
    msg.style.backgroundColor = "#081b31";
}

const showWnner = (userWin,userChoice,compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerHTML = userScore;
        msg.innerHTML = `You Win! 😎 Your ${userChoice} Beats ${compChoice}`;
        msg.style.backgroundColor = "Green";


    } else {
        compScore++;
        compScorePara.innerHTML = compScore;
        msg.innerHTML = `You Lose! 💀 Your ${userChoice} Beats ${compChoice}`;
        msg.style.backgroundColor = "red";

    }
}


const playGame = (userChoice) => {
    console.log("User Choice = ", userChoice);
    const compChoice = genCompChoice();
    console.log("Computer Choice = ", compChoice);

    if (userChoice === compChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice === 'Rock') {
            // scissors , paper
            userWin = compChoice === 'Paper' ? false : true;
        }
        else if (userChoice === 'Paper') {
            // Rock , scissors
            userWin = compChoice === 'Scissors' ? false : true;
        }
        else {
            // user => scissors
            // comp => rock , paper

            userWin = compChoice === 'Paper' ? false : true;
        }
        showWnner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});