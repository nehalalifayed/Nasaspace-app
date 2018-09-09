import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{HomePage} from '../home/home';
import{BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the TicketPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ticket',
  templateUrl: 'ticket.html',
})
export class TicketPage {
  qrData = null;
  createdCode = null;
  scannedCode = null;
  user_id:any;
  constructor(private storage: Storage,public navCtrl: NavController, public navParams: NavParams,private barcodeScanner: BarcodeScanner) {

      //this.user_id= navParams.get('user_id');;

      
    this.storage.get('user_id').then((val) => {
    console.log('Your user_id is', val);
    this.user_id=val;

  });
    
  }
/////////////////////////////
  
createCode() {
  // this.createdCode = this.qrData;
  //7aga standard keda we 5alas ///////////////////////////
  this.createdCode=this.user_id;
  console.log(this.user_id);
}

scanCode() {
  this.barcodeScanner.scan().then(barcodeData => {
    this.scannedCode = barcodeData.text;
  }, (err) => {
      console.log('Error: ', err);
  });
}

////////////////////////////////////
  ionViewDidLoad() {
    console.log('ionViewDidLoad TicketPage');
   
  }
  goto()
  {
   this.navCtrl.setRoot(HomePage);
  }

 
}
