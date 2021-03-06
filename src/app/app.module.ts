import { LamanhttpPage } from './../pages/lamanhttp/lamanhttp';

import { GridPage } from './../pages/grid/grid';
import { GesturePage } from './../pages/gesture/gesture';
import { FabsPage } from './../pages/fabs/fabs';
import { AppsTugasHarianPage } from "./../pages/apps-tugas-harian/apps-tugas-harian";
import { CheckboxPage } from "./../pages/checkbox/checkbox";
import { CardsPage } from "./../pages/cards/cards";
import { LamaninvinityscrollPage } from "./../pages/lamaninvinityscroll/lamaninvinityscroll";
import { OptbackgroundPage } from "./../pages/optbackground/optbackground";
import {
  LamanPopoverPage,
  MyPopover
} from "./../pages/laman-popover/laman-popover";
import { LamantoasPage } from "./../pages/lamantoas/lamantoas";
import { EdithobiPage } from "./../pages/aplikasisederhana/aplikasihobi/edithobi/edithobi";
import { ActionsheetPage } from "./../pages/actionsheet/actionsheet";
import { ModalcontrollerPage } from "./../pages/modalcontroller/modalcontroller";
import { AlertPage } from "./../pages/alert/alert";
import { EditdatamhsPage } from "./../pages/aplikasisederhana/appdatamhs/editdatamhs/editdatamhs";
import { TambahdatamhsPage } from "./../pages/aplikasisederhana/appdatamhs/tambahdatamhs/tambahdatamhs";
import { AppdatamhsPage } from "./../pages/aplikasisederhana/appdatamhs/appdatamhs";
import { AplikasisederhanaPage } from "./../pages/aplikasisederhana/aplikasisederhana";
import { ExportvariabelPage } from "./../pages/exportvariabel/exportvariabel";
import { DaftarmahasiswaPage } from "./../pages/daftarmahasiswa/daftarmahasiswa";
import { ArrayObjectPage } from "./../pages/array-object/array-object";
import { ArrayPage } from "./../pages/array/array";
import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";

import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { ListPage } from "../pages/list/list";
import { AboutPage } from "./../pages/about/about";
import { SettingPage } from "./../pages/setting/setting";
import { ListuiPage } from "./../pages/listui/listui";
import { ListavatarPage } from "./../pages/listavatar/listavatar";
import { ListionicPage } from "./../pages/listionic/listionic";
import { BasiclistPage } from "./../pages/listionic/basiclist/basiclist";
import { NolineslistPage } from "./../pages/listionic/nolineslist/nolineslist";
import { InsetlistPage } from "./../pages/listionic/insetlist/insetlist";
import { ListdevidersPage } from "./../pages/listionic/listdeviders/listdeviders";
import { IconlistPage } from "./../pages/listionic/iconlist/iconlist";
import { AvatarlistPage } from "./../pages/listionic/avatarlist/avatarlist";
import { SlidinglistPage } from "./../pages/listionic/slidinglist/slidinglist";
import { ThumbnaillistPage } from "./../pages/listionic/thumbnaillist/thumbnaillist";
import { InputpagePage } from "./../pages/inputpage/inputpage";
import { NgModelPage } from "./../pages/ng-model/ng-model";
import { SmsPage } from "./../pages/ng-model/sms/sms";
import { TodoPage } from "./../pages/ng-model/todo/todo";
import { FragmentPage } from "./../pages/fragment/fragment";
import { FragmentheaderPage } from "./../pages/fragment/fragmentheader/fragmentheader";
import { LoginPage } from "../pages/login/login";
import { PassingdataPage } from "../pages/passingdata/passingdata";
import { DaftarmantanPage } from "../pages/daftarmantan/daftarmantan";

import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { MoviepagePage } from "../pages/moviepage/moviepage";
import { MenumakananPage } from "../pages/menumakanan/menumakanan";
import { InputnilaiPage } from "../pages/inputnilai/inputnilai";
import { AplikasihobiPage } from "../pages/aplikasisederhana/aplikasihobi/aplikasihobi";
import { LamanLoadingPage } from "../pages/laman-loading/laman-loading";
import { BadgesPage } from "../pages/badges/badges";
import { MoreTugasPage } from "../pages/more-tugas/more-tugas";
import { DateTimePage } from '../pages/date-time/date-time';

//module 8
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AboutPage,
    SettingPage,
    ListuiPage,
    ListavatarPage,
    ListionicPage,
    BasiclistPage,
    NolineslistPage,
    InsetlistPage,
    ListdevidersPage,
    IconlistPage,
    AvatarlistPage,
    SlidinglistPage,
    ThumbnaillistPage,
    InputpagePage,
    NgModelPage,
    SmsPage,
    TodoPage,
    FragmentPage,
    FragmentheaderPage,
    LoginPage,
    PassingdataPage,
    DaftarmantanPage,
    ArrayPage,
    MoviepagePage,
    ArrayObjectPage,
    MenumakananPage,
    DaftarmahasiswaPage,
    ExportvariabelPage,
    AplikasisederhanaPage,
    AppdatamhsPage,
    TambahdatamhsPage,
    EditdatamhsPage,
    AlertPage,
    ModalcontrollerPage,
    InputnilaiPage,
    ActionsheetPage,
    AplikasihobiPage,
    EdithobiPage,
    LamantoasPage,
    LamanLoadingPage,
    LamanPopoverPage,
    MyPopover,
    OptbackgroundPage,
    LamaninvinityscrollPage,
    BadgesPage,
    CardsPage,
    CheckboxPage,
    AppsTugasHarianPage,
    MoreTugasPage,
    DateTimePage,
    FabsPage,
    GesturePage,
    GridPage,
    LamanhttpPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule, //ini untuk module 8
    IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AboutPage,
    SettingPage,
    ListuiPage,
    ListavatarPage,
    ListionicPage,
    BasiclistPage,
    NolineslistPage,
    InsetlistPage,
    ListdevidersPage,
    IconlistPage,
    AvatarlistPage,
    SlidinglistPage,
    ThumbnaillistPage,
    InputpagePage,
    NgModelPage,
    SmsPage,
    TodoPage,
    FragmentPage,
    FragmentheaderPage,
    LoginPage,
    PassingdataPage,
    DaftarmantanPage,
    ArrayPage,
    MoviepagePage,
    ArrayObjectPage,
    MenumakananPage,
    DaftarmahasiswaPage,
    ExportvariabelPage,
    AplikasisederhanaPage,
    AppdatamhsPage,
    TambahdatamhsPage,
    EditdatamhsPage,
    AlertPage,
    ModalcontrollerPage,
    InputnilaiPage,
    ActionsheetPage,
    AplikasihobiPage,
    EdithobiPage,
    LamantoasPage,
    LamanLoadingPage,
    LamanPopoverPage,
    MyPopover,
    OptbackgroundPage,
    LamaninvinityscrollPage,
    BadgesPage,
    CardsPage,
    CheckboxPage,
    AppsTugasHarianPage,
    MoreTugasPage,
    DateTimePage,
    FabsPage,
    GesturePage,
    GridPage,
    LamanhttpPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
