import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-info',
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.scss']
})
export class GameInfoComponent implements OnInit, OnChanges {
  // cardAction = [
  //   { title: 'Waterfall', description: 'Everyone has to start drinking at the same time. As soon as player 1 stops drinking, player 2 may stop drinking. Player 3 may stop as soon as player 2 stops drinking, and so on.' },
  //   { title: 'You', description: 'You decide who drinks' },
  //   { title: 'Me', description: 'Congrats! Drink a shot!' },
  //   { title: 'Category', description: 'Come up with a category (e.g. Colors). Each player must enumerate one item from the category.' },
  //   { title: 'Bust a jive', description: 'Player 1 makes a dance move. Player 2 repeats the dance move and adds a second one. ' },
  //   { title: 'Chicks', description: 'All girls drink.' },
  //   { title: 'Heaven', description: 'Put your hands up! The last player drinks!' },
  //   { title: 'Mate', description: 'Pick a mate. Your mate must always drink when you drink and the other way around.' },
  //   { title: 'Thumbmaster', description: '' },
  //   { title: 'Men', description: 'All men drink.' },
  //   { title: 'Quizmaster', description: '' },
  //   { title: 'Never have i ever...', description: 'Say something you never did. Everyone who did it has to drink.' },
  //   { title: 'Rule', description: 'Make a rule. Everyone needs to drink when he breaks the rule.' },
  // ];

  //PIK
  cardAction = [
    { title: 'SL-Schadenstypen', description: 'Erkläre den anderen die Schalleitungsschadenstypen und wie diese sich im Tonaudiogramm unterscheiden.' },
    { title: 'Ton-Vertäubung', description: 'Erkläre den anderen wie man die End-Rauschpegel bei der Vertäubung berechnet.' },
    { title: 'Sprachvertäubung', description: 'Erkläre den anderen wie man bei der Sprachvertäubung vorgeht und die Rauschpegel errechnet.' },
    { title: 'Tympanogramme', description: 'Erkläre den anderen welche Tympanogramme sich bei unterschiedlichen pathologischen Ursachen ergeben (Tubenverschluss, steife Trommelfellnarbe etc.) ' },
    { title: 'Nervenphysiologie', description: 'Erkläre den anderen den Unterschied zwischen Rezeptorpotential und Aktionspotential' },
    { title: 'Carhart-Test', description: 'Erkläre den anderen den Carhart-Test (Was wird wie gemessen? Was bedeuten die Ergebnisse?)' },
    { title: 'Korrelationen', description: 'Erkläre den anderen wie man die Korrelation für die U-Schwelle berechnet.' },
    { title: 'Tympanometrie', description: 'Erkläre den anderen wie ein Tympanometer funktioniert und gehe dabei auf die Begriff IST- und SOLL-Wert ein.' },
    { title: 'Messverfahren', description: 'Erkläre den anderen den Unterschied zwischen objektiven und subjektiven Messverfahren und gebe auch je zwei Beispiele.' },
    { title: 'Korrelationen 2', description: 'Erkläre den anderen wie man die Korrelation für den Einsilberwert bei 65 dBI berechnet.' },
    { title: 'Pik-Joker', description: 'Alle trinken einen Apfelsaft!' },
    { title: 'Pik-Dame', description: 'Alle Frauen trinken eine Mango-Schorle!' },
    { title: 'Pik-König', description: 'Alle Männer trinken ein Glas Milch' },

    // KREUZ
    { title: 'SL-Schadenstypen', description: 'Erkläre den anderen die Schalleitungsschadenstypen und wie diese sich im Tonaudiogramm unterscheiden.' },
    { title: 'Ton-Vertäubung', description: 'Erkläre den anderen wie man die End-Rauschpegel bei der Vertäubung berechnet.' },
    { title: 'Sprachvertäubung', description: 'Erkläre den anderen wie man bei der Sprachvertäubung vorgeht und die Rauschpegel errechnet.' },
    { title: 'Tympanogramme', description: 'Erkläre den anderen welche Tympanogramme sich bei unterschiedlichen pathologischen Ursachen ergeben (Tubenverschluss, steife Trommelfellnarbe etc.) ' },
    { title: 'Nervenphysiologie', description: 'Erkläre den anderen den Unterschied zwischen Rezeptorpotential und Aktionspotential' },
    { title: 'Carhart-Test', description: 'Erkläre den anderen den Carhart-Test (Was wird wie gemessen? Was bedeuten die Ergebnisse?)' },
    { title: 'Korrelationen', description: 'Erkläre den anderen wie man die Korrelation für die U-Schwelle berechnet.' },
    { title: 'Tympanometrie', description: 'Erkläre den anderen wie ein Tympanometer funktioniert und gehe dabei auf die Begriff IST- und SOLL-Wert ein.' },
    { title: 'Messverfahren', description: 'Erkläre den anderen den Unterschied zwischen objektiven und subjektiven Messverfahren und gebe auch je zwei Beispiele.' },
    { title: 'Korrelationen 2', description: 'Erkläre den anderen wie man die Korrelation für den Einsilberwert bei 65 dBI berechnet.' },
    { title: 'Kreuz-Joker', description: 'Alle trinken einen Apfelsaft!' },
    { title: 'Kreuz-Dame', description: 'Alle Frauen trinken eine Mango-Schorle!' },
    { title: 'Kreuz-König', description: 'Alle Männer trinken ein Glas Milch' },

    //KARO
    { title: 'SL-Schadenstypen', description: 'Erkläre den anderen die Schalleitungsschadenstypen und wie diese sich im Tonaudiogramm unterscheiden.' },
    { title: 'Ton-Vertäubung', description: 'Erkläre den anderen wie man die End-Rauschpegel bei der Vertäubung berechnet.' },
    { title: 'Sprachvertäubung', description: 'Erkläre den anderen wie man bei der Sprachvertäubung vorgeht und die Rauschpegel errechnet.' },
    { title: 'Tympanogramme', description: 'Erkläre den anderen welche Tympanogramme sich bei unterschiedlichen pathologischen Ursachen ergeben (Tubenverschluss, steife Trommelfellnarbe etc.) ' },
    { title: 'Nervenphysiologie', description: 'Erkläre den anderen den Unterschied zwischen Rezeptorpotential und Aktionspotential' },
    { title: 'Carhart-Test', description: 'Erkläre den anderen den Carhart-Test (Was wird wie gemessen? Was bedeuten die Ergebnisse?)' },
    { title: 'Korrelationen', description: 'Erkläre den anderen wie man die Korrelation für die U-Schwelle berechnet.' },
    { title: 'Tympanometrie', description: 'Erkläre den anderen wie ein Tympanometer funktioniert und gehe dabei auf die Begriff IST- und SOLL-Wert ein.' },
    { title: 'Messverfahren', description: 'Erkläre den anderen den Unterschied zwischen objektiven und subjektiven Messverfahren und gebe auch je zwei Beispiele.' },
    { title: 'Korrelationen 2', description: 'Erkläre den anderen wie man die Korrelation für den Einsilberwert bei 65 dBI berechnet.' },
    { title: 'Karo-Joker', description: 'Alle trinken einen Apfelsaft!' },
    { title: 'Karo-Dame', description: 'Alle Frauen trinken eine Mango-Schorle!' },
    { title: 'Karo König', description: 'Alle Männer trinken ein Glas Milch' },


    //HERZ
    { title: 'SL-Schadenstypen', description: 'Erkläre den anderen die Schalleitungsschadenstypen und wie diese sich im Tonaudiogramm unterscheiden.' },
    { title: 'Ton-Vertäubung', description: 'Erkläre den anderen wie man die End-Rauschpegel bei der Vertäubung berechnet.' },
    { title: 'Sprachvertäubung', description: 'Erkläre den anderen wie man bei der Sprachvertäubung vorgeht und die Rauschpegel errechnet.' },
    { title: 'Tympanogramme', description: 'Erkläre den anderen welche Tympanogramme sich bei unterschiedlichen pathologischen Ursachen ergeben (Tubenverschluss, steife Trommelfellnarbe etc.) ' },
    { title: 'Nervenphysiologie', description: 'Erkläre den anderen den Unterschied zwischen Rezeptorpotential und Aktionspotential' },
    { title: 'Carhart-Test', description: 'Erkläre den anderen den Carhart-Test (Was wird wie gemessen? Was bedeuten die Ergebnisse?)' },
    { title: 'Korrelationen', description: 'Erkläre den anderen wie man die Korrelation für die U-Schwelle berechnet.' },
    { title: 'Tympanometrie', description: 'Erkläre den anderen wie ein Tympanometer funktioniert und gehe dabei auf die Begriff IST- und SOLL-Wert ein.' },
    { title: 'Messverfahren', description: 'Erkläre den anderen den Unterschied zwischen objektiven und subjektiven Messverfahren und gebe auch je zwei Beispiele.' },
    { title: 'Korrelationen 2', description: 'Erkläre den anderen wie man die Korrelation für den Einsilberwert bei 65 dBI berechnet.' },
    { title: 'Herz-Joker', description: 'Alle trinken einen Apfelsaft!' },
    { title: 'Herz-Dame', description: 'Alle Frauen trinken eine Mango-Schorle!' },
    { title: 'Herz-König', description: 'Alle Männer trinken ein Glas Milch' },
  ];


  title: string = '';
  description: string = '';
  @Input() card: string = '';

  constructor() { };

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if (this.card) {
      //console.log(this.card);
      let cardChosen = this.card.split('_');
      let cardNumber = +cardChosen[1];
      let cardColor = cardChosen[0];

      if (cardColor == "ace") {
        this.title = this.cardAction[cardNumber - 1].title;
        this.description = this.cardAction[cardNumber - 1].description;
      } else if (cardColor == "clubs") {
        this.title = this.cardAction[cardNumber + (1 * 13) - 1].title;
        this.description = this.cardAction[cardNumber + (1 * 13) - 1].description;
      } else if (cardColor == "diamonds") {
        this.title = this.cardAction[cardNumber + (2 * 13) - 1].title;
        this.description = this.cardAction[cardNumber + (2 * 13) - 1].description;
      } else if (cardColor == "hearts") {
        this.title = this.cardAction[cardNumber + (3 * 13) - 1].title;
        this.description = this.cardAction[cardNumber + (3 * 13) - 1].description;
      }
    }
  }

}
