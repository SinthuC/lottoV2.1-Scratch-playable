import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobalVarible } from '../../app/models';
import { HttpClient,HttpHeaders } from '@angular/common/http'
import { User } from '../../models/user';
/**
 * Generated class for the EditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html',
})
export class EditPage {
  user:User;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:HttpClient) {
    this.http.get<User>(GlobalVarible.host + "/api/User/Get/" + this.navParams.data.idapi)
    .subscribe(data => {
      this.user = data;
    });
  }

  Edit() {
    this.http.post(GlobalVarible.host + "/api/User/Edit", JSON.stringify(this.user), GlobalVarible.httpOptions)
      .subscribe(data => {
        this.navCtrl.pop();
      });
  }


}
