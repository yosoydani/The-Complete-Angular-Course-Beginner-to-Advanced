import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-case',
  templateUrl: './title-case.component.html',
  styleUrls: ['./title-case.component.css']
})
export class TitleCaseComponent implements OnInit {

  textToChange: string;
  changedText: string;
  sentence;

  private getSentence($event) {
    this.textToChange = $event.target.value;
    this.changedText = this.toTitleCase(this.textToChange);
    document.getElementById('titleCase').innerHTML = this.changedText;
  }

  private toTitleCase(str: string) {
    const wordsArray: string[] = str.split(' ');
    wordsArray[0] = this.wordTotile(wordsArray[0]);
    for (let i = 1; i < wordsArray.length; i++ ) {
      if (!this.isPreposition(wordsArray[i].toLocaleLowerCase())) {
        wordsArray[i] = this.wordTotile(wordsArray[i]);
      }
    }
    return wordsArray.join(' ');
  }


  private isPreposition(word: string): boolean {
    let isPreposition = false;
    // tslint:disable-next-line:max-line-length
    const listaPreposiciones: string[] = ['the', 'of', 'aboard', 'about', 'above', 'across', 'after', 'against', 'along', 'amid', 'among', 'anti', 'around', 'as', 'at', 'before', 'behind', 'below', 'beneath', 'beside', 'besides', 'between', 'beyond', 'but', 'by', 'concerning', 'considering', 'despite', 'down', 'during', 'except', 'excepting', 'excluding', 'following', 'for', 'from', 'in', 'inside', 'into', 'like', 'minus', 'near', 'of', 'off', 'on', 'onto', 'opposite', 'outside', 'over', 'past', 'per', 'plus', 'regarding', 'round', 'save', 'since', 'than', 'through', 'to', 'toward', 'towards', 'under', 'underneath', 'unlike', 'until', 'up', 'upon', 'versus', 'via', 'with', 'within', 'without'];
    for (let i = 0; i < listaPreposiciones.length; i++) {
      if (word === listaPreposiciones[i]) {
        isPreposition = true;
      }
    }
    return isPreposition;
  }

  private wordTotile(word: string): string {
    const letraInicial: string = word.slice(0, 1);
    const resto: string = word.slice(1);
    return letraInicial.toUpperCase() + resto.toLowerCase();
  }

  constructor() { }

  ngOnInit() {
  }

}
