'use strict';

// console.log(document.querySelector('.message'));
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!';
// console.log(document.querySelector('.message').textContent = 'Correct Number!');
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let score = 20;

const secretNumber = Math.trunc(Math.random()*20)+1;
console.log(secretNumber);

document.querySelector('.number').textContent = secretNumber; 


document.querySelector('.check').addEventListener('click', ()=>{
    const guess = +document.querySelector('.guess').value;
    console.log(guess, typeof guess);

    // when there is no input!
    if(!guess)
    {
        document.querySelector('.message').textContent = "⛔No Number!";
    }
    // when player wins!
    else if(guess === secretNumber)
    {
        document.querySelector('.message').textContent = "🎉` Correct Number!";
        document.querySelector('body').style.backgroundColor = "#3e8229";
        document.querySelector('.number').style.width = "30rem";
    }
    // when guess is too high!
    else if(guess > secretNumber)
    {
        if(score > 1)
        {
            document.querySelector('.message').textContent = "📈 To High!";
            score--;
            document.querySelector('.score').textContent = score;
        }
        else{
            document.querySelector('.message').textContent = "💀 You lost the game!";
            document.querySelector('.score').textContent = 0;
            document.querySelector('.message').style.color = "#c71111";
            // document.querySelector('body').style.backgroundColor = "#c71111";
        }
    }
    // when guess is to low!
    else if(guess < secretNumber)
    {
        if(score > 1)
        {
            document.querySelector('.message').textContent = "📉 To Low!";
            score--;
            document.querySelector('.score').textContent = score;
        }
        else{
            document.querySelector('.message').textContent = "💀 You lost the game!";
            document.querySelector('.score').textContent = 0;
            document.querySelector('.message').style.color = "#c71111";
            // document.querySelector('body').style.backgroundColor = "#c71111";
        }
    }
});

