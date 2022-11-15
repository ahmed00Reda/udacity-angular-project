import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/servises/product.service';
import { Observable, throwError } from "rxjs";
import { catchError, map, tap } from 'rxjs/operators';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
 
  product: Product ;
  

  constructor( private productserveice : ProductService ,
    private route: ActivatedRoute,
              private router: Router,
              ) {
                this.product = {
                  id: 0,
                  name: "",
                  price: 0,
                  description: "",
                  url: "" ,
                  amount : 1 
                }
               }

  ngOnInit(): void {
    
    // this.productserveice.getProducts().subscribe( data => {
    //   for( let i=0 ; i< data.length ; i++){
    //     const product = data[i];
    //     product['amount'] = 1 ;
    //         } 
    //   this.product =data
    //   const id = Number(this.route.snapshot.paramMap.get('id')) ;
    //   this.Sproduct=this.product.find(pro =>{pro.id== id})
    
     
    // })
    this.route.params.subscribe(paramsId => {
      this.productserveice.getProducts().subscribe(res => {
        const productAsArray = res.filter(prod => `${prod.id}` === paramsId['id'])
        this.product = productAsArray[0]
        
        
      })
    })
   
    
      
    }

    addToCart(product : Product){
      this.productserveice.addToCart(product)
      window.alert("item added to cart succefully")
  
    }
   

  }



