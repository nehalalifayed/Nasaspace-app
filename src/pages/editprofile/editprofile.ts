import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController,ToastController } from 'ionic-angular';
import { MorePage } from '../../pages/more/more';

import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the EditprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editprofile',
  templateUrl: 'editprofile.html',
})
export class EditprofilePage {

  Data: any = {};
  

  constructor(private storage: Storage,public alertCtrl: AlertController,public http: Http,public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
        //this.Data.Email="feryalhisham19@gmail.com" ;

       this.getParticipantInfo();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditprofilePage');

    //this.getParticipantInfo();
  }
 
 
  goto(){

  this.navCtrl.setRoot(MorePage);
  }
  
  getParticipantInfo(){

    this.Data.action = "getUserInfo";
     this.storage.get('user_email').then((val) => {
    
     this.Data.Email=val;
     console.log('Your email is', this.Data.Email);

  });
  this.storage.get('user_name').then((val) => {
    
    this.Data.Name=val;
    console.log('Your Name is', this.Data.Name);

 });
 this.storage.get('team').then((val) => {
    
  this.Data.team=val;
  console.log('Your team is', this.Data.team);

});

this.storage.get('edu_institute').then((val) => {
    
  this.Data.edu_institute=val;
  console.log('Your edu_institute is', this.Data.edu_institute);

});
   
  //   this.http.post("http://spaceappscairo.com/2018/spaceapps/getParticipantInfo.php",this.Data).subscribe( data => {
  //               console.log(data);

  //     var index = data["_body"].indexOf("{\"7laeen");
  //     var clean_data = data["_body"].substring(index, data["_body"].length);
  //     console.log(clean_data);

  //     let result = JSON.parse(clean_data);


  //   //let result = JSON.parse( data["_body"]);
  //   console.log(result[0]);
	//    this.Data.Name=result[0].Name;
  //    this.Data.team=result[0].team;
  //    this.Data.edu_institute=result[0].edu_institute;

  //   //document.getElementById('Name').setAttribute("value",result[0].Name);

   





  // })

  }

  EditProfile(){
    
     this.Data.action="editProfile";

     this.http.post("http://spaceappscairo.com/2018/spaceapps/editProfile.php",this.Data).subscribe( data => {
           console.log(data);

     var index = data["_body"].indexOf("{\"7laeen");
      var clean_data = data["_body"].substring(index, data["_body"].length);
      console.log(clean_data);

      let result = JSON.parse(clean_data);
     
			
     if(result.status =="this team not exist!"){
      //console.log("This team is not exist!");
       this.showAlert("This team is not exist!");
     }
else
{
  const toast = this.toastCtrl.create({
    message: "Your profile is succesfully updated",
    duration:4000
  });
  toast.present();
   
   this.storage.set("user_name",this.Data.Name)
  this.navCtrl.setRoot(MorePage);
}

    
     

  });

}

showAlert(message: string) {
  const alert = this.alertCtrl.create({
    title: 'Info',
    subTitle: message,
    buttons: ['OK']
  });
  alert.present();
}

}
