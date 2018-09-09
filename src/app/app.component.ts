import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
//import { FirstPage } from '../pages/first/first';
import { WelcomePage } from '../pages/welcome/welcome';
import { ResetPass1Page } from '../pages/reset-pass1/reset-pass1';
import { ResetPass2Page } from '../pages/reset-pass2/reset-pass2';
import { TabsPage } from '../pages/tabs/tabs';
import { SchedulePage } from '../pages/schedule/schedule';
import { SpeakersPage } from '../pages/speakers/speakers';
import { ContactusPage } from '../pages/contactus/contactus';
import { QuestionsPage } from '../pages/questions/questions';
//import { Storage } from '@ionic/storage';

//import { BackgroundMode } from '@ionic-native/background-mode';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = WelcomePage;
  
  //private storage: Storage,
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    
  }
}

