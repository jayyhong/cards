import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component ({
  selector: 'page-players',
  template: 'players.html'
})

export class Players {
  constructor (public NavCtrl: NavController) {

  }
}