import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from '../config';
import { Iemployee } from '../employeeInterface/empInterface';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  api = config.API_URL;
  url = `${this.api}/user-secure-list.json`;

  constructor(private _http:HttpClient) { }

  getEmployees(){
    return this._http.get<Iemployee>(this.url)
  }

  getSingleEmployee(userId:Iemployee['uniqueKey']){
    return this._http.get<Iemployee>(`${this.api}/user-secure-list/${userId}.json`);
  }

  updateSingleEmployee(userId:Iemployee['uniqueKey'], empDetail:Iemployee){
    return this._http.put(`${this.api}/user-secure-list/${userId}.json`,empDetail);
  }
}
