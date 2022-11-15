import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ProductService } from "../../../servises/product.service";
import { Product } from '../../models/product.model';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})


export class ProductComponent implements OnInit {
  @Input() product : Product ;
  @Output() like = new EventEmitter(); 



  constructor(private productService : ProductService) {
    this.product ={
      id:1,
      name:'',
      description:'',
      price:1,
      url: '',
      amount:1
    
    }
   }

  ngOnInit(): void {
  }

  addToCart(product : Product){
    this.productService.addToCart(product)
    window.alert("item added to cart succefully")

  }
  onlike( pro : Product){
    this.like.emit(pro)

  }


}
