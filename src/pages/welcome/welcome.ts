import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ToastController } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';
import { TabsPage } from '../tabs/tabs';

import { Storage } from '@ionic/storage';

/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {
  splash = true;
  loggedin:any;
  user_data:any;
 // tabBarElement: any;
  constructor(private toastCtrl: ToastController,private storage: Storage,public navCtrl: NavController, public navParams: NavParams) {
     //  this.tabBarElement = document.querySelector('.tabbar');
  }
  ionViewDidLoad() {
    // this.tabBarElement.style.display = 'none';
   this.storage.get('user_data').then((val) => {
   // console.log('Your user_data is', val);
   // this.showToast('Your user_data is'+ val);
    this.user_data=val
    if(val==null)
      this.loggedin=false;
    else
      this.loggedin=true;

      
  });

     setTimeout(() => {
       this.splash = false;
       if(this.loggedin==true)
         this.navCtrl.setRoot(TabsPage, this.user_data);

     }, 4000);
   }
 
   ionViewWillEnter() {



     let tabBarElement = document.querySelector('.tabbar.show-tabbar');
         if (tabBarElement != null) {
    //      this.tabBarElement.style.display = 'none'; // or whichever property which you want to access
         }
     }

  tologin(){
   this.navCtrl.push(LoginPage);
  }

  toregister()
  {
 this.navCtrl.push(RegisterPage);
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


}
