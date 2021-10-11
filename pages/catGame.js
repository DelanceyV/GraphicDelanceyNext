import React, { Component } from "react";
import { off, generateCats, restartGame } from '../components/matching-game';

class Game extends Component () {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
      <head>
          <title>Not Enough Cats!</title>
          <link rel="stylesheet" href="/game/matching-game.css"/>
      </head>

      <body onload={off}>
          <h1>Not Enough Cats!</h1>

          <button type="button" onclick={generateCats}>Start Meow!</button>

          <p>Click the extra cat on the left!</p>

          <div id="lefty"></div>
          <div id="leftSide"></div>

          <div id="rightSide"></div>

          {/* 
          Moved to component/matching-game.js

          <h2 id="gameOver1">Game Over!</h2>
          <h2 id="gameOver2">Game Over!</h2>

          <button type="button" onclick={restartGame}  id="restart">Play Again!</button> */}

          <audio id="meow" src="meow.mp3"></audio>
          <audio id="angryMeow" src="angryMeow.mp3"></audio>

          <script src="/game/matching-game.js"></script>
      </body> 
      </>
    )}
}

export default Game;