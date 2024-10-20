import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-game-info',
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.scss']
})
export class GameInfoComponent implements OnInit, OnChanges {
  cardAction = [
    { title: 'SL-Schadenstypen', description: 'Erkläre den anderen die Schalleitungsschadenstypen und wie diese sich im Tonaudiogramm unterscheiden.' },
    { title: 'Ton-Vertäubung', description: 'Erkläre den anderen wie man die End-Rauschpegel bei der Vertäubung berechnet.' },
    { title: 'Sprachvertäubung', description: 'Erkläre den anderen wie man bei der Sprachvertäubung vorgeht und die Rauschpegel errechnet.' },
    { title: 'Tympanogramme', description: 'Erkläre den anderen welche Tympanogramme sich bei diesen pathologischen Ursachen ergeben: Tubenverschluss und steife Trommelfellnarbe' },
    { title: 'Nervenphysiologie', description: 'Erkläre den anderen den Unterschied zwischen Rezeptorpotential und Aktionspotential' },
    { title: 'Carhart-Test', description: 'Erkläre den anderen den Carhart-Test (Was wird wie gemessen? Was bedeuten die Ergebnisse?)' },
    { title: 'Korrelationen', description: 'Erkläre den anderen wie man die Korrelation für die U-Schwelle berechnet.' },
    { title: 'Tympanometrie', description: 'Erkläre den anderen wie ein Tympanometer funktioniert und gehe dabei auf die Begriff IST- und SOLL-Wert ein.' },
    { title: 'Messverfahren', description: 'Erkläre den anderen den Unterschied zwischen objektiven und subjektiven Messverfahren und gebe auch je zwei Beispiele.' },
    { title: 'Korrelationen', description: 'Erkläre den anderen wie man die Korrelation für den Einsilberwert bei 65 dBI berechnet.' },
    { title: 'Pik-Joker', description: 'Alle trinken einen Schluck ihres Lieblingsgetränks!' },
    { title: 'Pik-Dame', description: 'Alle Frauen tanzen Salsa!' },
    { title: 'Pik-König', description: 'Alle Männer machen einen Brunftschrei' },

    // KREUZ
    { title: 'SL-Schadenstypen', description: 'Erkläre den anderen die Schalleitungsschadenstypen und wie diese sich im Tonaudiogramm unterscheiden.' },
    { title: 'Ton-Vertäubung', description: 'Erkläre den anderen wie man die End-Rauschpegel bei der Vertäubung berechnet.' },
    { title: 'Impedanzanpassung', description: 'Erkläre den anderen was man unter Impedanzanpassung des Mittelohres versteht.' },
    { title: 'Tympanogramme', description: 'Erkläre den anderen welche Tympanogramme sich bei diesen pathologischen Ursachen ergeben: schlaffe Narbe und Unterbrechung GKK' },
    { title: 'Nervenphysiologie', description: 'Erkläre den anderen den Unterschied zwischen Rezeptorpotential und Aktionspotential' },
    { title: 'Carhart-Test', description: 'Erkläre den anderen den Carhart-Test (Was wird wie gemessen? Was bedeuten die Ergebnisse?)' },
    { title: 'Isophonen', description: 'Erkläre den anderen was Isophone sind.' },
    { title: 'Tympanometrie', description: 'Erkläre den anderen wie ein Tympanometer funktioniert und gehe dabei auf die Begriff IST- und SOLL-Wert ein.' },
    { title: 'Messverfahren', description: 'Erkläre den anderen den Unterschied zwischen objektiven und subjektiven Messverfahren und gebe auch je zwei Beispiele.' },
    { title: 'Korrelationen', description: 'Erkläre den anderen wie man die Korrelation für den Einsilberwert bei 65 dBI berechnet.' },
    { title: 'Kreuz-Joker', description: 'Alle trinken einen Schluck ihres Lieblingsgetränks!' },
    { title: 'Kreuz-Dame', description: 'Alle Frauen machen einen Brunftschrei' },
    { title: 'Kreuz-König', description: 'Alle Männer tanzen Salsa' },

    //KARO
    { title: 'SL-Schadenstypen', description: 'Erkläre den anderen die Schalleitungsschadenstypen und wie diese sich im Tonaudiogramm unterscheiden.' },
    { title: 'Ton-Vertäubung', description: 'Erkläre den anderen wie man die End-Rauschpegel bei der Vertäubung berechnet.' },
    { title: 'GKK', description: 'Nenne die Bestandteile der Gehörknöchelchenkette in der richtigen Reihenfolge.' },
    { title: 'Tympanogramme', description: 'Erkläre den anderen welche Tympanogramme sich bei unterschiedlichen pathologischen Ursachen ergeben (Tubenverschluss, steife Trommelfellnarbe etc.) ' },
    { title: 'Nervenphysiologie', description: 'Erkläre den anderen den Unterschied zwischen Rezeptorpotential und Aktionspotential' },
    { title: 'Recruitment', description: 'Erkläre den anderen den Begriff Recruitment' },
    { title: 'Korrelationen', description: 'Erkläre den anderen wie man die Korrelation für die U-Schwelle berechnet.' },
    { title: 'Tympanometrie', description: 'Erkläre den anderen wie ein Tympanometer funktioniert und gehe dabei auf die Begriff IST- und SOLL-Wert ein.' },
    { title: 'Tonaudiogramm', description: 'Wofür steht das "o" im Tonaudiogramm?' },
    { title: 'Korrelationen 2', description: 'Erkläre den anderen wie man die Korrelation für den Einsilberwert bei 65 dBI berechnet.' },
    { title: 'Karo-Joker', description: 'Alle trinken einen Schluck ihres Lieblingsgetränks!' },
    { title: 'Karo-Dame', description: 'Alle Frauen trinken einen Schluck ihres Lieblingsgetränks' },
    { title: 'Karo-König', description: 'Alle Männer trinken einen Schluck ihres Lieblingsgetränks' },


    //HERZ
    { title: 'Ortstheorie', description: 'Erkläre den anderen die Ortstheorie.' },
    { title: 'Ton-Vertäubung', description: 'Erkläre den anderen wie man die End-Rauschpegel bei der Vertäubung berechnet.' },
    { title: 'Sprachvertäubung', description: 'Erkläre den anderen wie man bei der Sprachvertäubung vorgeht und die Rauschpegel errechnet.' },
    { title: 'IO-Physiologie', description: 'Erkläre den anderen die aktive Wanderwelle' },
    { title: 'Nervenphysiologie', description: 'Erkläre den anderen den Unterschied zwischen Rezeptorpotential und Aktionspotential' },
    { title: 'Sprache', description: 'Erkläre den anderen den Begriff Formant' },
    { title: 'Korrelationen', description: 'Erkläre den anderen wie man die Korrelation für die U-Schwelle berechnet.' },
    { title: 'Stapediusreflex', description: 'Erkläre den Stapediusreflex.' },
    { title: 'IO-Physiologie', description: 'Erkläre den anderen die passive Wanderwelle.' },
    { title: 'Tuningkurven', description: 'Erkläre den anderen was eine Tuningkurve ist und wie man diese zeichnet.' },
    { title: 'Herz-Joker', description: 'Alle trinken einen Schluck ihres Lieblingsgetränks!' },
    { title: 'Herz-Dame', description: 'Alle Frauen trinken einen Schluck ihres Lieblingsgetränks' },
    { title: 'Herz-König', description: 'Alle Männer trinken einen Schluck ihres Lieblingsgetränks' },
  ];

  title = '';
  description = '';
  @Input() card: string;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if (this.card) {
      //console.log(this.card);
      let cardChosen = this.card.split('_');
      let cardNumber = +cardChosen[1];
      let cardColor = cardChosen[0];

      if (cardColor == "ace") {
        this.title = this.cardAction[cardNumber + (0 * 13) - 1].title;
        this.description = this.cardAction[cardNumber + (0 * 13) - 1].description;
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




