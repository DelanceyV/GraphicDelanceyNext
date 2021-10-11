// document selector doesn't work with react and state changes so ...

import React from 'react';

let numberOfCats = 5;
const theLeftSide = document.querySelector('#leftSide');
const theRightSide = document.querySelector('#rightSide');
const lefty = document.querySelector('#lefty');

export function generateCats() {

    for (let i=0; i < numberOfCats; i++) {
        cat = document.createElement('img');
        cat.src = 'pusheen-cat-icegif.gif';

        let randomTop = Math.floor(Math.random()*400) + 1;
        let randomLeft = Math.floor(Math.random()*400) + 1;
        let numRounds = 0;

        cat.style.top = randomTop + 'px';
        cat.style.left = randomLeft + 'px';

        theLeftSide.appendChild(cat);

        const leftSideImages = theLeftSide.cloneNode(true);

        leftSideImages.removeChild(leftSideImages.lastChild);
        theRightSide.appendChild(leftSideImages);
        numRounds += 1;

    }

    theLeftSide.lastChild.addEventListener('click', nextLevel);
    theLeftSide.lastChild.addEventListener('click', playMeow);

    theLeftSide.addEventListener('click', gameOver);
    theLeftSide.addEventListener('click', playAngryMeow);
    
}

export function nextLevel() {
    event.stopPropagation();

    while (theLeftSide.firstChild) {
        theLeftSide.removeChild(theLeftSide.firstChild)
    }

    while (theRightSide.firstChild) {
        theRightSide.removeChild(theRightSide.firstChild)
    }

    numberOfCats += 5;
    generateCats();
}

export function gameOver() {
  theLeftSide.removeEventListener('click', gameOver);
  theLeftSide.lastChild.removeEventListener('click', nextLevel);
  
  return(
    <>
      <h2 id="gameOver1">Game Over!</h2>
      <h2 id="gameOver2">Game Over!</h2>

      <button type="button" onclick={restartGame}  id="restart">Play Again!</button>
    </>
  )

    // document.getElementById('gameOver1').style.display = "block";
    // document.getElementById('gameOver2').style.display = "block";
    // document.getElementById('restart').style.display = "block";

    // theLeftSide.removeEventListener('click', gameOver);
    // theLeftSide.lastChild.removeEventListener('click', nextLevel);
}

export function off() {
    getElementById('gameOver1').style.display = "none";
    document.getElementById('gameOver2').style.display = "none";
    document.getElementById('restart').style.display = "none";
}

export function restartGame() {
    // document.getElementById('gameOver1').style.display = "none";
    // document.getElementById('gameOver2').style.display = "none";
    // document.getElementById('restart').style.display = "none";
    event.stopPropagation();

    while (theLeftSide.firstChild) {
        theLeftSide.removeChild(theLeftSide.firstChild)
    }

    while (theRightSide.firstChild) {
        theRightSide.removeChild(theRightSide.firstChild)
    }

    numberOfCats = 5;
    generateCats();
}

export function playMeow() {
    var meow = document.getElementById("meow");
    meow.play();
}

export function playAngryMeow() {
    var angryMeow = document.getElementById("angryMeow");
    angryMeow.play();
}