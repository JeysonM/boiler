import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { FileChooser, MediaPlugin } from 'ionic-native';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

}
