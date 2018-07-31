/*
 * Create a list that holds all of your cards
 */


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

let a=0, openCard=[], cardChild=[], move=0, t, newa;
let element = document.getElementsByClassName('card');
for (let i=0; i<element.length; i++){
element[i].addEventListener("click", onClick);
};

function onClick(){
  movesCount();
  if(a<2){
this.classList.add('open','show');
openCard[a]=this;
cardChild[a]=this.querySelector('i').className;
a++;
}

if(a===2){
  if(cardChild[0]===cardChild[1]){
      matched();
      }
  else {
        shakeUnmatched();
        setTimeout( unmatched, 1000);
  }
  }
};

function matched(){
  openCard[0].classList.add('match');
  openCard[1].classList.add('match');

  openCard[0].classList.remove('open','show');
  openCard[1].classList.remove('open','show');
  a=0;
};

function shakeUnmatched(){
  openCard[0].classList.add('shake');
  openCard[1].classList.add('shake');
}

function unmatched(){
  openCard[0].classList.remove('open','show','shake');
  openCard[1].classList.remove('open','show','shake');
  a=0;
};

function movesCount(){
move++;
if (move===1){startTimer();}
showStars();
if(move%2==0){
document.querySelector(".moves").innerHTML = move/2;
}
};

function showStars(){
  let visible = document.querySelectorAll('.fa-star');
  if(move>25){
      visible[2].style.visibility="collapse";
}
if(move>30){
    visible[1].style.visibility="collapse";
}
};

function startTimer(){
  let minute=0, second=1;
t = setInterval(function(){
        document.querySelector('.timer').innerHTML = minute+":"+second;
        second++;
        if(second == 60){
            minute++;
            second=0;
        }
    },1000);
}

document.querySelector('.restart').addEventListener("click", start);
function start(){
newa = shuffle(element);
move=-1;
movesCount();
clearInterval(t);
document.querySelector('.timer').innerHTML=0+":"+0;
let visible = document.querySelectorAll('.fa-star');
    visible[2].style.visibility="visible";
    visible[1].style.visibility="visible";
  for (let j=0; j<element.length; j++){
    element[j].classList.remove('open','show','match');
  };
};
/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
