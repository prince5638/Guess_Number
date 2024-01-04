'use strict';

// Just for learning!
// console.log(document.querySelector('.message'));
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!';
// console.log(document.querySelector('.message').textContent = 'Correct Number!');
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let score = 20;
let highScore = 0;

// function for writing different message!
const displayMessage = function (message)
{
    document.querySelector('.message').textContent = message;
}

let secretNumber = Math.trunc(Math.random()*20)+1;
// console.log(secretNumber);

// Game Logic!
document.querySelector('.check').addEventListener('click', ()=>{
    const guess = +document.querySelector('.guess').value;
    console.log(guess, typeof guess);
    
    // when there is no input!
    if(!guess)
    {
        displayMessage("⛔No Number!");
    }
    // when player wins!
    else if(guess === secretNumber)
    {
        displayMessage("🎉 Correct Number!");
        document.querySelector('.number').style.width = "30rem";
        document.querySelector('.number').textContent = secretNumber; 
        document.querySelector('body').style.backgroundColor = "#3e8229";

        if(score > highScore)
        {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore; 
        }
    }
    // When guass is wrong!
    else if(guess !== secretNumber)
    {
        if(score > 1)
        {
            displayMessage(guess > secretNumber ? "📈 To High!" : "📉 To Low!");
            score--;
            document.querySelector('.score').textContent = score;
        }
        else{
            displayMessage("💀 You lost the game!");
            document.querySelector('.score').textContent = 0;
            document.querySelector('.message').style.color = "#c71111";
            // document.querySelector('body').style.backgroundColor = "#c71111";
        }
    }
    // // when guess is too high!
    // else if(guess > secretNumber)
    // {
    //     if(score > 1)
    //     {
    //         document.querySelector('.message').textContent = "📈 To High!";
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     }
    //     else{
    //         document.querySelector('.message').textContent = "💀 You lost the game!";
    //         document.querySelector('.score').textContent = 0;
    //         document.querySelector('.message').style.color = "#c71111";
    //         // document.querySelector('body').style.backgroundColor = "#c71111";
    //     }
    // }
    // // when guess is to low!
    // else if(guess < secretNumber)
    // {
    //     if(score > 1)
    //     {
    //         document.querySelector('.message').textContent = "📉 To Low!";
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     }
    //     else{
    //         document.querySelector('.message').textContent = "💀 You lost the game!";
    //         document.querySelector('.score').textContent = 0;
    //         document.querySelector('.message').style.color = "#c71111";
    //         // document.querySelector('body').style.backgroundColor = "#c71111";
    //     }
    // }
});

// Again button funciton code!
document.querySelector('.again').addEventListener('click', ()=>{
    score = 20;
    // reseting secretNumber
    secretNumber = Math.trunc(Math.random()*20)+1;
    document.querySelector('.number').textContent = "?";

    // reseting score box
    document.querySelector('.score').textContent = score;

    // reseting message
    displayMessage("Start guessing...");

    // reseting input box
    document.querySelector('.guess').value = '';

    // reseting style
    document.querySelector('body').style.backgroundColor = "#222";
    document.querySelector('.message').style.color = "white";
    document.querySelector('.number').style.width = "15rem";
});