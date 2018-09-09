import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController  } from 'ionic-angular';
import { MorePage } from '../more/more';
import { WelcomePage } from '../welcome/welcome';

import { Storage } from '@ionic/storage';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  notification:any;
  constructor(private storage: Storage,public navCtrl: NavController, public navParams: NavParams,private toastCtrl: ToastController) {
    
    this.storage.get('notification_enabled').then((val) => {
    console.log('Your notification_enabled is', val);
    this.notification=val;
  });
    

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
    this.storage.get('notification_enabled').then((val) => {
    console.log('Your notification_enabled is', val);
    this.notification=val;
  });
    
  }

  back()
  {
    this.navCtrl.setRoot(MorePage);
  }
showToast(message: string) {
   let toast = this.toastCtrl.create({
    message: message,
    duration: 2000,
    position: 'bottom'
  });

  toast.onDidDismiss(() => {
    console.log('Dismissed toast');
  });

  toast.present();
  }


  ischecked(event)
  {
    if(event.checked==true)
    {
       this.storage.set('notification_enabled', true);
     this.notification=true;
     this.showToast("You can now create or delete notification");
    }
    else{
      this.storage.set('notification_enabled', false);
      this.notification=false;
      this.showToast("You can't now create or delete notification");
    }

   

  }


  logout()
  {
      this.storage.set("user_data",null);
        
        setTimeout(() => {
      
       window.location.reload();
     }, 1000);
       
       // this.navCtrl.setRoot(WelcomePage);
  }

 



}
