var scores,activeScore,activePlayer,dice;
scores = [0,0];
activeScore = 0;
activePlayer = 1;

document.getElementById('score-0').textContent = 0;
document.getElementById('score-1').textContent = 0;
document.getElementById('current-0').textContent = 0;
document.getElementById('current-0').textContent = 0;
document.querySelector('.dice').style.display = 'none';
//document.querySelector('.btn-roll').addEventListener(<event>,<function>)
//below is anonymous function that is a function callback
//  (function called by function event listener)
document.querySelector('.btn-roll').addEventListener('click',function (){
    dice = Math.floor((Math.random()*6)+1);
    // prevents multiple querySelector for selecting same element
    var diceDom = document.querySelector('.dice');
    diceDom.style.display = 'block';
    diceDom.src = 'img/dice-'+dice+'.png';
})