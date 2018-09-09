import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MorePage } from '../more/more';

/**
 * Generated class for the SponsorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sponsor',
  templateUrl: 'sponsor.html',
})
export class SponsorPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SponsorPage');
  }

  goto()
  {
    this.navCtrl.setRoot(MorePage);
  }

}
