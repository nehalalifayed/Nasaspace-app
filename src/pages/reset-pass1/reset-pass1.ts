import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Http } from '@angular/http';
import { LoginPage } from '../login/login';


/**
 * Generated class for the ResetPass1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reset-pass1',
  templateUrl: 'reset-pass1.html',
})
export class ResetPass1Page {

ResetPasswordForm: FormGroup;

userEmail:any={};

  constructor(public http: Http,public navCtrl: NavController, public navParams: NavParams,private formBuilder: FormBuilder
  
  ) {
  
  this.ResetPasswordForm = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ]))
    });
  
  
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResetPass1Page');
  }
  
  doResetPass() {
      

     this.http.post("http://spaceappscairo.com/2018/spaceapps/resetpass2.php",this.userEmail).subscribe(data=>{
 
    console.log(this.userEmail);
    this.navCtrl.push('ResetPass2Page');
 }, err=>{
   alert(err.message);

    });

    
  }
  goto()
  {
   this.navCtrl.setRoot(LoginPage);
  }

  validation_messages = {
'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Enter a valid email.' }
    ]
    
    }
}
