import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{HomePage} from '../home/home';
import { Http } from '@angular/http';




/**
 * Generated class for the AlertPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-alert',
  templateUrl: 'alert.html',
})
export class AlertPage {

  Data:any={};
  PromotionList:any;
  AlertList:any;
  constructor(public http: Http,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad AlertPage');
    this.getPromotions();
    this.getAlerts();
  }
  goto_alert()
  {
    this.navCtrl.setRoot(HomePage);
   
  }
getAlerts(){

  this.Data.action = "getAlerts";

  this.http.post("http://spaceappscairo.com/2018/spaceapps/getAlerts.php",this.Data).subscribe( data => {
   
 //console.log(data);
  this.AlertList = JSON.parse(data["_body"]);
  console.log("Alist"+this.AlertList);

})


}
  getPromotions(){
    this.Data.action = "getPromotions";

    this.http.post("http://spaceappscairo.com/2018/spaceapps/getPromotions.php",this.Data).subscribe( data => {
     
   //console.log(data);
    this.PromotionList = JSON.parse(data["_body"]);
    //console.log("Plist"+this.PromotionList);

  })
  }
}
