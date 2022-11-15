import { Injectable } from '@angular/core';
import { Product } from '../app/models/product.model';
import {HttpClient}from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  cart : Product[] = []

  //confirmatin page info 
  confirmationName :string = '';
  total : number = 0 ;
  constructor( private http : HttpClient) { }
  
  getProducts() :Observable<Product[]> {
    return this.http.get<Product[]>('assets/data.json')

    
  }
// confirmation 
confirmation(name:string,total:number){
  this.total=total;
  this.confirmationName=name

}

  // cart info 
  getcart(){
    return this.cart
  }
  addToCart(product : Product){
    this.cart.push(product)

  }


 

}
