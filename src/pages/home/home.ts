import { Component,ViewChild,ElementRef } from '@angular/core';
import { NavController,NavParams  } from 'ionic-angular';
//import { AngularFireAuth } from 'angularfire2/auth';
// import{RegisterPage} from '../register/register';
import{SchedulePage} from '../schedule/schedule';
import {SpeakerPage} from '../speaker/speaker';
import {MorePage} from '../more/more';
import{MoreeventinfoPage} from '../moreeventinfo/moreeventinfo';
import {AlertPage} from '../alert/alert';
import {TicketPage} from '../ticket/ticket';
import {TitlePage} from '../title/title';
import{TabsPage} from '../tabs/tabs';
import { Http } from '@angular/http';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html' ,
  
})
export class HomePage {
  
  

  titlesList:any;
  user_id:any;

  Data:any = {};
  constructor(public http: Http,public navCtrl: NavController,public navParams :NavParams) {
    this.user_id= navParams.get('user_id');
     console.log("home "+this.user_id);
  }

 ionViewDidLoad(){
  //console.log("i am home");
  this.getTitles();
 }

   gotopage() 
  {
    this.navCtrl.setRoot(AlertPage);
  }


  gotomore()
  {
    this.navCtrl.setRoot(MoreeventinfoPage);
  }
  gototicket()
  {
    let to_ticket={"user_id":this.user_id};
    this.navCtrl.setRoot(TicketPage,to_ticket);
  }
  gotoTitle(thetitle)
 {
   //console.log(thetitle);
   let title={
     "title":thetitle
   }
    this.navCtrl.setRoot(TitlePage,title);
 }
  getTitles(){
   // console.log("get data");

 this.Data.action = "getTitles";

 this.http.post("http://spaceappscairo.com/2018/spaceapps/getTitles.php",this.Data).subscribe( data => {
  

 this.titlesList = JSON.parse(data["_body"]);
// console.log(this.titlesList);
 }, err =>{
 console.log(err);
 });
 }

 


 
  
}
