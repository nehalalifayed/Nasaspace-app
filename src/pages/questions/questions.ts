import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { MorePage } from '../more/more';
import { ToastController } from 'ionic-angular';
/**
 * Generated class for the QuestionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-questions',
  templateUrl: 'questions.html',
})
export class QuestionsPage {

  constructor(public alertCtrl:AlertController,public navCtrl: NavController, public navParams: NavParams , public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionsPage');
  }

  back(){
    this.navCtrl.setRoot(MorePage);
  }

  showToastWithCloseButton(answer:string) {
    const toast = this.toastCtrl.create({
      message: answer,
      showCloseButton: true,
      closeButtonText: 'Ok'
    });
    toast.present();
  }

}
