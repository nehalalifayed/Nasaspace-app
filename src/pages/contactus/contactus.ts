import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MorePage } from '../../pages/more/more';
import { TeamsPage } from '../../pages/teams/teams';

import { EmailComposer } from '@ionic-native/email-composer';
import { Storage } from '@ionic/storage';


/**
 * Generated class for the ContactusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contactus',
  templateUrl: 'contactus.html',
})
export class ContactusPage {

  toEmail:string='feryalhisham@gmail.com';
  fromEmail:string;
  
  emailBody:any;
  emailSubject:any;
  from:any;

  constructor(private storage: Storage,public emailComposer: EmailComposer,public navCtrl: NavController, public navParams: NavParams) {

     storage.get('user_email').then((val) => {
    console.log('Your email is', val);
    this.fromEmail=val;

  });

      this.from=navParams.get('from');
     
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactusPage');
  }

  composeEmail(){

    console.log('open email');
    
    let email = {
      from:this.fromEmail,
      to:this.toEmail ,

      subject:this.emailSubject ,
      body: this.emailBody,
      
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

  back()
  {
    this.navCtrl.setRoot(MorePage);

     if(this.from=="more")
   this.navCtrl.setRoot(MorePage);
   else if(this.from=="teams")
     this.navCtrl.setRoot(TeamsPage);

  }

}
