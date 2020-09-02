var scores,activeScore,activePlayer,gameActive;
init()
//document.querySelector('.btn-roll').addEventListener(<event>,<function>)
//below is anonymous function that is a function callback
//  (function called by function event listener)
document.querySelector('.btn-new').addEventListener('click',init);

function init(){
    //initialize the variables
    scores = [0,0];
    activeScore = 0;
    activePlayer = 0;
    gameActive = true;
    //reset name to player names
    document.getElementById('name-0').textContent='Player 1';
    document.getElementById('name-1').textContent='Player 2';
    //reset scores
    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    //hide the dice 
    document.querySelector('.dice').style.display = 'none';
    //remove the winner class from the winner
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    //remove first to prevent multiple active classes from being applied 
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}

document.querySelector('.btn-roll').addEventListener('click',function (){
    //generating random number for the dice
    if (gameActive){
        var dice = Math.floor((Math.random()*6)+1);
        // prevents multiple querySelector for selecting same element
        //changing the image displayed in the dice
        var diceDom = document.querySelector('.dice');
        diceDom.style.display = 'block';
        diceDom.src = 'img/dice-'+dice+'.png';
        //changing score if the player rolls
        if (dice !== 1) {
            // adding the rolled number to displayed score 
            activeScore += dice;
            //displaying the active score in the browser
            document.getElementById('current-'+activePlayer).textContent = activeScore;
        } else {
            //reset score if the player 
            playerChange()
        }
    }
});
document.querySelector('.btn-hold').addEventListener('click',function (){
    //add the active score to active player score 
    if (gameActive){
        scores[activePlayer]+=activeScore;
        //visually display the score to the global score
        document.getElementById('score-'+activePlayer).textContent = scores[activePlayer];
        //reset for other player turn
        if (scores[activePlayer]>=100){
            document.getElementById('name-'+activePlayer).textContent='Winner';
            document.querySelector('.player-'+ activePlayer +'-panel').classList.add('winner');
            document.querySelector('.player-'+ activePlayer +'-panel').classList.remove('active');
            gameActive = false
        }else{
            playerChange();
        }
    }
});

function playerChange(){
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    activeScore = 0;
    //changing active player
    activePlayer = (activePlayer+1) % 2;
    // visual change for active player other classList function include add , remove 
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');  
    //removing dice from being displayed
    document.querySelector('.dice').style.display ='none';  
}