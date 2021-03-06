import { NgModule } from '@angular/core';


import { InfiniteScrollModule } from 'angular2-infinite-scroll';
import { Camera } from 'ionic-native';
import { ImagePicker } from 'ionic-native';
import { IonicApp, IonicModule } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { ConferenceApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { PopoverPage } from '../pages/about-popover/about-popover';
import { AccountPage } from '../pages/account/account';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { TabsPage } from '../pages/tabs/tabs';
import { TutorialPage } from '../pages/tutorial/tutorial';

import { UserData } from '../providers/user-data';

import { ArtikelPage } from '../pages/artikel/artikel';
import { CariPage } from '../pages/cari/cari';
import { DiskusiPage } from '../pages/diskusi/diskusi';
import { ArtikelBacaPage } from '../pages/artikel-baca/artikel-baca';
import { TulisArtikelPage } from '../pages/tulis-artikel/tulis-artikel';
import { TulisDiskusiPage } from '../pages/tulis-diskusi/tulis-diskusi';
import { TulisKomentarPage } from '../pages/tulis-komentar/tulis-komentar';


@NgModule({
  declarations: [
    ConferenceApp,
    AboutPage,
    AccountPage,
    LoginPage,
    PopoverPage,
    SignupPage,
    TabsPage,
    TutorialPage,
    ArtikelPage,
    CariPage,
    DiskusiPage,
    ArtikelBacaPage,
    TulisArtikelPage,
    TulisDiskusiPage,
    TulisKomentarPage
  ],
  imports: [
    InfiniteScrollModule,
    IonicModule.forRoot(ConferenceApp, {
      tabsPlacement: 'top',
      tabsHideOnSubPages: "true"
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ConferenceApp,
    AboutPage,
    AccountPage,
    LoginPage,
    PopoverPage,
    SignupPage,
    TabsPage,
    TutorialPage,
    ArtikelPage,
    CariPage,
    DiskusiPage,
    ArtikelBacaPage,
    TulisArtikelPage,
    TulisDiskusiPage,
    TulisKomentarPage
  ],
  providers: [UserData, Storage]
})
export class AppModule {}
