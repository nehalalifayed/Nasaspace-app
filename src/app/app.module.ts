import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
/*import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseService } from '../services/firebase.service';*/


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { MorePage } from '../pages/more/more';
import { SpeakerPage } from '../pages/speaker/speaker';
import { SpeakersPage } from '../pages/speakers/speakers';
import { SchedulePage } from '../pages/schedule/schedule';
import { TabsPage } from '../pages/tabs/tabs';
import{MoreeventinfoPage} from '../pages/moreeventinfo/moreeventinfo';
import {AlertPage} from '../pages/alert/alert';
import {TicketPage} from '../pages/ticket/ticket';
import {SessionPage} from '../pages/session/session';

import { NgxQRCodeModule } from 'ngx-qrcode2';

//import { FirstPage } from '../pages/first/first';
import { RegisterPage } from '../pages/register/register';
import { WelcomePage } from '../pages/welcome/welcome';
import { ResetPass1Page } from '../pages/reset-pass1/reset-pass1';
import { TitlePage } from '../pages/title/title';

//import { ResetPass2Page } from '../pages/reset-pass2/reset-pass2';
import { HttpModule } from '@angular/http';
import { HTTP } from '@ionic-native/http';


import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import {SponsorPage } from '../pages/sponsor/sponsor';


//import { AuthService } from '../providers/auth-service/auth-service';
import { LocalNotifications } from '@ionic-native/local-notifications';

import { BackgroundMode } from '@ionic-native/background-mode';

import { IonicStorageModule } from '@ionic/storage';
import { EmailComposer } from '@ionic-native/email-composer';
import { ContactusPage } from '../pages/contactus/contactus';
import { QuestionsPage } from '../pages/questions/questions';

import { EditprofilePage } from '../pages/editprofile/editprofile';
import { SettingsPage } from '../pages/settings/settings';
import { TeamsPage } from '../pages/teams/teams';

import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { Calendar } from '@ionic-native/calendar';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
   // FirstPage,
    RegisterPage,
    ResetPass1Page ,
    //ResetPass2Page,
    WelcomePage,
     MorePage ,
     SpeakerPage,
     SchedulePage,
     TabsPage,
     MoreeventinfoPage,
     AlertPage,
     TicketPage,
      TitlePage,
      SpeakersPage,
      SessionPage,
      SponsorPage,
      ContactusPage,
      QuestionsPage,
      EditprofilePage,
      SettingsPage,
      TeamsPage 


  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    /*AngularFireModule.initializeApp(firebaseAuth),        
    AngularFireAuthModule,
     AngularFirestoreModule,*/
     HttpModule,
     NgxQRCodeModule,
      IonicStorageModule.forRoot()

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    //FirstPage,
    ResetPass1Page ,
    //ResetPass2Page,
    RegisterPage,
    WelcomePage,
    MorePage ,
     SpeakerPage,
     SchedulePage,
     TabsPage,
      MoreeventinfoPage,
     AlertPage,
     TicketPage,
      TitlePage,
      SpeakersPage,
      SessionPage,
      SponsorPage,
       ContactusPage,
      QuestionsPage,
       EditprofilePage,
      SettingsPage,
       TeamsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BarcodeScanner,
    LocalNotifications,
     BackgroundMode,
     EmailComposer,
     HTTP,
     FileTransfer,
       FileTransferObject,
       File,
       Calendar 
   // AngularFireAuth,
   // AuthService
  ]
})
export class AppModule {}
