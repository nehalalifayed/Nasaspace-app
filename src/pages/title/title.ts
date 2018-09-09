import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the TitlePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-title',
  templateUrl: 'title.html',
})
export class TitlePage {

  title:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.title= navParams.get('title');
     // console.log(this.title);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TitlePage');
  }

  goback()
  {
    this.navCtrl.setRoot(HomePage);
  }
  facebook()
  {

  }
  twitter()
  {

  }
  linkedin()
  {
    
  }

}
