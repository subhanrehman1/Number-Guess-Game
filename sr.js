'use strict';
let secretNumber=Math.trunc((Math.random()*20)+1);
let score=document.querySelector('.score').textContent;
console.log(secretNumber);
document.querySelector('.check').addEventListener('click',
function()
{
    let guess=document.querySelector('.guess').value;
    if(guess==secretNumber)
    {
        document.querySelector('.message').textContent='You won!';
        document.querySelector('body').style.backgroundColor="green";
        document.querySelector('.number').textContent=secretNumber;
        document.querySelector('.number').style.width='30rem';
        let highscore=document.querySelector('.highscore').textContent;
        if(highscore<score)
        document.querySelector('.highscore').textContent=score;
    }
    
    else if(guess!=secretNumber)
    {
        if(score>1)
        {
            document.querySelector('.message').textContent=guess>secretNumber?'Too high!':'Too Low';
            score--;
            document.querySelector('.score').textContent=score;
        }
        else
        {
            document.querySelector('.message').textContent='You lost the game';
            document.querySelector('.score').textContent=0;
        }
    }
})
document.querySelector('.again').addEventListener('click',
function()
{
    document.querySelector('.score').textContent=20;
    secretNumber=Math.trunc((Math.random()*20)+1);
    document.querySelector('.message').textContent='Start guessing...';
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').textContent='?';
    document.querySelector('.number').style.width='15rem';
    document.querySelector('.guess').value='';
})
