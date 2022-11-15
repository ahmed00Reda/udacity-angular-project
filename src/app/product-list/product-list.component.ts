import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../servises/product.service';
import { Product } from '../models/product.model';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList :  Product[] = [] ;
  likedproduct: Product[] = [];

  constructor( private productService : ProductService) { }
  

  ngOnInit(): void {
  //  this.productList=this.product.getProducts();
  this.productService.getProducts().subscribe( data => {
    for( let i=0 ; i< data.length ; i++){
      const product = data[i];
      product['amount'] = 1 ;
          } 
    this.productList =data
  }) 
  }
  addToLiked(Product:Product){
    this.likedproduct.push(Product)
    console.log(this.likedproduct)

  }

}
