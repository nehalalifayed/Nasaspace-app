import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SchedulePage} from '../schedule/schedule';
import { SpeakerPage } from '../speaker/speaker';
import { Http } from '@angular/http';

/**
 * Generated class for the SessionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-session',
  templateUrl: 'session.html',
})
export class SessionPage {
   
   session_name:any;
   session_date:any;
   start_time:any;
   end_time:any;
   location:any;
   speaker_name:any;
   description:any;
   speaker_email:any;
   speaker_data:any;
   Data:any = {};


  constructor(public http: Http,public navCtrl: NavController, public navParams: NavParams) {
    this.session_name=  navParams.get('session_name');
    this.session_date=  navParams.get('session_date');
    this.start_time=  navParams.get('start_time');
    this.end_time=  navParams.get('end_time');
    this.location=  navParams.get('location');
    this.speaker_name=  navParams.get('speaker_name');
    this.getSpeaker();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SessionPage');
  }
  goto()
 {
   this.navCtrl.setRoot(SchedulePage);
 }
 gotospeaker()
 {
   //console.log(this.speaker_data[0]);
   let data={"name":this.speaker_name,"location":this.location,"email":this.speaker_email,"brief_description":this.description
   ,"from":"session"}
   this.navCtrl.setRoot(SpeakerPage,data);
 }

  getSpeaker(){
   // console.log("get data");

 this.Data.action = "getSpeaker";
 this.Data.name = this.speaker_name;

 console.log(this.Data.name);
 this.http.post("http://spaceappscairo.com/2018/spaceapps/getSpeaker.php",this.Data).subscribe( data => {

 console.log(data);
 this.speaker_data = JSON.parse(data["_body"]);
 this.description=this.speaker_data[0].brief_description;
 //this.speaker_email=this.speaker_data[0].email;
 console.log(this.description);
 }, err =>{
 console.log(err);
 });
 }
}
