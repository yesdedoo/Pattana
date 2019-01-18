import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AlertController, NavController } from 'ionic-angular';


/*
  Generated class for the TestapiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TestapiProvider {
  data: any

  restApiUsername = 'http://104.196.19.248:5001/username/'
  constructor(public http: HttpClient,
              public alertCtrl: AlertController,
              public navCtrl: NavController) {
    console.log('Hello TestapiProvider Provider');
  }


}
