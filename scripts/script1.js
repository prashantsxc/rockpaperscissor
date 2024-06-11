const buttons = document.querySelectorAll(".inputbtn");

let win=0;
let loss=0;
let draw=0;

buttons.forEach(button => {
  button.addEventListener("click", () => {
    let userInput='';
    if (button.classList.contains('rock')) {
        userInput='rock';
    }
    else if (button.classList.contains('paper')) {
        userInput='paper';
    }
    else {
        userInput='scissor';
    }
   let compInput=generateComputerInput();
   outcome=playGame(userInput,compInput);

    if (outcome ==='win') {
        win++;
    }
    else if (outcome === 'loss') {
        loss++;
    }
    else {
        draw++;
    }

    updateContent (outcome,win,loss,draw);

  });
});

function generateComputerInput () {
    let choices=['rock','paper','scissor'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    let genOutput=choices[randomIndex];

    const computerImage = document.querySelector(".outputimg");

    const rockPath=`./images/${genOutput}.jpg`; 
    const paperPath=`./images/${genOutput}.png`; 
    const scissorPath=`./images/${genOutput}.png`; 

    switch (genOutput) {
        case 'rock':
            imagePath=rockPath;
            break;
        case 'paper':
            imagePath=paperPath;
            break;
        case 'scissor':
            imagePath=scissorPath;
            break;

    }

    computerImage.setAttribute("src", imagePath);

    return genOutput;

}

function playGame (userInput,compInput) {
    let outcome ='';
    if (userInput===compInput) {
        outcome='draw';
    }
    else {
        if (
             (userInput==='rock' && compInput==='scissor') ||
                (userInput==='paper' && compInput==='rock') ||
                    (userInput==='scissor' && compInput==='paper')) {
                        outcome='win';
                    }
                    else {
                        outcome='loss';
                    }

    }
    return outcome;
}


function updateContent(outcome,win,loss,draw) {
    const aggregator = document.querySelector(".outputbox");
    const currentOutcome = document.querySelector(".currentoutcome");


    currentOutcome.textContent = `${outcome}!`;
    aggregator.textContent= `Wins: ${win}, Losses: ${loss}, Draws: ${draw}`;
}