import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController,ToastController } from 'ionic-angular';
import {AlertPage} from '../alert/alert';
import {TicketPage} from '../ticket/ticket';
import {SessionPage} from '../session/session';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';

import { Calendar } from '@ionic-native/calendar';
/**
 * Generated class for the SchedulePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html',
})
export class SchedulePage {
  value:any;
  // toggoleShowHide :any;
  // toggoleShowHide2 :any;
  str:any;
  str2 : any;

//  schedules:string;

  schedulesList:any;
  schedule1List:any;
  schedule2List:any;
  schedule3List:any;
  display_list:any;

  index:any;

  Data:any = {};

  notifictaion_enable:any;

  constructor(private calendar: Calendar,private storage: Storage,public http: Http,public alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams , private toastCtrl: ToastController) {
   
   this.storage.get('notification_enabled').then((val) => {
    console.log('Your notification_enabled is', val);
    this.notifictaion_enable=val;

  });

  }


 ionViewDidLoad(){
  //console.log("i am home");

  this.getSchedules();
 }

 ionViewDidEnter()
 {
 console.log("ionViewDidEnter");

  this.storage.get('notification_enabled').then((val) => {
    console.log('Your notification_enabled is', val);
    this.notifictaion_enable=val;

  });
 }

  gotopage() 
  {
    this.navCtrl.setRoot(AlertPage);
     //this.storage.set('name', 'Max');

  }

  gototicket()
  {
    this.navCtrl.setRoot(TicketPage);
  }

  go(event)
  {
    //alert(event.target.id);
     if(event.target.id=="25oct"){
        this.display_list=this.schedule1List;
        this.index=1;
     }
     else if(event.target.id=="26oct")
     {
        this.display_list=this.schedule2List;
        this.index=2;
     }
     else{
       this.display_list=this.schedule3List;
       this.index=3;
     }

   // document.getElementById("nehal").innerHTML= event.target.id;
    
  }

go_to_session(session_name,session_date,start_time,end_time,location,speaker_name)
{
  var data={"session_date":session_date,
  "start_time":start_time,
  "end_time":end_time,
  "location":location,
  "speaker_name":speaker_name,
  "session_name":session_name
  }

  this.navCtrl.setRoot(SessionPage,data);

}
 
  ischecked(event,session_id,session_name,indexx,start_time,end_time,session_date)
  {

     
     var start_time_splitted = start_time.split(":", 3); 
     var end_time_splitted = end_time.split(":", 3); 
   
     var start_date= new Date(2018,9,session_date,start_time_splitted[0],start_time_splitted[1],start_time_splitted[2],0);
     var end_date=new Date(2018,9,session_date,end_time_splitted[0],end_time_splitted[1],end_time_splitted[2],0);

      this.storage.get('notification_enabled').then((val) => {
      console.log('Your notification_enabled is', val);
      this.notifictaion_enable=val;

    });

        //this.showToast(this.notifictaion_enable);
   
    if (event.checked == true&&this.notifictaion_enable==true) // alert();
    {
      //////////////////add here ya heba /////////////////////////////////
     this.showToast(' Added successfully to your schedule');
     //call create notification
    

     this.calendar.createEvent(session_name, null, 'NASA Space Apps Cairo', start_date, end_date).then(res => {
    }, err => {
      console.log('err: ', err);
    });

    
     this.change_list_checked(true,indexx);
    }
  else if(this.notifictaion_enable==true)
  {
  /////////////////remove it from the global variable here ya heba /////////////////////////////
  this.showToast(' Removed successfully from your schedule');
  //call delete notification


   
  this.calendar.deleteEvent(session_name,null,null,start_date,end_date).then(res => {
  }, err => {
    console.log('err: ', err);
  });

   
    this.change_list_checked(false,indexx);
  
  }

}

change_list_checked(check_state,my_index){
 if(this.index==1){
       this.schedule1List[my_index].is_checked=check_state;
       this.storage.set('schedule1List', this.schedule1List);
  
      
     }
     else if(this.index==2){
       this.schedule2List[my_index].is_checked=check_state;
       this.storage.set('schedule2List', this.schedule2List);

      
     }
     else if(this.index==3){
       this.schedule3List[my_index].is_checked=check_state;
       this.storage.set('schedule3List', this.schedule3List);
      
     }
}
fill_index_is_checked()
{
  for(var i = 0;i<this.schedule1List.length;i++) 
  {
    this.schedule1List[i].is_checked=false;
    this.schedule1List[i].index=i;

  }
   for(var i = 0;i<this.schedule2List.length;i++) 
  {
    this.schedule2List[i].is_checked=false;
    this.schedule2List[i].index=i;
  }
   for(var i = 0;i<this.schedule3List.length;i++) 
  {
    this.schedule3List[i].is_checked=false;
    this.schedule3List[i].index=i;
  }
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


  getSchedules(){


   this.storage.get('schedulesList').then((val) => {
    console.log('Your age is',val);
    this.schedulesList=val;

     if(this.schedulesList==null) 
  {
 this.Data.action = "getSchedules";



 this.http.post("http://spaceappscairo.com/2018/spaceapps/getSchedules.php",this.Data).subscribe( data => {
  

 this.schedulesList = JSON.parse(data["_body"]);
 this.schedule1List=this.schedulesList[0];
 this.schedule2List=this.schedulesList[1];
 this.schedule3List=this.schedulesList[2];

 this.fill_index_is_checked();

 this.display_list= this.schedule1List;
 //console.log( this.schedulesList);
 // console.log( this.schedule1List);

  this.storage.set('schedulesList', this.schedulesList);
  this.storage.set('schedule1List', this.schedule1List);
  this.storage.set('schedule2List', this.schedule2List);
  this.storage.set('schedule3List', this.schedule3List);
    



 }, err =>{
 console.log(err);
 });
  }
  else
  {
     this.storage.get('schedule1List').then((val) => {

       this.schedule1List=val;
       this.display_list= this.schedule1List;
     });

     this.storage.get('schedule2List').then((val) => {

       this.schedule2List=val;
     });

     this.storage.get('schedule3List').then((val) => {

       this.schedule3List=val;
     });

   
  }

  });
  
 

 }


 
}
