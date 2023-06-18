import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Iproduct } from '../interface/productInterface';
import { ProductServiceService } from '../services/pServices/product-service.service';

@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.scss']
})
export class ManageProductComponent implements OnInit {

  @ViewChild('manageProdForm') productForm!:NgForm;
  dataTitle:string='Listed Products';
  products:Array<Iproduct>=[];
  /*products:Array<Iproduct>=[
    {
      id:'po1',
      pName:'macCase',
      pPrice:4000
    },
    {
      id:'po2',
      pName:'iphone cover',
      pPrice:1000
    },
    {
      id:'po3',
      pName:'iwatch',
      pPrice:40000
    },
    {
      id:'po4',
      pName:'MacBook',
      pPrice:76000
    },
  ];*/


  constructor(private _productService:ProductServiceService) { }

  ngOnInit(): void {
    this.fetchProduct();
    //this.addProduct(this.productForm)
  }

  addProduct(productForm:NgForm){
    this._productService.saveProduct(this.products).subscribe(res=>{
      console.log(res);
      
    })
  }

  fetchProduct(){
    this._productService.fetchProduct().subscribe((prod)=>{
      console.log(typeof(prod));
      //console.log(...prod);
      /*Keep in mind that prod.length will be undefined, 
      because length is treated as a key, you should use Object.keys(a).length to get the length of an Associative Array.*/
      for(let eachProduct of Object.values(prod)){
         console.log(eachProduct);
        this.products.push(eachProduct)
      }
      // prod.forEach((obj:any) => {
      //   this.products.push(obj)
      // });
      //this.products=prod;
      
    })
  }

}
