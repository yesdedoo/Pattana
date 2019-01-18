import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

//REST Api
import { TestapiProvider } from '../providers/testapi/testapi';
import { from } from 'rxjs';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  //checkData
  checkData:any;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public testapiProvider:TestapiProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  Register(){
    let username = {'username':'verygood'}
    this.checkData = (this.testapiProvider.postUsername(username))
    console.log(this.checkData)
    this.checkData.subscribe(val => {
      if (val != "None") {
        console.log(val)
      }
    });
  }

}
