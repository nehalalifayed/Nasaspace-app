import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { ContactusPage } from '../contactus/contactus';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Http } from '@angular/http';
import { RegisterPage } from '../register/register';


/**
 * Generated class for the TeamsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teams',
  templateUrl: 'teams.html',
})
export class TeamsPage {

  teamData:any={};
  CreateTeamForm: FormGroup;

  constructor(public alertCtrl: AlertController,private http: Http,private formBuilder: FormBuilder,public navCtrl: NavController, public navParams: NavParams) {

    this.CreateTeamForm = this.formBuilder.group({
      email1: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),

      email2: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      email3: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      email4: new FormControl('', Validators.compose([
        
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      email5: new FormControl('', Validators.compose([
        
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      name: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      video: new FormControl('', Validators.compose([
      ])),

      idea: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      education: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      contact: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      track: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      challengeName: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      HW: new FormControl('', Validators.compose([
        Validators.required,
      ])),

      work: new FormControl('', Validators.compose([
        Validators.required,
      ])),

    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamsPage');
  }

  gotocontact()
  {
   let data={"from":"teams"}
  
    this.navCtrl.setRoot(ContactusPage,data);
  }
  createTeam(){

    console.log(this.CreateTeamForm.value);

    this.http.post("http://spaceappscairo.com/2018/spaceapps/team.php",this.CreateTeamForm.value).subscribe(data=>{
 
    console.log(data);
      let result = JSON.parse(data["_body"]);
    console.log(result);
    if(result=='0'){
      this.showAlert("Your team is successfully added");
      this.navCtrl.setRoot(RegisterPage)

  }
      else if(result=='1'){
              this.showAlert("This team already exists");

      }

  }, err=>{
     alert(err.message);
  
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
  validation_messages = {
    'email': [
          { type: 'required', message: 'Email is required.' },
          { type: 'pattern', message: 'Enter a valid email.' }
        ],
    'field':[
      {
        type: 'required', message: 'this field is required.'
      }
    ]    
        
        }
}
