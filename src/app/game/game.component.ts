import { Component, OnInit } from '@angular/core';
import { Game } from 'src/models/game';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';

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

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.newGame();
  }

  takeCard() {
    //console.log(this.game.players.length);
    if (!this.pickCardAnimation && this.game.players.length > 0) {
      const card = this.game.stack.pop();
      if (card === undefined) { }
      else {
        this.currentCard = card;
        this.pickCardAnimation = true;
      }

      this.game.currentPlayer++;
      this.game.currentPlayer = this.game.currentPlayer % this.game.players.length;

      setTimeout(() => {
        this.game.playedCards.push(this.currentCard);
        this.pickCardAnimation = false;
      }, 1000)
    }
  }

  newGame() {
    this.game = new Game;
    //console.log(this.game);
  }





  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent);

    dialogRef.afterClosed().subscribe(name => {
      if (name && name.length > 0) {
        this.game.players.push(name);
      }
    });
  }

}