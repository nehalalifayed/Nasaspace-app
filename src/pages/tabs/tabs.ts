import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../../pages/home/home';
import { MorePage } from '../../pages/more/more';
import { SpeakersPage } from '../../pages/speakers/speakers';
import { SchedulePage } from '../../pages/schedule/schedule';

import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';



/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  @ViewChild('myTabs') tabRef;
  
  user_id:any;
  user_email:any;
  user_name:any;
  user_team:any;
  user_edu_institute:any;

  tab1Root = HomePage;
  tab2Root = SchedulePage;
  tab3Root = SpeakersPage;
  tab4Root = MorePage;

// titlesList:any;
  constructor(private storage: Storage,public http: Http,public navCtrl: NavController,public navParams :NavParams) {
   this.user_id= navParams.get('user_id');
   this.user_email=navParams.get('Email');
   this.user_name=navParams.get('Name');
   this.user_edu_institute=navParams.get('edu_institute');
   this.user_team=navParams.get('team');
   
     console.log("tabs "+this.user_id +this.user_email);

     this.storage.set('user_email', this.user_email);
      this.storage.set('user_id', this.user_id);
     this.storage.set('user_name', this.user_name);
    this.storage.set('edu_institute', this.user_edu_institute);
    this.storage.set('team', this.user_team);

  this.storage.get('notification_enabled').then((val) => {
    console.log('Your notification_enabled is', val);
    if(val==null)
      this.storage.set('notification_enabled', false);
      
  });
    
    
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
   // this.getData();
  }

/*getData(){
 this.http.get("http://spaceappscairo.com/2018/spaceapps/getTitles.php").subscribe( data => {
 this.titlesList = JSON.parse(data["_body"]);
 console.log(this.titlesList);
 }, err =>{
 console.log(err);
 });
 }*/

}
