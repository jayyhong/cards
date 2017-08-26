import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var swal: any;

@Component({
  selector: 'page-players',
  templateUrl: '../players/players.html'
})

export class Players {
  storage: any;
  file: any;
  users: any;
  constructor(public navCtrl: NavController) {
    this.storage = {
      cardsStorage: []
    }
    this.users = [
      {name: "Jay", cards:[

      ]},
      {name: "Sho", cards:[

      ]}
    ]
  }

  populateUserCards() {
    for (let i = 0; i < this.users.length; i++) {
      this.users[i].cards.length = 0;
    }
    for (let i = 0; i < this.users.length; i++) {
      while (this.users[i].cards.length < 5) {
        this.users[i].cards.push(this.storage.cardsStorage.splice(Math.floor(Math.random() * this.storage.cardsStorage.length), 1)[0])
      }
    }
  }

  ngOnInit() {
    this.populateStorage();
    this.populateUserCards();
    this.nextCard();
    console.log(this.users[0].cards)
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
  }


}