import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DaftarmantanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-daftarmantan',
  templateUrl: 'daftarmantan.html',
})
export class DaftarmantanPage {
  namas: any[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.namas = this.navParams.data.listnama;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DaftarmantanPage');
  }

  Dohapusmantan(index){
    this.namas.splice(index, 1);
  }

  Goback(){
    this.navCtrl.pop();
  }
}
