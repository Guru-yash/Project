let randomNumber=parseInt(Math.random()*100 +1);
// console.log(randomNumber);

const userGuess=document.querySelector('#guessfield');
// console.log(userGuess);

const submit=document.querySelector('#submit');

const prevguess=document.querySelector('.guesses');

const remguess=document.querySelector('.lastResult');

const loHi=document.querySelector('.lowOrhi');

let playGame=true;
let guessCount=0;
let prGuess=[];

if(playGame)
{
    submit.addEventListener('click',function(e){
        e.preventDefault();
        let userGuessValue=userGuess.value;
        Validity(userGuessValue);
    });
}
function Validity(userGuessValue){
    if(userGuessValue<1 || userGuessValue>100){
        alert("Please enter a number between 1 and 100");
    }
    else
    {
        check(userGuessValue);
    }
}
function check(userGuessValue)
{
    guessCount++;
    prGuess.push(userGuessValue);
    prevguess.textContent=`${prGuess.join(', ')}`;
    if(userGuessValue===randomNumber){
        remguess.textContent=`Congratulations! You guessed it in ${guessCount} guesses.`;
        endgame();
    }
    else
    {
        userGuess.value='';
        remguess.innerHTML= 10-guessCount;
        if(guessCount===10)
        {
            remguess.textContent=`Game Over! The number was ${randomNumber}.`;
            playGame=false;
            endgame();
        }
    }
}

function endgame()
{
    submit.disabled=true;
    userGuess.disabled=true;
    loHi.classList.add('button');
    loHi.textContent='Play Again';
    loHi.addEventListener('click',function(){
        startgame();
    });
}

function startgame()
{
    // userGuessValue.innerHTML='';
    userGuess.value='';
    guessCount=0;
    prGuess=[];
    prevguess.textContent='';
    remguess.textContent='10';
    submit.disabled=false;
    userGuess.disabled=false;


}
