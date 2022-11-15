import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmationPageComponent } from './confirmation-page/confirmation-page.component';
import { ProductDetailsComponent } from './product-list/product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

const routes: Routes = [ 
  {path : '' ,component :ProductListComponent},
  {path : 'productdetail/:id' ,component :ProductDetailsComponent},
  {path : 'shoppingCart' ,component :ShoppingCartComponent},
  {path : 'confirmation', component :ConfirmationPageComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
 
exports: [RouterModule]
})
export class AppRoutingModule { }
