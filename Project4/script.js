let randomNumber= parseInt(Math.random() * 100 +1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessFeild');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');

const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });
}

function validateGuess(guess){
    // if number given by user is valid or not it should be between 1 to 100
    if(isNaN(guess)){
        alert("please enter a valid number");
    }
    else if(guess<1){
        alert("please enter a number greater then 1 ");
    }
   else if(guess>100){
        alert("please enter a number less than 100");
    }
    else{
        prevGuess.push(guess);
        if(numGuess === 11){
            displayGuess(guess);
            displayMessage(`Game Over. Random number was ${randomNumber}`);
            endGame();
        }
        else{
           displayGuess(guess);
           checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    // it will check the val given by user wether it is equall to guess or less or more 

    if(guess===randomNumber){
        displayMessage(`you guessed it right `);
        endGame();
    }
    else if(guess<randomNumber){
        displayMessage(`you guessed number is TOO low `);
    }
    else if(guess>randomNumber){
        displayMessage(`you guessed number is TOO high `);
    }
}

function displayGuess(guess){
    // it will store your guesses and clean the input feild for every guess and also it will decrease the count of the guess remaining 
    userInput.value ='';
    guessSlot.innerHTML += `${guess} ,`;
    numGuess++;
    remaining.innerHTML = `${11-numGuess}`
}

function displayMessage(message){
 // it will print the massage , is it low or high
 lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
 // end the game 
 userInput.value = "";
 userInput.setAttribute('disabled','')
 p.classList.add('button');
 p.innerHTML=`<h2 id="newGame"> start new Game</h2>`;
 startOver.appendChild(p)
 playGame = false;
 newGame();
}

function newGame(){
    // start a new game
   const newGameButton = document.querySelector('#newGame');
   newGameButton.addEventListener('click', function(e){
    randomNumber = parseInt(Math.random()*100 +1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11-numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
   });
}
