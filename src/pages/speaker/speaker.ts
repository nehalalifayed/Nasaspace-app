import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import {SchedulePage} from '../schedule/schedule';
import {SpeakersPage} from '../speakers/speakers';
import { EmailComposer } from '@ionic-native/email-composer';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the SpeakerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-speaker',
  templateUrl: 'speaker.html',
})
export class SpeakerPage {
 speaker_name:any;
   description:any;
   speaker_email:any;
   jop_title:any;
   user_email:any;
   from:any;
  constructor(private storage: Storage,public alertCtrl:AlertController,private emailComposer: EmailComposer,public navCtrl: NavController, public navParams: NavParams) {

      this.speaker_name=  navParams.get('name');
      this.description=navParams.get('brief_description');
      this.speaker_email=navParams.get('email');
      this.jop_title=navParams.get('jop_title');
      this.from=navParams.get('from');
     
   storage.get('user_email').then((val) => {
    console.log('Your email is', val);
    this.user_email=val;

  });
  


  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad SpeakerPage');
  }
  goto()
 {
   if(this.from=="session")
   this.navCtrl.setRoot(SchedulePage);
   else if(this.from=="speakers")
     this.navCtrl.setRoot(SpeakersPage);

 }

  composeEmail(){

console.log('open email');

let email = {
  from:this.user_email,
  to:this.speaker_email ,
  
  isHtml: true
};
this.emailComposer.isAvailable().then((available: boolean) =>{
  //if(available) {

    //this.showAlert("email")
    //Now we know we can send
    this.emailComposer.open(email);
  //}
 });

 }


 showAlert(message: string) {
  const alert = this.alertCtrl.create({
    title: 'Info',
    subTitle: message,
    buttons: ['OK']
  });
  alert.present();
}

}
