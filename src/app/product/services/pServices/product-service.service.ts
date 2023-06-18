import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iproduct } from '../../interface/productInterface';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  url='https://basic-angular-app-83400-default-rtdb.firebaseio.com/product-list.json';
  private headers = new HttpHeaders({
    'Content-Type':'application/json'
  })

  constructor(private _http:HttpClient) { }

  fetchProduct(){
    return this._http.get(this.url);
  }
  saveProduct(products:Array<any>){
    return this._http.put(this.url, products,{headers:this.headers})
  }
}
