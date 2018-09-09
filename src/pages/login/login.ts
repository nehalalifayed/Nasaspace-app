import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';

import { Http } from '@angular/http';
import { HomePage } from '../home/home';
import { TabsPage } from '../tabs/tabs';

import { RegisterPage } from '../register/register';
import { WelcomePage} from '../welcome/welcome';
import { ResetPass1Page } from '../reset-pass1/reset-pass1';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  userData: any = {};

  constructor(private storage: Storage,public alertCtrl: AlertController,public http: Http,public navCtrl: NavController, public navParams: NavParams) {
  }

  showAlert(message: string) {
		const alert = this.alertCtrl.create({
			title: 'Info',
			subTitle: message,
			buttons: ['OK']
		});
		alert.present();
	}

  login() {


        if(this.isEmail(this.userData.Email))
        {
     
        
		this.userData.action = "login";

		this.http.post("http://spaceappscairo.com/2018/spaceapps/login.php", this.userData).subscribe(data => {

			var index = data["_body"].indexOf("{\"7laeen");
			var clean_data = data["_body"].substring(index, data["_body"].length);
			console.log(clean_data);

			let result = JSON.parse(clean_data);


            console.log(result);
			if (result.status == "success") {
                  let user_data=result[0];
                  console.log(user_data);
                  this.storage.set("user_data",user_data);
				 this.showAlert("Sucssess! you are logged in..")
                 this.navCtrl.setRoot(TabsPage, user_data);

			} else {
				this.showAlert("Wrong Email or password!");
			}
		}, err => {
			this.showAlert(err);

		});
	}
	else{
		this.showAlert("Email is invalid!");
	}


	}

	isEmail(search:string):boolean
    {
        var  serchfind:boolean;

        var regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

        serchfind = regexp.test(search);

        console.log(serchfind)
        return serchfind
	}
	

	forgetpass()
	{
		this.navCtrl.setRoot(ResetPass1Page);
	}

	Register()
	{
		this.navCtrl.setRoot(RegisterPage);	
	}
   gotowelcome()
   {
	this.navCtrl.setRoot(WelcomePage);	
   }
}
