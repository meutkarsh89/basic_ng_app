import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.scss']
})
export class ManageProductComponent implements OnInit {

  @ViewChild('manageProdForm') productForm!:NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  addProduct(productForm:NgForm){

  }

}
