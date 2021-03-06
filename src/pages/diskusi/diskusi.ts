import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';

import { ActionSheetController } from 'ionic-angular';
import { ArtikelBacaPage } from '../artikel-baca/artikel-baca';
import { TulisArtikelPage } from '../tulis-artikel/tulis-artikel';
import { TulisDiskusiPage } from '../tulis-diskusi/tulis-diskusi';
import '../../providers/user-data';

/*
  Generated class for the Diskusi page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-diskusi',
  templateUrl: 'diskusi.html'
})
export class DiskusiPage {
  public diskusi;
  public isi;
  public limit=0;

  public response;
  public items;

  constructor(public navCtrl: NavController, public http: Http, public actionSheetCtrl: ActionSheetController) {

  }
  

  ionViewDidLoad() {
    console.log('Hello DiskusiPage Page');
    this.http.get('http://cybex.agri.web.id/api/all_diskusi.php?limit='+this.limit).subscribe(res => {
      this.diskusi = res.json();
    });
  }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      this.limit = this.limit+5;

      this.http.get('http://cybex.agri.web.id/api/all_diskusi.php?limit='+this.limit).subscribe(res => {
        this.diskusi = this.diskusi.concat(res.json());
      });

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 2000);
   }


  baca(idDiskusi){
    this.navCtrl.push(ArtikelBacaPage, idDiskusi);
  }

  /*kirim() {
    let send = JSON.stringify({value : this.isi});

    this.http.post('http://cybex.agri.web.id/api/test.php', send).subscribe(res => {
      this.response = res;

      if (res) {
        this.isi = '';
        this.response = '';
      }
    })
  }*/
    
 presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Pilihan',
      buttons: [
        {
          text: 'Tulis Artikel',
          role: 'tulisArtikel',
          handler: () => {
            console.log('Tulis Artikel clicked');
            this.navCtrl.push(TulisArtikelPage);
          }
        },{
          text: 'Tanya/Diskusi',
          role: 'tulisDiskusi',
          handler: () => {
            console.log('Tulis Diskusi clicked');
            this.navCtrl.push(TulisDiskusiPage);
          }
        },{
          text: 'Batal',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

}
