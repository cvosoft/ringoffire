import { Component, OnInit } from '@angular/core';
import { Game } from 'src/models/game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})

export class GameComponent implements OnInit {
  pickCardAnimation = false;
  currentCard: string = "";

  game: Game = {
    players: [],
    stack: [],
    playedCards: [],
    currentPlayer: 0
  };

  constructor() {
  }

  ngOnInit(): void {
    this.newGame();
  }

  takeCard() {
    if (!this.pickCardAnimation) {

      const card = this.game.stack.pop();

      if (card === undefined) { }
      else {
        this.currentCard = card;
        this.pickCardAnimation = true;
        this.game.playedCards.push(this.currentCard);
      }

      setTimeout(() => {
        this.pickCardAnimation = false;
      }, 1500)
    }
  }

  newGame() {
    this.game = new Game;
    //console.log(this.game);
  }


}
