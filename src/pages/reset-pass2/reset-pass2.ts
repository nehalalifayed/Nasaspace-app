import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ResetPass1Page} from '../reset-pass1/reset-pass1';
/**
 * Generated class for the ResetPass2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reset-pass2',
  templateUrl: 'reset-pass2.html',
})
export class ResetPass2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResetPass2Page');
  }
  goto()
  {
    this.navCtrl.setRoot(ResetPass1Page);
  }
}
