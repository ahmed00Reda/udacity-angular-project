import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../servises/product.service';

@Component({
  selector: 'app-confirmation-page',
  templateUrl: './confirmation-page.component.html',
  styleUrls: ['./confirmation-page.component.css']
})
export class ConfirmationPageComponent implements OnInit {
  name : string = "" ;
  total: number = 0 ;

  constructor( private pro :ProductService) { }

  ngOnInit(): void {
    this.total=this.pro.total
    this.name=this.pro.confirmationName
  }

}
