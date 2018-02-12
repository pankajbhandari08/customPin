import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController
    , public modelCtrl: ModalController) {

  }

  Pin: String ="";
  ShowPin: Boolean = false;
  
  eventCapture(event) {
    this.ShowPin = false;
    this.Pin=event;
  }

  showPin() {
    this.ShowPin = !this.ShowPin;
  }
}
