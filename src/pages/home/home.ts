import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Players } from '../players/players';

declare var swal: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  file: any;
  storage: any;
  deck: any;

  constructor(public navCtrl: NavController) {
    this.storage = {
      cardCount: 0,
      cardsCalled: [],
      cardsStorage: []
    }
  }

  ngOnInit() {
    this.populateStorage()
    this.nextCard()
  }

  resetDeck() {
    this.storage.cardCount = 0;
    this.storage.cardsCalled = [];
  }

  populateStorage() {
    const numbers = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace']
    const suits = ['clubs', 'spades', 'hearts', 'diamonds']
    for (let i = 0; i < numbers.length; i++) {
      for (let y = 0; y < suits.length; y++) {
        this.storage.cardsStorage.push(numbers[i] + '_of_' + suits[y] + '.png')
      }
    }
    console.log(this.storage.cardsStorage)
  }


  nextCard() {
    if (this.storage.cardsStorage.length === 0) {
    swal(
      'No more cards',
      "Shuffle deck?",
      'success'
    )
      this.populateStorage();
    }
    let randomCard = Math.floor(Math.random() * this.storage.cardsStorage.length);
    this.file = this.storage.cardsStorage.splice(randomCard, 1);
    console.log(this.storage.cardsStorage)
  }

  redirect() {
    this.navCtrl.push(Players);
  }

  test() {
    swal(
      'No more cards',
      "Shuffle deck?",
      'success'
    )
  }

}
