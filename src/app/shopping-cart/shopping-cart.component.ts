import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductService } from '../../servises/product.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  total :number =0;
  cartProduct : Product[] = [];


  constructor( private productservice : ProductService) { }

  ngOnInit(): void {
    this.cartProduct=this.productservice.getcart()

  }
  totalPrice( ){
    this.total=0
    for(let i=0 ; i<this.cartProduct.length;i++ ){
      var calc= this.cartProduct[i].price *this.cartProduct[i].amount;
       this.total += calc;
    }
     return this.total;
  }


  

  removeProduct(item:Product){
    if(confirm("you want to  remove this item?")== true){
      this.cartProduct = this.cartProduct.filter(p => p.id !== item.id)
      }
  }

}
