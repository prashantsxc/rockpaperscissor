const buttons = document.querySelectorAll(".inputbtn");

let win=0;
let loss=0;
let draw=0;

buttons.forEach(button => {
  button.addEventListener("click", () => {
    let userinput='';
    if (button.classList.contains('rock')) {
        userinput='rock';
    }
    else if (button.classList.contains('paper')) {
        userinput='paper';
    }
    else {
        userinput='scissor';
    }
   let compinput=generatecomputerinput();
   outcome=playgame(userinput,compinput);

    if (outcome ==='win') {
        win++;
    }
    else if (outcome === 'loss') {
        loss++;
    }
    else {
        draw++;
    }

    updatecontent (outcome,win,loss,draw);

  });
});

function generatecomputerinput () {
    let choices=['rock','paper','scissor'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    let genoutput=choices[randomIndex];

    const computerImage = document.querySelector(".outputimg");

    const rockPath=`./images/${genoutput}.jpg`; 
    const paperPath=`./images/${genoutput}.png`; 
    const scissorPath=`./images/${genoutput}.png`; 

    switch (genoutput) {
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

    return genoutput;

}

function playgame (userinput,compinput) {
    let outcome ='';
    if (userinput===compinput) {
        outcome='draw';
    }
    else {
        if (
             (userinput==='rock' && compinput=='scissor') ||
                (userinput==='paper' && compinput=='rock') ||
                    (userinput==='scissor' && compinput=='paper')) {
                        outcome='win';
                    }
                    else {
                        outcome='loss';
                    }

    }
    return outcome;
}


function updatecontent(outcome,win,loss,draw) {
    const aggregator = document.querySelector(".outputbox");
    const currentoutcome = document.querySelector(".currentoutcome");


    currentoutcome.textContent = `${outcome}!`;
    aggregator.textContent= `Wins: ${win}, Losses: ${loss}, Draws: ${draw}`;
}