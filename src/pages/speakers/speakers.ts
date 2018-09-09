import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AlertPage} from '../alert/alert';
import {TicketPage} from '../ticket/ticket';
import {SpeakerPage} from '../speaker/speaker';
import { Http } from '@angular/http';
/**
 * Generated class for the SpeakersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-speakers',
  templateUrl: 'speakers.html',
})
export class SpeakersPage {

  speakersList:any;
  speaker1List:any;
  speaker2List:any;
  speaker3List:any;
  display_list:any;

  Data:any = {};

  constructor(public http: Http,public navCtrl: NavController, public navParams: NavParams) {

     
  }

  ionViewDidLoad() {
     this.getSpeakers();
  }

  gotopage() 
  {
    this.navCtrl.setRoot(AlertPage);
  }

  gototicket()
  {
    this.navCtrl.setRoot(TicketPage);
  }
  gotospeaker(name,jop_title,brief_description,email)
  {
    let data={
      "name":name,
      "jop_title":jop_title,
      "brief_description":brief_description,
      "email":email,
      "from":"speakers"

    }
    this.navCtrl.setRoot(SpeakerPage,data);
  }

  go(event)
  {
    //alert(event.target.id);
     if(event.target.id=="Speakers"){
        this.display_list=this.speaker1List;
       
     }
     else if(event.target.id=="Mentors")
     {
        this.display_list=this.speaker2List;
     
     }
     else{
       this.display_list=this.speaker3List;
       
     }

   // document.getElementById("nehal").innerHTML= event.target.id;
    
  }

  getSpeakers(){

    this.Data.action = "getSpeakers";


 this.http.post("http://spaceappscairo.com/2018/spaceapps/getSpeakers.php",this.Data).subscribe( data => {
  

 this.speakersList = JSON.parse(data["_body"]);
 this.speaker1List=this.speakersList[0];
 this.speaker2List=this.speakersList[1];
 this.speaker3List=this.speakersList[2];



this.display_list= this.speaker1List;

 }, err =>{
 console.log(err);
 });

  }

}
