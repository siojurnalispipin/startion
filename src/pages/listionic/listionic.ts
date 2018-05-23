import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//pages
import { BasiclistPage } from './basiclist/basiclist';
import { NolineslistPage } from './nolineslist/nolineslist';
import { InsetlistPage } from './insetlist/insetlist';
import { ListdevidersPage } from './listdeviders/listdeviders';
import { IconlistPage } from './iconlist/iconlist';


@IonicPage()
@Component({
  selector: 'page-listionic',
  templateUrl: 'listionic.html',
})
export class ListionicPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListionicPage');
  }

  Gotobasiclist(){
    this.navCtrl.push(BasiclistPage)
  }

  GotoNolines(){
    this.navCtrl.push(NolineslistPage)
  }

  Gotoinset(){
    this.navCtrl.push(InsetlistPage);
  }

  Gotodevider(){
    this.navCtrl.push(ListdevidersPage);
  }

  Gotoiconlist(){
    this.navCtrl.push(IconlistPage)
  }

}
