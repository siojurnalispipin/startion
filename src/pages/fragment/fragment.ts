import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FragmentheaderPage } from './fragmentheader/fragmentheader';

/**
 * Generated class for the FragmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fragment',
  templateUrl: 'fragment.html',
})
export class FragmentPage {
  segment = "avatar";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FragmentPage');
  }

  GotoFragmentheaderpage(){
    this.navCtrl.push(FragmentheaderPage);
  }

}
