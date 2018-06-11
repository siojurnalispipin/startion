import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DaftarmahasiswaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-daftarmahasiswa',
  templateUrl: 'daftarmahasiswa.html',
})
export class DaftarmahasiswaPage {
  film: any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.film = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DaftarmahasiswaPage');
  }

}
