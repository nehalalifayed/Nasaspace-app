import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import {SponsorPage} from '../../pages/sponsor/sponsor';
import {TicketPage} from '../../pages/ticket/ticket';
import{EditprofilePage} from '../editprofile/editprofile'
import {ContactusPage} from '../contactus/contactus';
import{QuestionsPage} from '../questions/questions'
import{SponsorPage} from '../sponsor/sponsor'
import{SettingsPage} from '../settings/settings'

import { Storage } from '@ionic/storage';


/**
 * Generated class for the MorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-more',
  templateUrl: 'more.html',
})
export class MorePage {

userName:any;

  constructor(private storage: Storage,public navCtrl: NavController, public navParams: NavParams) {
      storage.get('user_name').then((val) => {
    console.log('Your user_name is', val);
    this.userName=val;

  });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MorePage');
    
  }

  gotosponsor()
  {
    this.navCtrl.setRoot(SponsorPage);
  }

  gototicket()
  {
    this.navCtrl.setRoot(TicketPage);
  }

  gotoEditProfile(){

    this.navCtrl.setRoot(EditprofilePage);

  }

  gotoFAQs(){
  this.navCtrl.setRoot(QuestionsPage);
  }

  gotoContactUs(){

     let data={"from":"more"}
  
    this.navCtrl.setRoot(ContactusPage,data);

  }
  gotoSettings(){
    this.navCtrl.setRoot(SettingsPage);

  }
}
