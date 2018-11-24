import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../models/user';
import { Ticket } from '../../models/ticket';
import { History } from '../../models/history';
/*
  Generated class for the SharedDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SharedDataProvider {
  public RandomNumbers: number[] = [];
  public User:User = new User();
  public Ticket:Ticket = new Ticket();
  public History:History = new History();

  constructor(public http: HttpClient) {
    console.log('Hello SharedDataProvider Provider');
  }



 

}
