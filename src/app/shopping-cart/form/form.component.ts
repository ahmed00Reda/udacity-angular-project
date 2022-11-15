import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/servises/product.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {


  name   = "";
  addres = "";
  credit = ""
  @Input() total = 0 ; 



  constructor( private router : Router ,
               private Product:ProductService ) { }

  namec(){
    return this.name

  }             

  ngOnInit(): void {
  }
  onSubmit(){
    
    this.Product.confirmation(this.name,this.total)

    this.router.navigate(["confirmation"])

  }

}
