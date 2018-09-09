import {
	Component
} from '@angular/core';
import {
	IonicPage,
	NavController,
	NavParams,
	AlertController
} from 'ionic-angular';

//import { AngularFireAuth } from 'angularfire2/auth';

//import { AuthService } from '../../providers/auth-service/auth-service';
import {
	HomePage
} from '../home/home';
import {
	LoginPage
} from '../login/login';

import {
	Http
} from '@angular/http';

import { WelcomePage } from '../welcome/welcome';

import { TeamsPage } from '../teams/teams';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-register',
	templateUrl: 'register.html',
})
export class RegisterPage {


	userData: any = {};

	constructor(public http: Http, public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {}

	showAlert(message: string) {
		const alert = this.alertCtrl.create({
			title: 'Info',
			subTitle: message,
			buttons: ['OK']
		});
		alert.present();
	}
	showAlertforCreateTeam(message: string) {
		const alert = this.alertCtrl.create({
			title: 'Info',
			subTitle: message,
			buttons:[ 
			{
				text:'Create New Team?'	,
				handler: () => {
					this.navCtrl.setRoot(TeamsPage);
			}
		},

		{
			text:'Cancel'
		}
		]
		});
		alert.present();
	}

	signup() {

        if(this.isEmail(this.userData.Email))
        {
		this.userData.action = "signup";

		this.http.post("http://spaceappscairo.com/2018/spaceapps/signup3.php", this.userData).subscribe(data => {

			var index = data["_body"].indexOf("{\"7laeen");
			var clean_data = data["_body"].substring(index, data["_body"].length);
			console.log(clean_data);

			let result = JSON.parse(clean_data);


			if (result.status == "success") {

			    let user_data=result[0];
                console.log(user_data);
			    this.showAlert("Suceess! you are Registered go to your mail to know the password and log in..");
                //this.navCtrl.setRoot(HomePage, user_data);

			} else if(result.status =="this team not exist!"){
				this.showAlertforCreateTeam("This team doesn't exist!");

			}
			 else if(result.status =="register first"){
				this.showAlert("Please register first on the website!");

			}
		}, err => {
			this.showAlert(err.message);

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
	
	login()
	{
		this.navCtrl.setRoot(LoginPage);
	}

	gotopage() 
	{
		this.navCtrl.setRoot(WelcomePage);
	}

}


 

/*register()
  {
    

  	this.fire.auth.createUserWithEmailAndPassword("heba@gmail.com","1234hebaahmed").then(
  		data => {
              this.showAlert("Suceess! you are Registered with just email..");
        
  		
  		}
  		)
  	   .catch(
  		error => {
  			 this.showAlert(error.message);
  		}
  		);
  }
*/