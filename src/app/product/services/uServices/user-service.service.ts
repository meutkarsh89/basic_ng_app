import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iuser } from '../../interface/user-interface';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private url:string='https://basic-angular-app-83400-default-rtdb.firebaseio.com/user-list.json'

  constructor(private _http:HttpClient) { }

  fetchUsers(){
    return this._http.get<Iuser>(this.url);
  }

  addUser(user:Iuser){
    return this._http.post(this.url, user);
  }

  editUser(user:Iuser){
    return this._http.put('https://basic-angular-app-83400-default-rtdb.firebaseio.com/user-list/'+user.uniqueKey+'.json', user);
  }

  deleteUser(userId:Iuser["uniqueKey"]){
    return this._http.delete('https://basic-angular-app-83400-default-rtdb.firebaseio.com/user-list/'+userId+'.json');
  }
}
