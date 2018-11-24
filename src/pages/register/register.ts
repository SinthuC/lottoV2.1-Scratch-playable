import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobalVarible } from '../../app/models';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user';
import { LoginPage } from '../login/login';
import { FormControl, Validator, Validators } from '@angular/forms';

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
  user: User = new User();
  
    // name:any;
    // password:any;
    confirmPassword: any;
  
  
  constructor(public http: HttpClient, public navCtrl: NavController, public navParams: NavParams) {

  }

    

  ionViewDidLoad() {

  }

  register() {

    this.http.get<User>(GlobalVarible.host + "/api/User/GetUsername/" + this.user.name)
      .subscribe(data => {
        if (data == null) {
          if (this.user.password == this.confirmPassword) {
            this.http.post(GlobalVarible.host + "/api/User/Create", JSON.stringify(this.user), GlobalVarible.httpOptions)
              .subscribe(data => {
                this.navCtrl.pop();
              });
          } else {
            alert("Password not equal to ConfirmPassword !!!");
          }
        } else {
          
          alert("Repeatedly !!!");
        }
      });

  }

  createUser() {

  }

}
