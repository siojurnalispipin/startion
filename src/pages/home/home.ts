import { LamantoasPage } from './../lamantoas/lamantoas';
import { ActionsheetPage } from './../actionsheet/actionsheet';
import { AlertPage } from './../alert/alert';
import { AplikasisederhanaPage } from './../aplikasisederhana/aplikasisederhana';
import { PassingdataPage } from './../passingdata/passingdata';
import { FragmentPage } from './../fragment/fragment';
import { InputpagePage } from './../inputpage/inputpage';
import { SettingPage } from './../setting/setting';
import { NgModelPage } from './../ng-model/ng-model';
import { ListionicPage } from './../listionic/listionic';
import { ListavatarPage } from './../listavatar/listavatar';
import { AboutPage } from './../about/about';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ListuiPage } from '../listui/listui';
import { LoginPage } from '../login/login';
import { ArrayPage } from '../array/array';
import { ArrayObjectPage } from '../array-object/array-object';
import { ExportvariabelPage } from '../exportvariabel/exportvariabel';
import { ModalcontrollerPage } from '../modalcontroller/modalcontroller';
import { LamanLoadingPage } from '../laman-loading/laman-loading';
import { LamanPopoverPage } from '../laman-popover/laman-popover';
import { LamaninvinityscrollPage } from '../lamaninvinityscroll/lamaninvinityscroll';


/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  pilihan = "modul";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private viewCtrl: ViewController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  GotoAboutpage(){
    this.navCtrl.push(AboutPage);
  }
  GotoFragmentpage(){
    this.navCtrl.push(FragmentPage);
  }
  GotoInputPage(){
    this.navCtrl.push(InputpagePage);
  }
  GotoSettingpage(){
    this.navCtrl.push(SettingPage);
  }
  GotoNgmodelpage(){
    this.navCtrl.push(NgModelPage);
  }
  GotoListionicpage(){
    this.navCtrl.push(ListionicPage);
  }
  GotoListavatarpage(){
    this.navCtrl.push(ListavatarPage);
  }

  Gotolistuipage(){
    this.navCtrl.push(ListuiPage);
  }
  Gotologinpage(){
    this.navCtrl.push(LoginPage);
  }
  GotoPassingdata(){
    this.navCtrl.push(PassingdataPage);
  }

  GotoArraypage(){
    this.navCtrl.push(ArrayPage);
  }

  GotoArrayObjet(){
    this.navCtrl.push(ArrayObjectPage);
  }

  GotoExportVariabel(){
    this.navCtrl.push(ExportvariabelPage);
  }

  GotoAplikasisederhana(){
    this.navCtrl.push(AplikasisederhanaPage);
  }

  GotoAlertpage(){
    this.navCtrl.push(AlertPage);
  }

  GotoModalcontrollerpage(){
    this.navCtrl.push(ModalcontrollerPage);
  }

  DoCloseModal(){
    this.viewCtrl.dismiss();
  }

  Gotoactionsheet(){
    this.navCtrl.push(ActionsheetPage);
  }

  Gotolamantoas(){
    this.navCtrl.push(LamantoasPage);
  }

  gotoLamanloading(){
    this.navCtrl.push(LamanLoadingPage);
  }

  gotoLamanpopover(){
    this.navCtrl.push(LamanPopoverPage);
  }

  gotoLamaninvinityscroll(){
    this.navCtrl.push(LamaninvinityscrollPage);
  }
}
